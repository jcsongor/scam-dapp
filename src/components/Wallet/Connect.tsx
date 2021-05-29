import React, {useMemo, useState} from "react";
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
import CloseIcon from '@material-ui/icons/Close';
import {useConnectWallet} from "../../hooks/useConnectWallet";
import {WalletButton} from "./WalletButton";

const useStyles = makeStyles({
	closeButton: {
		position: 'absolute',
		right: 0,
		top: 7,
	},
});

type Props = { onClick: () => void, logo: string, title: string };

const ConnectButton: React.FC<Props> = ({onClick, title = 'Connect', logo}) => <ListItem button onClick={onClick}>
	<ListItemIcon><img src={logo} alt={title} width={32} height={32} /></ListItemIcon>
	<ListItemText>{title}</ListItemText>
</ListItem>;

export const Connect: React.FC = () => {
	const styles = useStyles();
	const [open, setOpen] = useState(false);
	const {connectBinanceWallet, connectMetamask, connectTrustWallet} = useConnectWallet();
	const openDialog = useMemo(() => () => setOpen(true), [setOpen]);
	const closeDialog = useMemo(() => () => setOpen(false), [setOpen]);
	const wallets = [
		{title: "Metamask", logo: "/metamask-logo.svg", onClick: connectMetamask},
		{title: "Binance Chain Wallet", logo: "/binance-logo.png", onClick: connectBinanceWallet},
		{title: "Trust Wallet", logo: "/trustwallet-logo.png", onClick: connectTrustWallet},
	];

	return <>
		<WalletButton onClick={openDialog}>Connect</WalletButton>
		<Dialog open={open} onClose={closeDialog}>
			<DialogTitle>Connect to a Wallet
				<IconButton aria-label="close" className={styles.closeButton} onClick={closeDialog}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<List>
						{wallets.map((wallet, idx) => <ConnectButton {...wallet} key={idx} />)}
					</List>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	</>;
};
