import ListItem from "./ListItem"

export default function ItemList( { viewCats, itemList, onEdit, onDelete }) {
    
    const newItems = itemList.filter(
        (item) => item.isCat == viewCats
    );

    return newItems.map((item) => (
        <ListItem
            item={item}
            viewCats={viewCats}
            onEdit={onEdit}
            onDelete={onDelete}
        />
    ));
};
