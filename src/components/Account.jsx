import React, { useEffect, useState } from 'react'
import { balanceOf, bscConnector, injectedConnector } from "../lib/web3";
import { useWeb3 } from "../hooks/useWeb3";

const ConnectButton = ({ onClick, title = 'Connect' }) => <button type="button" onClick={onClick}>{title}</button>;
const Connect = ({ connectBinanceWallet, connectMetamask }) => <>
	<ConnectButton onClick={connectBinanceWallet} title="Connect with Binance Chain Wallet" />
	<ConnectButton onClick={connectMetamask} title="Connect with Metamask" />
</>;

const AccountInfo = ({ account, balance }) => <div>
	<div>Account: {account}</div>
	<div>Your $SCAM balance: {balance}</div>
</div>;

export const Account = () => {
	const { account, activate, active, web3 } = useWeb3();
	const [balance, setBalance] = useState(0);
	useEffect(() => {
		account && balanceOf(web3, account).then(setBalance)
	}, [web3, account]);

	const connectBinanceWallet = () => activate(bscConnector);
	const connectMetamask = () => activate(injectedConnector);

	return <div>
		{
			active
				? <AccountInfo balance={balance} account={account} />
				: <Connect connectMetamask={connectMetamask} connectBinanceWallet={connectBinanceWallet} />
		}
	</div>;
};

