export default function ListItem({ item, viewCats, onEdit, onDelete }) {

    return (
        <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <img
                src={item.image_url}
                alt={viewCats ? "This is a cat!" : "This is not a cat :'("}
                width="150"
                height="auto"
            />
            <span
                className={`cat-name mr-2 ${viewCats ? "cat-item" : ""
                    }`}
                title={item.description}
            >
                {item.name}
            </span>
            <span>
                <button
                    className="btn btn-secondary mr-2"
                    onClick={() => onEdit(item)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(item)}
                >
                    Delete
                </button>
            </span>
        </li>
    )
}