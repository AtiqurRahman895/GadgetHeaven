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
        element: <Dashboard/>,
      },
      {
        path: "/history",
        element: <History/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

    <ToastContainer position="top-center"/>

  </StrictMode>,
)
