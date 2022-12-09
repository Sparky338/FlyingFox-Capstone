// Types
const GET_ARTICLES = 'articles/GET_ARTICLES';
const CREATE_ARTICLE = 'articles/CREATE_ARTICLE';
const EDIT_ARTICLE = 'articles/EDIT_ARTICLE';
const DELETE_ARTICLE = 'articles/DELETE_ARTICLE';
const CLEAR_ARTICLES = 'articles/CLEAR_ARTICLE';

// Action Creators
const getArticlesAction = (articles) => {
    return {
        type: GET_ARTICLES,
        articles
    }
}

const createArticleAction = (article) => {
    return {
        type: CREATE_ARTICLE,
        article
    }
}

const editArticleAction = (article) => {
    return {
        type: EDIT_ARTICLE,
        article
    }
}

export const deleteArticleAction = (articleId) => {
    return {
        type: DELETE_ARTICLE,
        articleId
    }
}

export const clearArticleAction = () => {
    return {
        type: CLEAR_ARTICLES
    }
}


// Thunks
export const getAllArticles = () => async dispatch => {
    const res = await fetch('/api/articles');

    if (res.ok) {
        const articles = await res.json();
        dispatch(getArticlesAction(articles.articles));
    }
};

// Find how to pass the page number.
// export const getFourArticles = () => async dispatch => {
//     const res = await fetch('/api/articles');

//     if (res.ok) {
//         const articles = await res.json();
//         dispatch(getArticlesAction(articles.articles));
//     }
// };

export const createArticle = (articleData) => async dispatch => {
    const res = await fetch(`/api/articles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleData)
    });

    if (res.ok) {
        const article = await res.json();
        dispatch(createArticleAction(article));
        return article
    }
};

export const editArticle = (articleId, editArticleData) => async dispatch => {
    const res = await fetch(`/api/articles/${articleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editArticleData)
    });

    if (res.ok) {
        const article = await res.json();
        dispatch(editArticleAction(article));
        return article;
    }
};

export const deleteArticle = (articleId) => async dispatch => {
    const res = await fetch(`/api/articles/${articleId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        const article = `${articleId}`
        dispatch(deleteArticleAction(article))
    }
}

const initialState = {}

// Reducer
export default function articlesReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_ARTICLES:
            action.articles.forEach(article => newState[article.id] = article)
            return newState;
        case CREATE_ARTICLE:
            newState[action.article.id] = action.article
            return newState;
        case EDIT_ARTICLE:
            newState[action.article.id] = action.article
            return newState;
        case DELETE_ARTICLE:
            delete newState[action.articleId]
            return newState;
        case CLEAR_ARTICLES:
            return initialState
        default:
            return state;
    }
}
