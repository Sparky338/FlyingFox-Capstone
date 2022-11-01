// Store for LocalStorage cart

// Types
const GET_CART = 'cart/GET_CART';
const ADD_CART = 'cart/ADD_CART';
const EDIT_CART = 'cart/EDIT_CART';
const DELETE_CART = 'cart/DELETE_CART';

// Action Creators
const getCartItems = (cart) => {
    return {
        type: GET_CART,
        cart
    }
}

const addCartItems = (cart) => {
    return {
        type: ADD_CART,
        cart
    }
}

const editCartItems = (cart) => {
    return {
        type: EDIT_CART,
        cart
    }
}

export const deleteCartItems = (cartId) => {
    return {
        type: DELETE_CART,
        cartId
    }
}


// Thunks
export const getCart = () => async dispatch => {
    const res = await fetch('/api/cart');

    if (res.ok) {
        const cart = await res.json();
        dispatch(getCartItems(cart.cart));
    }
};

export const addCart = (cartData) => async dispatch => {

    const res = await fetch(`/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartData)
    });

    if (res.ok) {
        const cart = await res.json();
        dispatch(addCartItems(cart));
        return cart;
    }
};

export const editCart = (cartId, editCartData) => async dispatch => {
    const res = await fetch(`/api/cart/${cartId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editCartData)
    });

    if (res.ok) {
        const cart = await res.json();
        dispatch(editCartItems(cart));
        return cart;
    }
};

export const deleteCart = (cartId) => async dispatch => {
    const res = await fetch(`/api/cart/${cartId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        const cart = `${cartId}`
        dispatch(deleteCartItems(cart))
    }
}

const initialState = {}

// Reducer
export default function cartReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_CART:
            action.cart.forEach(cart => newState[cart.id] = cart)
            return newState;
        case ADD_CART:
            newState[action.cart.id] = action.cart
            return newState;
        case EDIT_CART:
            newState[action.cart.id] = action.cart
            return newState;
        case DELETE_CART:
            delete newState[action.cartId]
            return newState;
        default:
            return state;
    }
}
