import React from 'react';
import { Counter } from '../features/counter/Counter';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import './App.css';
import Root from '../components/Root';
import Shopping from '../components/Shopping/Shopping';
// import Signup from './components/SignUp';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Home from '../components/Home';
import Pantry from '../components/Pantry';
import Recipes from '../components/Recipes';

const router = createBrowserRouter( createRoutesFromElements( 
  <>
  <Route path="/login" element={ <Login /> } />

  <Route path="/" element={ <Root /> }>
    <Route path="login" element={ <Login /> } />
    <Route path="profile" element={ <Profile /> } />

    <Route path="home" element={ <Home /> } />
    <Route path="shopping" element={ <Shopping /> } />
    {/* <Route path="cart" element={ <Cart /> } /> */}
    {/* <Route path="checkout" element={ <Checkout /> } /> */}

    <Route path="pantry" element={ <Pantry /> } />
    <Route path="recipes" element={ <Recipes /> } />

    {/* <Route path="error" component={ <NotFound /> } /> */}

  </Route>
  </>
));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
      </header>
      <RouterProvider router={ router }/>
    </div>
  );
}

export default App;
