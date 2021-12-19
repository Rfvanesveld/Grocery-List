import React from "react"
import List from "./List"
import InputField from "./InputField"

function Grocerylist(props) {
    return (
        <div
            className='Grocery-List'
        >
            <h2>GROCERY LIST</h2>
            <InputField
                click={props.addClick} />

            <List
                list={props.list}
                onClick={props.onClick} />
        </div>
    )
}

export default Grocerylist

