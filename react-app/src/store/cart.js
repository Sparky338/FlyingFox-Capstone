// // Store for LocalStorage cart

// // Types
// const GET_CART = 'cart/GET_CART';
// const ADD_CART = 'cart/ADD_CART';
// const EDIT_CART = 'cart/EDIT_CART';
// const DELETE_CART = 'cart/DELETE_CART';

// // Action Creators
// const getCartItems = (cart) => {
//     return {
//         type: GET_CART,
//         cart
//     }
// }

// const addCartItems = (cart) => {
//     return {
//         type: ADD_CART,
//         cart
//     }
// }

// const editCartItems = (cart) => {
//     return {
//         type: EDIT_CART,
//         cart
//     }
// }

// export const deleteCartItems = (cartId) => {
//     return {
//         type: DELETE_CART,
//         cartId
//     }
// }


// // Thunks
// export const getCart = () => dispatch => {
//     const cart = localStorage.getItem('cart')

//     if (cart === null) return undefined;
//     return JSON.parse(localStorage.getItem('cart'))
// };

// export const addCart = (cartData) => dispatch => {
//     const cart = JSON.stringify(cartData)
//     localStorage.setItem('cart', cart)
// };

// export const editCart = (qty, itemId) => dispatch => { // cartId, editCartData
//     // const cart = JSON.stringify(editCartData)
//     // localStorage.setItem('cart', cart)

//     const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'))

//     if (parseInt(qty) <= 0 || isNaN(parseInt(qty))) {
//         qty = 1
//         alert("Quantity must be at least 1. If you wish to remove this item, click the X at the end of the row.")
//     }
//     itemQuantity[itemId] = qty
//     localStorage.setItem('itemQuantity', JSON.stringify(itemQuantity))

//     // const res =  fetch(`/api/cart/${cartId}`, {
//     //     method: 'PUT',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(editCartData)
//     // });

//     // if (res.ok) {
//     //     const cart =  res.json();
//     //     dispatch(editCartItems(cart));
//     //     return cart;
//     // }
// };

// export const deleteCart = (itemId) => dispatch => {
//     let res = window.confirm('Are you sure you want to remove this?')
//     if (res) {
//         const cart = localStorage.getItem('cart')
//         delete cart[itemId]
//         localStorage.setItem('cart', JSON.stringify(cart))
//         // dispatch(deleteCartItems())
//         // setCartState(localStorage.getItem('cart')) // to re-render
//     }

//     // const res = fetch(`/api/cart/${cartId}`, {
//     //     method: 'DELETE',
//     //     headers: { 'Content-Type': 'application/json' }
//     // });

//     // if (res.ok) {
//     //     const cart = `${cartId}`
//     //     dispatch(deleteCartItems(cart))
//     // }
// }

// const initialState = {}

// // Reducer
// export default function cartReducer(state = initialState, action) {
//     const newState = { ...state }
//     switch (action.type) {
//         case GET_CART:
//             action.cart.forEach(cart => newState[cart.id] = cart)
//             return newState;
//         case ADD_CART:
//             newState[action.cart.id] = action.cart
//             return newState;
//         case EDIT_CART:
//             newState[action.cart.id] = action.cart
//             return newState;
//         case DELETE_CART:
//             delete newState[action.cartId]
//             return newState;
//         default:
//             return state;
//     }
// }
