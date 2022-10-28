import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import { authenticate } from './store/session';
import HomePage from './components/home/home';
import LoginSignup from './components/login-signup/login-signup';
import { getAllItems } from './store/items';
import ItemById from './components/items/itemById';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
    dispatch(getAllItems());
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
        <Route path="/items/:id">
          <ItemById />
        </Route>
        {/* <ProtectedRoute path='/cart' exact={true}>

        </ProtectedRoute> */}
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
