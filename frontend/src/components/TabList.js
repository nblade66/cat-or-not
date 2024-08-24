  export default function TabList( { viewCats, selectCats, selectOthers }) {
    return (
      <div className="nav nav-tabs">
        <span
          className={viewCats ? "nav-link active" : "nav-link"}
          onClick={selectCats}
        >
            Cats (Cute!)
        </span>
        <span
          className={viewCats ? "nav-link" : "nav-link active"}
          onClick={selectOthers}
        >
            Not (also cute?)
        </span>
      </div>
    );
  };
