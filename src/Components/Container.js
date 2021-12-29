import React from "react"
import Grocerylist from "./GroceryList";
import ShoppingCart from "./ShoppingCart";


class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Grocery_Items: [
                { id: 1, title: "Cheese Onion chips", amount: 1 },
                { id: 2, title: "Paprika chips", amount: 1 },
                { id: 3, title: "Coca Cola", amount: 1 },
                { id: 4, title: "Heineken", amount: 1 }
            ],
            ShoppingList_Items: [
                { id: 1, title: "Halfvolle melk", amount: 1 },
                { id: 2, title: "Bruin brood", amount: 1 },
                { id: 3, title: "Biefstuk worst", amount: 1 },
                { id: 4, title: "48+ Kaas", amount: 1 }

            ]
        }
        this.emptyCart = this.emptyCart.bind(this)
        this.addtoList = this.addtoList.bind(this)
        this.addtoCart = this.addtoCart.bind(this)
    }

    emptyCart() {

        let newState = this.state.Grocery_Items.map((input) => {
            input.amount = 1;
            return input;
        });
        this.setState({
            ShoppingList_Items: [],
            Grocery_Items: newState,
        });
    }

    addtoList(title) {
        if (title !== undefined && title !== null && title.length > 0) {
            this.setState(prevState => {
                const Grocery_Items = [...prevState.Grocery_Items]
                Grocery_Items.push({
                    id: Grocery_Items.length + 1,
                    title: title,
                    amount: 1
                })
                return {
                    Grocery_Items: Grocery_Items
                }
            })
        }
    }

    addtoCart = (title) => {

        if (title !== undefined && title !== null && title.length > 0) {
            this.setState(prevState => {
                const ShoppingList_Items = [...prevState.ShoppingList_Items]

                const shoppingList_Item = ShoppingList_Items.find(item => {
                    return item.title === title
                })

                if (shoppingList_Item !== undefined) {
                    shoppingList_Item.amount++;

                } else {
                    ShoppingList_Items.push({
                        id: ShoppingList_Items.length + 1,
                        title: title,
                        amount: 1
                    })
                }
                return {
                    ShoppingList_Items: ShoppingList_Items
                }
            })
        }
    }

    render() {
        return (
            <div className="Container">
                <div className="Groceries-List Groceries">
                    <Grocerylist
                        list={this.state.Grocery_Items}
                        onClick={this.addtoCart}
                        addClick={this.addtoList}
                    />
                </div>

                <div className="Shopping-Cart Shopping-Items">
                    <ShoppingCart

                        list={this.state.ShoppingList_Items}
                        onClick={this.addtoCart}
                        emptyClick={this.emptyCart}
                    />
                </div>
            </div>
        )
    }
}

export default Container

