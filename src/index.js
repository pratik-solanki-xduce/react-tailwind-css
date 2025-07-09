import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';
import { Error404 } from './pages/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:id",
    element: <BlogDetails />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.render(
  <React.StrictMode>

    <RouterProvider router={router} future={{ v7_startTransition: true }}  />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();