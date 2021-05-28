import React, { useEffect, useState, useCallback } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core/';
import {
	balanceOf,
	isAddressRegistered,
	lpMonitorBalanceOf,
	lpBalanceOf,
	register,
	update,
	promotionRunning
} from "../../lib/web3";
import { useWeb3 } from "../../hooks/useWeb3";
import { LPRewards } from "./LPRewards";

const AccountInfo = ({ address, balance, lpBalance, lpMonitorBalance, isRegistered, isPromotionRunning, fetchAccountInfo, register, update }) =>
	<TableContainer
		component={Paper}>
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
				<LPRewards
					isPromotionRunning={isPromotionRunning}
					isRegistered={isRegistered}
					lpBalance={lpBalance}
					lpMonitorBalance={lpMonitorBalance}
					refresh={fetchAccountInfo}
					register={register}
					update={update}
				/>
			</TableBody>
		</Table>
	</TableContainer>;

const NotConnected = () => <div>
	<Typography variant="h3" color="primary">Please Connect Your Wallet.</Typography><br />
	<img src="/icon.png" alt="scam coin logo" />
</div>;

export const Account = () => {
	const { account, active, web3 } = useWeb3();
	const [accountInfo, setAccountInfo] = useState(null);
	const fetchAccountInfo = useCallback(async () => {
		setAccountInfo({
			balance: await balanceOf(web3, account),
			lpMonitorBalance: await lpMonitorBalanceOf(web3, account),
			lpBalance: await lpBalanceOf(web3, account),
			isRegistered: await isAddressRegistered(web3, account),
			isPromotionRunning: await promotionRunning(web3),
		})
	}, [account]);
	const registerAndRefresh = useCallback(async () => {
		await register(web3, account);
		fetchAccountInfo();
	}, [fetchAccountInfo, account]);
	const updateAndRefresh = useCallback(async () => {
		await update(web3, account);
		fetchAccountInfo();
	}, [fetchAccountInfo, account]);
	useEffect(() => {
		active && fetchAccountInfo();
	}, [active, fetchAccountInfo]);

	return active
		? <AccountInfo
			{...accountInfo}
			address={account}
			fetchAccountInfo={fetchAccountInfo}
			register={registerAndRefresh}
			update={updateAndRefresh}
		/>
		: <NotConnected />;
};

