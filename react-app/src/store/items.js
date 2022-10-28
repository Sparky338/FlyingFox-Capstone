// Types
const GET_ITEMS = 'items/GET_ITEMS';
const CLEAR_ITEMS = 'items/CLEAR_ITEM';

// Action Creators
const getItemsAction = (items) => {
    return {
        type: GET_ITEMS,
        items
    }
}

export const clearItemAction = () => {
    return {
        type: CLEAR_ITEMS
    }
}


// Thunks
export const getAllItems = () => async dispatch => {
    const res = await fetch('/api/items');

    if (res.ok) {
        const items = await res.json();
        dispatch(getItemsAction(items.items));
    }
};

const initialState = {}

// Reducer
export default function itemsReducer(state = initialState, action) {
    //normalize data example: businessArr.forEach(business => newState[business.id] = business)
    const newState = { ...state }
    switch (action.type) {
        case GET_ITEMS:
            action.items.forEach(item => newState[item.id] = item)
            return newState;
        case CLEAR_ITEMS:
            return {}
        default:
            return state;
    }
}
