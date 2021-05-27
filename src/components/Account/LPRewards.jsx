import React from "react";
import { Button, TableCell, TableRow } from '@material-ui/core/';

const NotRegistered = ({ register }) => <TableRow>
	<TableCell cellspan={2}>
		You have not registered for liquidity rewards yet.
	</TableCell>
	<TableCell>
		<Button onClick={register} color="primary" variant="contained">Register now</Button>
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

export const LPRewards = ({ lpBalance, isRegistered, register }) => isRegistered
	? <Registered lpBalance={lpBalance} />
	: <NotRegistered register={register} />;
