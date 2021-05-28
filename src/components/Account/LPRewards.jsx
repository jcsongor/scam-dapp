import React from "react";
import { Button, TableCell, TableRow } from '@material-ui/core/';

const NotRegistered = ({ register }) => <TableRow>
	<TableCell>
		You have not registered for liquidity rewards yet.
	</TableCell>
	<TableCell>
		<Button onClick={register} color="primary" variant="contained">Register now</Button>
	</TableCell>
</TableRow>;

const Registered = ({ lpMonitorBalance }) => <>
	<TableRow>
		<TableCell colSpan={2}>
			Your address has been registered for liquidity rewards.
		</TableCell>
	</TableRow>
	<TableRow>
		<TableCell>$SCAM LP tokens registered for rewards:</TableCell>
		<TableCell>{lpMonitorBalance}</TableCell>
	</TableRow>
</>;

const LPBalance = ({ lpBalance }) => <TableRow>
	<TableCell>$SCAM LP tokens:</TableCell>
	<TableCell>{lpBalance}</TableCell>
</TableRow>;

const LPMonitor = ({ lpBalance, lpMonitorBalance, isRegistered, register }) => isRegistered
	? <Registered lpMonitorBalance={lpMonitorBalance} />
	: <NotRegistered register={register} />;

export const LPRewards = ({ lpBalance, lpMonitorBalance, isRegistered, register }) => <>
	<LPBalance lpBalance={lpBalance} />
	<LPMonitor
		lpBalance={lpBalance}
		lpMonitorBalance={lpMonitorBalance}
		isRegistered={isRegistered}
		register={register}
	/>
</>;
