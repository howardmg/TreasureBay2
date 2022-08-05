import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { SearchProvider } from './context/SearchProvider';
import { LoadingProvider } from './context/LoadingProvider';
import { ConversationsProvider } from './context/ConversationsProvider';
import { SocketProvider } from './context/SocketProvider';
import { SingleProductProvider } from './context/ProductProvider';
import Search from './components/Header/SearchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <SearchProvider>
        <SingleProductProvider>
          <LoadingProvider>
            <SocketProvider>
              <ConversationsProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ConversationsProvider>
            </SocketProvider>
          </LoadingProvider>
        </SingleProductProvider>
      </SearchProvider>
    </UserProvider>
  </React.StrictMode>
);