import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './store/items';
import { authenticate } from './store/session';
import { getAllArticles } from './store/articles';

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
import Developer from './components/developer/developer';
import Footer from './components/footer/footer';
import ScrollToTop from './components/ScrollToTop';
import Page404 from './components/404-page/404';
import Categories from './components/categories/categories';
import NewsPage from './components/articles/news';
import IndividualAricle from './components/articles/individualArticle';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getAllItems());
      await dispatch(getAllArticles());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginSignup />
        </Route>
        <Route path='/review/:reviewId/edit'>
          <EditReviewForm />
        </Route>
        <Route path='/items/:itemId/review'>
          <CreateReviewForm />
        </Route>
        <Route path="/items/:itemId">
          <ItemById />
        </Route>
        <Route path={`/category/:categoryName`}>
          <Categories />
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
        <Route path='/developer'>
          <Developer />
        </Route>
        <Route path='/news/:articleId'>
          <IndividualAricle />
        </Route>
        <Route path='/news'>
          <NewsPage />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
