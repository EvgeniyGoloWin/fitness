import React from "react";
import {createBrowserRouter} from 'react-router-dom';
import {HomePage} from "../pages/homePage/HomePage";

const routes = [
    {
        path: '/',
        element: <HomePage/>,
    },
];

export const router = createBrowserRouter(routes);