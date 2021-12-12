import React from "react"
import Grocerylist from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Grocery_Items: [
                { id: 1, title: "Cheese Onion chips" },
                { id: 2, title: "Paprika chips" },
                { id: 3, title: "Coca Cola" },
                { id: 4, title: "Heineken" }
            ],
            ShoppingList_Items: [
                { id: 1, title: "Halfvolle melk" },
                { id: 2, title: "Bruin brood" },
                { id: 3, title: "Biefstuk worst" },
                { id: 4, title: "48+ Kaas" }

            ]
        }
        this.addGroceryListItemtoCart = this.addGroceryListItemtoCart.bind(this)
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    }

    addGroceryListItemtoCart(name, value) {

        const newIteminCart = { id: value, title: name };
        this.setState(prevState => {
            const ShoppingCartUpdated = [...prevState.ShoppingList_Items];
            ShoppingCartUpdated.push(newIteminCart);
            const newState = { ...prevState, ShoppingList_Items: ShoppingCartUpdated }
            return newState;
        })

    }

    emptyShoppingCart() {
        this.setState({ ShoppingList_Items: [] })
    }


    render() {
        return (
            <div className="Container">

                <Grocerylist
                    // className=".."
                    list={this.state.Grocery_Items}
                    onClick={this.addGroceryListItemtoCart}

                />
                <ShoppingCart
                    // className=".."
                    list={this.state.ShoppingList_Items}
                    onClick={this.addGroceryListItemtoCart}
                    emptyClick={this.emptyShoppingCart}
                />

            </div>
        )
    }
}

export default Container



