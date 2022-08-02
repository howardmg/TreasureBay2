import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { LoadingProvider } from './context/LoadingProvider';
import { ConversationsProvider } from './context/ConversationsProvider';
import { SocketProvider } from './context/SocketProvider';
import { SingleProductProvider } from './context/ProductProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <SingleProductProvider>
        <SocketProvider>
          <LoadingProvider>
            <ConversationsProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ConversationsProvider>
          </LoadingProvider>
        </SocketProvider>
      </SingleProductProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
