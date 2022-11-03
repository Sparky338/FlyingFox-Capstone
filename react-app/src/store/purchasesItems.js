const GET_PURCHASES_ITEMS = 'purchases/GET_PURCHASES_ITEMS';

const getPurchasesItemsAction = (purchasesItems) => {
    return {
        type: GET_PURCHASES_ITEMS,
        purchasesItems
    }
}

export const getAllPurchasesItems = () => async dispatch => {
    const res = await fetch('/api/purchases');

    if (res.ok) {
        const purchasesItems = await res.json();
        console.log("purchases items", purchasesItems)
        dispatch(getPurchasesItemsAction(purchasesItems));
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
