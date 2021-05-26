import React from "react";
import { Button } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	button: { color: "white", textDecoration: "none" },
}));

export const WalletButton = ({ children, ...props }) => {
	const styles = useStyles();
	return <Button className={styles.button}{...props}>{children}</Button>;
};
