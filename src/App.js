import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Box, Container } from '@material-ui/core/';
import { Account } from "./components/Account";
import { Nav } from "./components/Nav";

const getLibrary = (provider) => provider;

const App = () => <Web3ReactProvider getLibrary={getLibrary}>
	<Nav />
	<Container component="main" maxWidth="lg">
		<Box marginTop={12} align="center">
		<Account />
		</Box>
	</Container>
</Web3ReactProvider>;

export default App;
