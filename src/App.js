import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Account } from "./components/Account";

const getLibrary = (provider) => provider;

const App = () => <Web3ReactProvider getLibrary={getLibrary}>
	<Account />
</Web3ReactProvider>;

export default App;
