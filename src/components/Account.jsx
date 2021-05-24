import React from 'react'
import { useWeb3React } from "@web3-react/core";
import { bscConnector, injectedConnector } from "../lib/web3";

const ConnectButton = ({ onClick, title = 'Connect' }) => <button type="button" onClick={onClick}>{title}</button>;

export const Account = () => {
	const { account, activate, active } = useWeb3React();

	const connectBinanceWallet = () => activate(bscConnector);
	const connectMetamask = () => activate(injectedConnector);

	return <div>
		{
			active
				? <div>Account: {account}</div>
				: <>
					<ConnectButton onClick={connectBinanceWallet} title="Connect with Binance Chain Wallet" />
					<ConnectButton onClick={connectMetamask} title="Connect with Metamask" />
				</>
		}
	</div>;
};

