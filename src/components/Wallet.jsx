import React from 'react'
import { useWeb3React } from "@web3-react/core";
import { bscConnector } from "../lib/web3";

const ConnectButton = ({ onClick }) => <button type="button" onClick={onClick}> Connect </button>;

export const Wallet = () => {
	const { account, activate, active } = useWeb3React();

	const onClick = () => activate(bscConnector);

	return <div>
		{
			active
				? <div>Account: {account}</div>
				: <ConnectButton onClick={onClick} />
		}
	</div>;
};

