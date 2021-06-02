import React, {useEffect} from 'react'
import {
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography
} from '@material-ui/core/';
import {useWeb3} from "../../hooks/useWeb3";
import {LPRewards} from "./LPRewards";
import {useAppDispatch} from "../../store/hooks";
import {
	loadAccountInfo,
	selectAccountAddress,
	selectAccountBalance,
	selectAccountIsLoaded,
} from "../../store/slices/accountSlice";
import {useSelector} from "react-redux";

const AccountInfo: React.FC = () => {
	const address = useSelector(selectAccountAddress);
	const balance = useSelector(selectAccountBalance);
	return 	<TableContainer
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
					<LPRewards />
				</TableBody>
			</Table>
		</TableContainer>
	}
;

const NotConnected = () => <>
	<Typography variant="h3" color="primary">Please Connect Your Wallet.</Typography><br />
	<img src="/icon.png" alt="scam coin logo" />
</>;

export const Account: React.FC = () => {
	const {active, account: address, web3} = useWeb3();
	const isAccountLoaded = useSelector(selectAccountIsLoaded);
	const appDispatch = useAppDispatch();
	useEffect(() => {
		if (address) {
			appDispatch(loadAccountInfo({web3, address}));
		}
	}, [address]);

	return active ? isAccountLoaded ? <AccountInfo /> : <CircularProgress /> : <NotConnected />;
};

