import React from "react";
import {Button, ButtonProps} from '@material-ui/core/';

export const WalletButton: React.FC<ButtonProps> = ({children, ...props}) =>
	<Button color="primary" {...props}>{children}</Button>;
