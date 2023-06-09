import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Router} from 'react-router-dom';
import Test from './pages/Test/Test';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Cookies from 'js-cookie';
import SignedOut from './pages/SignedOut/SignedOut';




export const UserContext = React.createContext();











const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register", 
    element: <Register/>
  }, 
  {
    path: "dashboard", 
    element: <Dashboard />
  },
  {
    path: "signedout", 
    element: <SignedOut />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{UserContext}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
