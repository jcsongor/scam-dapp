import React from "react";
import { Table, TableCell, TableRow } from '@material-ui/core/';

const NotRegistered = () => <TableRow>
	<TableCell cellspan={2}>
		You have not registered for liquidity rewards yet.
	</TableCell>
</TableRow>;

const Registered = ({ lpBalance }) => <>
	<TableRow>
		<TableCell cellspan={2}>
			Your address has been registered for liquidity rewards.
		</TableCell>
	</TableRow>
	<TableRow>
		<TableCell> $SCAM LP tokens:</TableCell>
		<TableCell>{lpBalance}</TableCell>
	</TableRow>
</>;

export const LPRewards = ({ lpBalance, isRegistered }) => isRegistered
	? <Registered lpBalance={lpBalance} />
	: <NotRegistered />;
