import React, { useEffect, useState, useCallback } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core/';
import { balanceOf, isAddressRegistered, lpBalanceOf } from "../../lib/web3";
import { useWeb3 } from "../../hooks/useWeb3";
import { LPRewards } from "./LPRewards";


const AccountInfo = ({ address, balance, lpBalance, isRegistered }) => <TableContainer component={Paper}>
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>Address:</TableCell>
				<TableCell>{address}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Your $SCAM balance:</TableCell>
				<TableCell>{balance}</TableCell>
			</TableRow>
			<LPRewards isRegistered={isRegistered} lpBalance={lpBalance} />
		</TableBody>
	</Table>
</TableContainer>;

const NotConnected = () => <div>Please connect your wallet.</div>;

export const Account = () => {
	const { account, active, web3 } = useWeb3();
	const [accountInfo, setAccountInfo] = useState(null);
	const fetchAccountInfo = useCallback(async () => {
		setAccountInfo({
			balance: await balanceOf(web3, account),
			lpBalance: await lpBalanceOf(web3, account),
			isRegistered: await isAddressRegistered(web3, account),
		})
	}, [account]);
	useEffect(() => {
		active && fetchAccountInfo();
	}, [active, fetchAccountInfo]);

	return active
		? <AccountInfo {...accountInfo} address={account} />
		: <NotConnected />;
};

