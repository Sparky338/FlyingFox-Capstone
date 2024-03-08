import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articlesReducer from './articles';
import imagesReducer from './images';
import itemsReducer from './items';
import purchasesReducer from './purchases';
import purchasesItemsReducer from './purchasesItems';
import reviewsReducer from './reviews';
import session from './session'

/* correct the route for accessing the window in TypeScript */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  session,
  items:itemsReducer,
  purchases:purchasesReducer,
  purchasesItems:purchasesItemsReducer,
  reviews:reviewsReducer,
  images:imagesReducer,
  articles:articlesReducer,
});


let enhancer: any;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

let store: any;

const configureStore = (preloadedState: any) => {
  store = createStore(rootReducer, preloadedState, enhancer);
  return store
};

export default configureStore;
/* TypeScript type gathering for State */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
