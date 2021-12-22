import React from "react"

function ListItem(props) {
    const item = props.item
    return (
        <li
            className="List-Item"
            key={item.id}
            value={item.title}
            onClick={() => props.onClick(item.title)}
        >
            <div> {item.amount} {item.title} </div>

        </li>
    )
}

export default ListItem




