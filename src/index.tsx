import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appconfig from './config.json';

//import DAppProvider
import { DAppProvider, Mainnet } from '@usedapp/core';


const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: appconfig.mainnet_endpoint,
  },
}


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
    <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

