import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './Components/context/AuthContext.jsx'
import { WishlistProvider } from './Components/context/WishContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <AuthContextProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>
)
