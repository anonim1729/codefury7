import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { GeolocationProvider } from './contexts/GeolocationContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GeolocationProvider>
    <AuthProvider>
    <App />
  </AuthProvider>
  </GeolocationProvider>
);
