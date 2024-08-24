import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import TabList from "./components/TabList";
import ItemList from "./components/ItemList";


function App() {
  const [appState, setState] = useState({
    viewCats: true,
    itemList: [],
    modal: false,
    activeItem: {
      name: "",
      description: "",
      isCat: false,
      image_url: null,
    }
  });

  console.log(appState.modal);

  function syncItemList() {
    axios
      .get("/api/cats/")
      .then((res) => setState({ ...appState, itemList: res.data, modal: false }))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    syncItemList();
  }, [])

  let toggle = () => {
    setState({ ...appState, modal: !appState.modal });
  }

  let handleDelete = (item) => {
    axios
      .delete(`/api/cats/${item.id}/`)
      .then(syncItemList);
  };

  let editItem = (item) => {
    console.log(item);
    setState({ ...appState, activeItem: item, modal: !appState.modal });
  };

  let handleSubmit = (item) => {
    if (!item.name) {
      alert("Empty name not allowed!");
      return;
    }
    setState({ ...appState, modal: false });

    let header = { "Content-Type": "multipart/form-data" };
    console.log(item);

    let form_data = new FormData();
    if (item.image_url) {
      form_data.append("image_url", item.image_url, item.image_url.name)
    }
    form_data.append("name", item.name);
    form_data.append("description", item.description);
    form_data.append("isCat", item.isCat);

    if (item.id) {
      axios
        .put(`/api/cats/${item.id}/`, form_data, {
          headers: header
        })
        .then(syncItemList)
        .catch((error) => {
          alert("Something broke when editing item!");
          console.log(error);
        });
      return;
    }
    axios
      .post(`/api/cats/`, form_data, {
        headers: header
      })
      .then(syncItemList)
      .catch((error) => {
        alert("Something broke when creating item!");
        console.log(error);
      });
  };

  function handleChange(e) {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setState({ ...appState, activeItem: { ...appState.activeItem, [name]: value } });
  };

  function handleImageChange(e) {
    console.log(e.target.files[0]);
    setState({ ...appState, activeItem: {...appState.activeItem, image_url: e.target.files[0] } });
  }


  let createItem = () => {
    const item = { name: "", description: "No description :'(", isCat: false, image_url: "" };

    setState({ ...appState, activeItem: item, modal: !appState.modal });
  };

  function selectCats() {
    setState({ ...appState, viewCats: true });
  }

  function selectOthers() {
    setState({ ...appState, viewCats: false });
  }

  return (
    <main className="container">
      <h1 className="text-uppercase text-center my-4">Cat or Not?</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={createItem}
              >
                Add Item
              </button>
            </div>
            <TabList
              viewCats={appState.viewCats}
              selectCats={selectCats}
              selectOthers={selectOthers}
            />
            <ul className="list-group list-group-flush border-top-0">
              <ItemList
                viewCats={appState.viewCats}
                itemList={appState.itemList}
                onDelete={handleDelete}
                onEdit={editItem}
              />
            </ul>
          </div>
        </div>
      </div>
      {appState.modal ? (
        <Modal
          activeItem={appState.activeItem}
          toggle={toggle}
          onSave={handleSubmit}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
        />
      ) : null}
    </main>
  );
}

export default App;