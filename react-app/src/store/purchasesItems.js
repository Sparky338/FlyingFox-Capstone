// Types
const GET_PURCHASES_ITEMS = 'purchases_items/GET_PURCHASES_ITEMS';
const CLEAR_PURCHASES_ITEMS = 'purchases_items/CLEAR_PURCHASES_ITEMS';

// Action creators
const getPurchasesItemsAction = (purchasesItems) => {
    return {
        type: GET_PURCHASES_ITEMS,
        purchasesItems
    }
}

export const clearPurchaseItemsAction = () => {
    return {
        type: CLEAR_PURCHASES_ITEMS
    }
}

//thunk
export const getAllPurchasesItems = () => async dispatch => {
    const res = await fetch(`/api/purchases_items`);

    if (res.ok) {
        const purchasesItems = await res.json();
        dispatch(getPurchasesItemsAction(purchasesItems.purchases_items));
    }
};

export const getOrderPurchasesItems = (orderId) => async dispatch => {
    const res = await fetch(`/api/purchases_items/${orderId}`);

    if (res.ok) {
        const purchasesItems = await res.json();
        dispatch(getPurchasesItemsAction(purchasesItems.purchases_items));
    }
};

const initialState = {}

// Reducer
export default function purchasesItemsReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_PURCHASES_ITEMS:
            action.purchasesItems.forEach(purchaseItem => newState[purchaseItem.id] = purchaseItem)
            return newState;
        case CLEAR_PURCHASES_ITEMS:
            return initialState
        default:
            return state;
    }
}
