import React, {useMemo, useState, useCallback} from "react";
import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from '@material-ui/core/';
import {useWeb3} from "../../hooks/useWeb3";
import {maskAddress} from "../../lib/web3";
import {WalletButton} from "./WalletButton";
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useAppDispatch} from "../../store/hooks";
import {resetAccountInfo} from "../../store/slices/accountSlice";

const useStyles = makeStyles({
	closeButton: {
		position: 'absolute',
		right: 0,
		top: 7,
	},
});

export const Connected: React.FC = () => {
	const styles = useStyles();
	const [open, setOpen] = useState(false);
	const {account, deactivate} = useWeb3();
	const appDispatch = useAppDispatch();
	const disconnect = useCallback(() => {
		deactivate();
		appDispatch(resetAccountInfo())
	}, [deactivate]);
	const openDialog = useMemo(() => () => setOpen(true), [setOpen]);
	const closeDialog = useMemo(() => () => setOpen(false), [setOpen]);

	return account ? <>
		<WalletButton onClick={openDialog}>{maskAddress(account)}</WalletButton>
		<Dialog open={open} onClose={closeDialog}>
			<DialogTitle>Logout
				<IconButton aria-label="close" className={styles.closeButton} onClick={closeDialog}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<List>
						<ListItem button onClick={disconnect}>
							<ListItemIcon><ExitToAppIcon /></ListItemIcon>
							<ListItemText>Disconnect Your Wallet</ListItemText>
						</ListItem>
					</List>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	</> : <></>;
};
