import React from "react"
import List from "./List"

function Grocerylist(props) {
    return (
        <div
            className='Grocery-List'>
            <h2>GROCERY LIST</h2>
            <List
                list={props.list}
                onClick={props.onClick} />
        </div>
    )
}

export default Grocerylist

