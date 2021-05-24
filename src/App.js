import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Wallet } from "./components/Wallet";

const getLibrary = (provider) => new Web3Provider(provider);

const App = () => <Web3ReactProvider getLibrary={getLibrary}>
	<Wallet />
</Web3ReactProvider>;

export default App;
