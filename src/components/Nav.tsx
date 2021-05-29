import React from 'react';
import {AppBar, Box, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Wallet} from "./Wallet";

const useStyles = makeStyles(() => ({
	appBar: {backgroundColor: "white"},
	logo: {marginTop: 20, marginBottom: 20},
}));

export const Nav: React.FC = () => {
	const styles = useStyles();
	return <AppBar position="static" classes={{root: styles.appBar}}>
		<Toolbar>
			<Grid container>
				<Grid item xs={6} container>
					<img src="/logo.png" className={styles.logo} alt="SCAM coin logo" />
				</Grid>
				<Grid item xs={6} container justify="flex-end">
					<Box paddingTop={2}>
						<Wallet />
					</Box>
				</Grid>
			</Grid>
		</Toolbar>
	</AppBar>;
};
