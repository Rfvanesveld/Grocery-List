import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const List_Items = props.list.map(item => {
        return (
            <ListItem
                key={item.id}
                item={item}
                onClick={props.onClick} />
        )
    })
    return (
        <ul>
            {List_Items}
        </ul>
    )
}

export default List

