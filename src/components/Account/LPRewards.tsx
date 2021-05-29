import React from "react";
import {Button, TableCell, TableRow} from '@material-ui/core/';

type callbackFunc = () => void;
type NotRegisteredProps = { register: callbackFunc };
const NotRegistered: React.FC<NotRegisteredProps> = ({register}) => <TableRow>
	<TableCell>
		You have not registered for liquidity rewards yet.
	</TableCell>
	<TableCell>
		<Button onClick={register} color="primary" variant="contained">Register now</Button>
	</TableCell>
</TableRow>;

type RegisteredProps = { lpMonitorBalance: string };
const Registered: React.FC<RegisteredProps> = ({lpMonitorBalance}) => <>
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

type LPBalanceProps = { lpBalance: string };
const LPBalance: React.FC<LPBalanceProps> = ({lpBalance}) => <TableRow>
	<TableCell>$SCAM LP tokens:</TableCell>
	<TableCell>{lpBalance}</TableCell>
</TableRow>;

type LPMonitorProps = RegisteredProps & NotRegisteredProps & {isRegistered: boolean };
const LPMonitor: React.FC<LPMonitorProps> = ({lpMonitorBalance, isRegistered, register}) => isRegistered
	? <Registered lpMonitorBalance={lpMonitorBalance} />
	: <NotRegistered register={register} />;

type UpdateProps = { update: () => void };
const Update: React.FC<UpdateProps> = ({update}) => <TableRow>
	<TableCell>
		It looks like you have some LP tokens that are not registered for rewards.<br />
		You can fix that by running an update.<br />
		You can also check back in ~24 hours, we run an update for you every day.<br />
	</TableCell>
	<TableCell>
		<Button onClick={update} color="primary" variant="contained">Update</Button>
	</TableCell>
</TableRow>;

type Props = LPBalanceProps & LPMonitorProps & UpdateProps & {isPromotionRunning: boolean};
export const LPRewards: React.FC<Props> = ({lpBalance, lpMonitorBalance, isRegistered, isPromotionRunning, register, update}) => <>
	<LPBalance lpBalance={lpBalance} />
	<LPMonitor
		lpMonitorBalance={lpMonitorBalance}
		isRegistered={isRegistered}
		register={register}
	/>
	{isPromotionRunning && lpBalance !== lpMonitorBalance && <Update update={update} />}
</>;
