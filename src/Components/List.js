import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                { id: 1, title: "Oranges" },
                { id: 2, title: "Bananas" },
                { id: 3, title: "Melons" },
            ],
        }
    }

    render() {

        return (
            <ListItem groceryItems={this.state.groceryItems} />
        )
    }
}

export default List


// class List extends React.Component {
//     constructor() {
//         super()
//         this.state = {}
//     }

//     render() {

//         return (
//             <ul className="ListItems">

//                 <ListItem
//                     item={{
//                         title: "Appels",
//                         id: 1
//                     }} />

//                 <ListItem
//                     item={{
//                         title: "Bananas",
//                         id: 2
//                     }}
//                 />

//                 <ListItem
//                     item={{
//                         title: "Melons",
//                         id: 3
//                     }}
//                 />

//                 <ListItem
//                     item={{
//                         title: "Oranges",
//                         id: 5
//                     }}
//                 />
//             </ul>

//         )
//     }
// }





















// function List(props) {
//     // const ListItem = props.items.map(item => {
//     //     return (
//     //         <ListItem
//     //             item={item}
//     //         // key={item.id}
//     //         // title={item.title}
//     //         // id={item.id}
//     //         // amount={item.amount}
//     //         />
//     //     )

//     // })
//     return (
//         <div>

//             <ListItem />

//             {/* {ListItem} */}

//         </div>
//     )
// }

// export default List



















// function List(props) {
//     const listItem = props.items.map(item =>
//         <listItem
//             key={item.id}
//             title={item.title}
//             item={item}
//         />
//     )
//     return (
//         <ul>
//             {listItem}
//             <h1>Banana's</h1>
//         </ul>
//     )
// }