import React from 'react';
import { AppBar, Box, Grid, Toolbar } from "@material-ui/core";
import { Wallet } from "./Wallet";

export const Nav = () => <AppBar position="static">
	<Toolbar>
		<Grid container>
			<Grid item xs={12} container justify="flex-end">
				<Box paddingTop={0.3}>
					<Wallet />
				</Box>
			</Grid>
		</Grid>
	</Toolbar>
</AppBar>;
