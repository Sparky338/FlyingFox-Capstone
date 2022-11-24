// Types
const GET_IMAGES = 'images/GET_IMAGES';
const CREATE_IMAGE = 'images/CREATE_IMAGE';
const EDIT_IMAGE = 'images/EDIT_IMAGE';
const DELETE_IMAGE = 'images/DELETE_IMAGE';
const CLEAR_IMAGES = 'images/CLEAR_IMAGE';

// Action Creators
const getImagesAction = (images) => {
    return {
        type: GET_IMAGES,
        images
    }
}

const createImageAction = (image) => {
    return {
        type: CREATE_IMAGE,
        image
    }
}

const editImageAction = (image) => {
    return {
        type: EDIT_IMAGE,
        image
    }
}

export const deleteImageAction = (imageId) => {
    return {
        type: DELETE_IMAGE,
        imageId
    }
}

export const clearImageAction = () => {
    return {
        type: CLEAR_IMAGES
    }
}


// Thunks
export const getAllImages = () => async dispatch => {
    const res = await fetch(`/api/images`);

    if (res.ok) {
        const images = await res.json();
        dispatch(getImagesAction(images.images));
    }
};

export const createImage = (imageData) => async dispatch => {

    const res = await fetch(`/api/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imageData)
    });

    if (res.ok) {
        const image = await res.json();
        dispatch(createImageAction(image));
        return image;
    }
};

export const editImage = (imageId, editImageData) => async dispatch => {
    const res = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editImageData)
    });

    if (res.ok) {
        const image = await res.json();
        dispatch(editImageAction(image));
        return image;
    }
};

export const deleteImage = (imageId) => async dispatch => {
    const res = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        const image = `${imageId}`
        dispatch(deleteImageAction(image))
    }
}

const initialState = {}

// Reducer
export default function imagesReducer(state = initialState, action) {
    //normalize data example: businessArr.forEach(business => newState[business.id] = business)
    const newState = { ...state }
    switch (action.type) {
        case GET_IMAGES:
            action.images.forEach(image => newState[image.id] = image)
            return newState;
        case CREATE_IMAGE:
            newState[action.image.id] = action.image
            return newState;
        case EDIT_IMAGE:
            newState[action.image.id] = action.image
            return newState;
        case DELETE_IMAGE:
            delete newState[action.imageId]
            return newState;
        case CLEAR_IMAGES:
            return {}
        default:
            return state;
    }
}
