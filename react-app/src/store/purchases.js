// Types
const GET_PURCHASES = 'purchases/GET_PURCHASES';
const CREATE_PURCHASE = 'purchases/CREATE_PURCHASE';
const EDIT_PURCHASE = 'purchases/EDIT_PURCHASE';
const DELETE_PURCHASE = 'purchases/DELETE_PURCHASE';
const CLEAR_PURCHASES = 'purchases/CLEAR_PURCHASE';

// Action Creators
const getPurchasesAction = (purchases) => {
    return {
        type: GET_PURCHASES,
        purchases
    }
}

const createPurchaseAction = (purchase) => {
    return {
        type: CREATE_PURCHASE,
        purchase
    }
}

const editPurchaseAction = (purchase) => {
    return {
        type: EDIT_PURCHASE,
        purchase
    }
}

export const deletePurchaseAction = (purchaseId) => {
    return {
        type: DELETE_PURCHASE,
        purchaseId
    }
}

export const clearPurchaseAction = () => {
    return {
        type: CLEAR_PURCHASES
    }
}


// Thunks
export const getAllPurchases = () => async dispatch => {
    const res = await fetch('/api/purchases');

    if (res.ok) {
        const purchases = await res.json();
        dispatch(getPurchasesAction(purchases.purchases));
    }
};

export const createPurchase = (cartItemsId, cartQuantities, sum, shippingInformation) => async dispatch => {
    const res = await fetch(`/api/purchases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cartItemsId, cartQuantities, sum, shippingInformation})
    });

    if (res.ok) {
        const purchase = await res.json();
        dispatch(createPurchaseAction(purchase));
        return purchase
    }
};

export const editPurchase = (purchaseId, editPurchaseData) => async dispatch => {
    const res = await fetch(`/api/purchases/${purchaseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editPurchaseData)
    });

    if (res.ok) {
        const purchase = await res.json();
        dispatch(editPurchaseAction(purchase));
        return purchase;
    }
};

export const deletePurchase = (purchaseId) => async dispatch => {
    const res = await fetch(`/api/purchases/${purchaseId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    console.log("delete res here",res)

    if (res.ok) {
        const purchase = `${purchaseId}`
        dispatch(deletePurchaseAction(purchase))
    }
}

const initialState = {}

// Reducer
export default function purchasesReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_PURCHASES:
            action.purchases.forEach(purchase => newState[purchase.id] = purchase)
            return newState;
        case CREATE_PURCHASE:
            newState[action.purchase.id] = action.purchase
            return newState;
        case EDIT_PURCHASE:
            newState[action.purchase.id] = action.purchase
            return newState;
        case DELETE_PURCHASE:
            console.log("before delete reducer", newState[action.purchaseId])
            delete newState[action.purchaseId]
            return newState;
        case CLEAR_PURCHASES:
            return initialState
        default:
            return state;
    }
}
