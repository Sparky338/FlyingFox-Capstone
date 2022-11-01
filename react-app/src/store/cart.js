// Store for LocalStorage cart

// Types
const GET_CART = 'cart/GET_CART';
const CREATE_CART = 'cart/CREATE_CART';
const EDIT_CART = 'cart/EDIT_CART';
const DELETE_CART = 'cart/DELETE_CART';

// Action Creators
const getCartAction = (cart) => {
    return {
        type: GET_CART,
        cart
    }
}

const createCartAction = (cart) => {
    return {
        type: CREATE_CART,
        cart
    }
}

const editCartAction = (cart) => {
    return {
        type: EDIT_CART,
        cart
    }
}

export const deleteCartAction = (cartId) => {
    return {
        type: DELETE_CART,
        cartId
    }
}


// Thunks
export const getAllCart = () => async dispatch => {
    const res = await fetch('/api/cart');

    if (res.ok) {
        const cart = await res.json();
        dispatch(getCartAction(cart.cart));
    }
};

export const createCart = (cartData) => async dispatch => {

    const res = await fetch(`/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartData)
    });

    if (res.ok) {
        const cart = await res.json();
        dispatch(createCartAction(cart));
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
        dispatch(editCartAction(cart));
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
        dispatch(deleteCartAction(cart))
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
        case CREATE_CART:
            newState[action.cart.id] = action.cart
            return newState;
        case EDIT_CART:
            newState[action.cart.id] = action.cart
            return newState;
        case DELETE_CART:
            delete newState[action.cartId]
            return newState;
        case CLEAR_CART:
            return {}
        default:
            return state;
    }
}
