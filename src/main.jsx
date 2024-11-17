import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Base from './components/baseComponent/Base';
import Home from './components/HomeComponent/Home';
import Gadget from './components/GadgetPageComponent/Gadget';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import Dashboard from './components/DashboardPageComponent/Dashboard';
import History from './components/HistoryPageComponent.jsx/History';
import ErrorPage from './components/ErrorPageComponent/ErrorPage';
import Login from './components/AuthenticationComponent/Login';
import Register from './components/AuthenticationComponent/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './components/AuthenticationComponent/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/gadget/:product_id",
        element: <Gadget/>,
      },
      {
        path: "/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
      },
      {
        path: "/history",
        element:<PrivateRoute><History/></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </HelmetProvider>

    <ToastContainer position="top-center"/>

  </StrictMode>,
)
