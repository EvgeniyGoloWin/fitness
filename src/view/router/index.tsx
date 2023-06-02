import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LogIn } from '../pages/home/login/LogIn';
import { Registration } from '../pages/home/registr/Registration';

const routes = [
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
];

export const router = createBrowserRouter(routes);
