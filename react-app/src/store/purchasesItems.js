const GET_PURCHASES_ITEMS = 'purchases/GET_PURCHASES_ITEMS';

const getPurchasesItemsAction = (purchasesItems) => {
    return {
        type: GET_PURCHASES_ITEMS,
        purchasesItems
    }
}

export const getAllPurchasesItems = () => async dispatch => {
    const res = await fetch('/api/purchases_items');

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
        default:
            return state;
    }
}
