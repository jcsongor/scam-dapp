import React, { useMemo, useState } from "react";
import { Button, Dialog } from '@material-ui/core/';
import { useConnectWallet } from "../../hooks/useConnectWallet";
import { WalletButton } from "./WalletButton";

const ConnectButton = ({ onClick, title = 'Connect' }) => <Button onClick={onClick}>{title}</Button>;

export const Connect = () => {
	const [open, setOpen] = useState(false);
	const { connectBinanceWallet, connectMetamask } = useConnectWallet();
	const openDialog = useMemo(() => () => setOpen(true), [setOpen]);
	const closeDialog = useMemo(() => () => setOpen(false), [setOpen]);

	return <>
		<WalletButton onClick={openDialog}>Connect</WalletButton>
		<Dialog open={open} onClose={closeDialog}>
			<ConnectButton onClick={connectBinanceWallet} title="Connect with Binance Chain Wallet" />
			<ConnectButton onClick={connectMetamask} title="Connect with Metamask" />
		</Dialog>
	</>;
};
