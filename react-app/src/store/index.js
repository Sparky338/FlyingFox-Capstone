import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articlesReducer from './articles';
import imagesReducer from './images';
import itemsReducer from './items';
import purchasesReducer from './purchases';
import purchasesItemsReducer from './purchasesItems';
import reviewsReducer from './reviews';
import session from './session'

const rootReducer = combineReducers({
  session,
  items:itemsReducer,
  purchases:purchasesReducer,
  purchasesItems:purchasesItemsReducer,
  reviews:reviewsReducer,
  images:imagesReducer,
  articles:articlesReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
