import React, {useEffect, useState, useCallback} from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@material-ui/core/';
import {
	balanceOf,
	isAddressRegistered,
	lpMonitorBalanceOf,
	lpBalanceOf,
	register,
	update,
	promotionRunning
} from "../../lib/web3";
import {useWeb3} from "../../hooks/useWeb3";
import {LPRewards} from "./LPRewards";

type AccountInfoProps = {
	address: string,
	balance: string,
	lpBalance: string,
	lpMonitorBalance: string,
	isRegistered: boolean,
	isPromotionRunning: boolean,
	fetchAccountInfo: () => void,
	register: () => void,
	update: () => void,
}
const AccountInfo: React.FC<AccountInfoProps> = ({address, balance, lpBalance, lpMonitorBalance, isRegistered, isPromotionRunning, register, update}) =>
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

type AccountInfo = {
	address: string;
	balance: string;
	lpMonitorBalance: string;
	lpBalance: string;
	isRegistered: boolean;
	isPromotionRunning: boolean;
}

export const Account: React.FC = () => {
	const {active, account, web3} = useWeb3();
	const [accountInfo, setAccountInfo] = useState<AccountInfo|null>(null);
	const fetchAccountInfo = useCallback(async () => {
		account && setAccountInfo({
			address: account,
			balance: await balanceOf(web3, account),
			lpMonitorBalance: await lpMonitorBalanceOf(web3, account),
			lpBalance: await lpBalanceOf(web3, account),
			isRegistered: await isAddressRegistered(web3, account),
			isPromotionRunning: await promotionRunning(web3, account),
		})
	}, [account]);
	const registerAndRefresh = useCallback(async () => {
		if (account) {
			await register(web3, account);
		}
		fetchAccountInfo();
	}, [fetchAccountInfo, account]);
	const updateAndRefresh = useCallback(async () => {
		if (account) {
			await update(web3, account);
		}
		fetchAccountInfo();
	}, [fetchAccountInfo, account]);
	useEffect(() => {
		fetchAccountInfo();
	}, [account, fetchAccountInfo]);

	return active && accountInfo
		? <AccountInfo
			{...accountInfo}
			fetchAccountInfo={fetchAccountInfo}
			register={registerAndRefresh}
			update={updateAndRefresh}
		/>
		: <NotConnected />;
};

