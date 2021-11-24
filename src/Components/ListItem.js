import React from 'react';

function ListItem(props) {

    const title = props.groceryItems.map(item => {
        return (
            <li className="listItem"
                key={item.id}
                value={item.title}>
                {/* onClick={clickItem} */}
                {item.title}
            </li>
        )
    })
    return (
        <div>
            <ul>{title}</ul>
        </div>)

}

export default ListItem


