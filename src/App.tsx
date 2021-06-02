import React from 'react'
import {Box, Container, MuiThemeProvider} from '@material-ui/core/';
import {createMuiTheme} from '@material-ui/core/styles/';
import {Web3ReactProvider} from '@web3-react/core'
import {Provider} from "react-redux";
import {store} from "./store";
import {Account} from "./components/Account";
import {Nav} from "./components/Nav";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): any => provider;

const theme = createMuiTheme({
	palette: {
		primary: {main: "#9C2A20"},
	}
});

const App: React.FC = () =>
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<Nav />
				<Container component="main" maxWidth="lg">
					<Box marginTop={12} textAlign="center">
						<Account />
					</Box>
				</Container>
			</Web3ReactProvider>
		</MuiThemeProvider>
	</Provider>;

export default App;
