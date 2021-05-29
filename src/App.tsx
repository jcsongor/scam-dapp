import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Box, Container, MuiThemeProvider } from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles/';
import { Account } from "./components/Account";
import { Nav } from "./components/Nav";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): any => provider;

const theme = createMuiTheme({
	palette: {
		primary: { main: "#9C2A20" },
	}
});

const App: React.FC = () =>
	<MuiThemeProvider theme={theme}>
		<Web3ReactProvider getLibrary={getLibrary}>
			<Nav />
			<Container component="main" maxWidth="lg">
				<Box marginTop={12} textAlign="center">
					<Account />
				</Box>
			</Container>
		</Web3ReactProvider>
	</MuiThemeProvider>;

export default App;
