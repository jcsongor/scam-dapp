import React, { useEffect, useState } from 'react'
import { balanceOf, lpBalanceOf } from "../lib/web3";
import { useWeb3 } from "../hooks/useWeb3";

const AccountInfo = ({ account, balance, lpBalance }) => <div>
	<div>Address: {account}</div>
	<div>Your $SCAM balance: {balance}</div>
	<div>$SCAM LP tokens: {lpBalance}</div>
</div>;

const NotConnected = () => <div>Please connect your wallet.</div>;

export const Account = () => {
	const { account, active, web3 } = useWeb3();
	const [balance, setBalance] = useState(0);
	const [lpBalance, setLPBalance] = useState(0);
	useEffect(() => {
		account ? balanceOf(web3, account).then(setBalance) : setBalance(0);
		account ? lpBalanceOf(web3, account).then(setLPBalance) : setLPBalance(0);
	}, [web3, account]);

	return active ? <AccountInfo balance={balance} lpBalance={lpBalance} account={account} /> : <NotConnected />;
};

