import React from 'react'

import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router} from 'react-dom'

import App from './App'

import './index.css'

import {PrivyProvider} from '@privy-io/react-auth';

const root = ReactDOM.createRoot(document.getElementById("root"));

//For private authentication
root.render(
    <PrivyProvider
      appId="cm1g8p61s01ojdadz760qpken"
      config={{
        
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          
        },
        // Create embedded wallets for users who don't have a wallet
        
      }}
    >
      <router>
        <App />
      </router>
    </PrivyProvider>
);