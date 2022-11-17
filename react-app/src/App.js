import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './store/items';
import { authenticate } from './store/session';

import NavBar from './components/NavBar';
import HomePage from './components/home/home';
import LoginSignup from './components/login-signup/login-signup';
import ItemById from './components/items/itemById';
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Cart from './components/cart/cart';
import CheckoutPage from './components/purchases/checkout-page';
import Orders from './components/purchases/orders';
import OrderById from './components/purchases/orderById';
import CreateReviewForm from './components/reviews/createReviewForm';
import EditReviewForm from './components/reviews/editReviewForm';
import EditShippingInfo from './components/cart/editShippingInfo';
import { getAllImages } from './store/images';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
    dispatch(getAllItems());
    dispatch(getAllImages())
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginSignup />
        </Route>
        <Route path='/items/:itemId/review/:reviewId/edit'>
          <EditReviewForm />
        </Route>
        <Route path='/items/:itemId/review'>
          <CreateReviewForm />
        </Route>
        <Route path="/items/:itemId">
          <ItemById />
        </Route>
        <ProtectedRoute path='/cart' exact={true}>
          <Cart />
        </ProtectedRoute>
        <ProtectedRoute path='/checkout'>
          <CheckoutPage />
        </ProtectedRoute>
        <ProtectedRoute path='/orders/:orderId/edit'>
          <EditShippingInfo />
        </ProtectedRoute>
        <ProtectedRoute path='/orders/:orderId'>
          <OrderById />
        </ProtectedRoute>
        <ProtectedRoute path='/orders'>
          <Orders />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>  */}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
