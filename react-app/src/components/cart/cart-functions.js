if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', "[]");
}

const items = JSON.parse(localStorage.getItem("Items"))
const cart = JSON.parse(localStorage.getItem('cart'))

// export const AddToCart = () => {
//     const { itemId } = useParams();
//     const history = useHistory();

//     let item = items.find(item => item.id === itemId)

//     if (cart.length === 0) {
//         cart.push(item);
//     } else {
//         const inCart = cart.find(el => el.id === itemId);
//         if (inCart === undefined) {
//             cart.push(item);
//         }
//     }

//     localStorage.setItem('cart', JSON.stringify(cart))
//     history.push("/cart")

// }
