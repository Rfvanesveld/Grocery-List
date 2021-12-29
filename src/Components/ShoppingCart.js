import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div>
            <h2>SHOPPING CART</h2>

            <button className="Button"
                onClick={() => props.emptyClick()}>
                EMPTY CART
            </button>

            <List
                list={props.list}
                onClick={props.onClick} />

        </div>
    )
}

export default ShoppingCart
