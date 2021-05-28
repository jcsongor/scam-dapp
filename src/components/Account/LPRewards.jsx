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

const LPMonitor = ({ lpMonitorBalance, isRegistered, register }) => isRegistered
	? <Registered lpMonitorBalance={lpMonitorBalance} />
	: <NotRegistered register={register} />;

const Update = ({update}) => <TableRow>
	<TableCell>
		It looks like you have some LP tokens that are not registered for rewards.<br/>
		You can fix that by running an update.<br/>
		You can also check back in ~24 hours, we run an update for you every day.<br/>
	</TableCell>
	<TableCell>
		<Button onClick={update} color="primary" variant="contained">Update</Button>
	</TableCell>
</TableRow>;

export const LPRewards = ({ lpBalance, lpMonitorBalance, isRegistered, isPromotionRunning, register, update }) => <>
	<LPBalance lpBalance={lpBalance} />
	<LPMonitor
		lpBalance={lpBalance}
		lpMonitorBalance={lpMonitorBalance}
		isRegistered={isRegistered}
		register={register}
	/>
	{isPromotionRunning && lpBalance !== lpMonitorBalance && <Update update={update} />}
</>;
