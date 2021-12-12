import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div className='shopping-cart'>
            <h2>SHOPPING CART</h2>

            <button
                onClick={props.emptyClick}> EMPTY CART
            </button>

            <List
                list={props.list}
                onClick={props.onClick} />

        </div>
    )
}

export default ShoppingCart
