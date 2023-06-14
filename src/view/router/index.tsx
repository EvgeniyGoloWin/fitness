import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LogIn } from '../pages/home/login/LogIn';
import { Registration } from '../pages/home/registr/Registration';
import { Home } from '../pages/home/home/Home';
import { Crossfit } from '../pages/crossfit/Crossfit';
import { Functional } from '../pages/functional/Functional';

const routes = [
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/crossfit',
    element: <Crossfit />,
  },
  {
    path: '/functional',
    element: <Functional />,
  },
];

export const router = createBrowserRouter(routes);
