import React, { useEffect, useState } from 'react'
import { balanceOf } from "../lib/web3";
import { useWeb3 } from "../hooks/useWeb3";

const AccountInfo = ({ account, balance }) => <div>
	<div>Account: {account}</div>
	<div>Your $SCAM balance: {balance}</div>
</div>;

const NotConnected = () => <div>Please connect your wallet.</div>;

export const Account = () => {
	const { account, active, web3 } = useWeb3();
	const [balance, setBalance] = useState(0);
	useEffect(() => {
		account ? balanceOf(web3, account).then(setBalance) : setBalance(0);
	}, [web3, account]);

	return active ? <AccountInfo balance={balance} account={account} /> : <NotConnected />;
};

