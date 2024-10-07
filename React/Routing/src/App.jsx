import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import User from './components/ProductList';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Navbar />
        <Home />
      </>
    },
    {
      path: '/login',
      element: <>
        <Navbar />
        <Product />
      </>
    },
    {
      path: '/user/:username',
      element: <>
        <Navbar />
        <User />
      </>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
