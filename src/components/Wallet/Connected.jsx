import React, { useMemo, useState } from "react";
import { Button, Dialog } from '@material-ui/core/';
import { useWeb3 } from "../../hooks/useWeb3";
import { maskAddress } from "../../lib/web3";
import { WalletButton } from "./WalletButton";

const DisconnectButton = ({ onClick }) => <Button type="button" onClick={onClick}>Logout</Button>;

export const Connected = () => {
	const [open, setOpen] = useState(false);
	const { account, deactivate } = useWeb3();
	const openDialog = useMemo(() => () => setOpen(true), [setOpen]);
	const closeDialog = useMemo(() => () => setOpen(false), [setOpen]);

	return <>
		<WalletButton onClick={openDialog}>{maskAddress(account)}</WalletButton>
		<Dialog open={open} onClose={closeDialog}>
			<DisconnectButton onClick={deactivate} title="Connect with Binance Chain Wallet" />
		</Dialog>
	</>;
};
