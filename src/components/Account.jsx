import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core/';
import { balanceOf, lpBalanceOf } from "../lib/web3";
import { useWeb3 } from "../hooks/useWeb3";

const AccountInfo = ({ account, balance, lpBalance }) => <TableContainer component={Paper}>
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>Address:</TableCell>
				<TableCell>{account}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Your $SCAM balance:</TableCell>
				<TableCell>{balance}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell> $SCAM LP tokens:</TableCell>
				<TableCell>{lpBalance}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableContainer>;

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

