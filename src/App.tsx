import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './view/router';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from './init/store/store';
import { theme } from './themes/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {' '}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
