import { Provider } from 'react-redux';
import { store } from './store';
import React, { PropsWithChildren } from 'react';
import { ThemeContextProvider } from './themeContext';


const MainContext: React.FC<PropsWithChildren> = ({ children }) => {

  return <Provider store={store}>
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  </Provider>;
};

export default MainContext;