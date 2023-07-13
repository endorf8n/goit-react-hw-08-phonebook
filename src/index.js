import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';
import GlobalCSS from 'styles/globalStyles';
import { theme } from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <GlobalCSS />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
            <ToastContainer autoClose={1000} />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
