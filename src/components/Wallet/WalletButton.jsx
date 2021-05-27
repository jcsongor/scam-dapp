import React from "react";
import { Button } from '@material-ui/core/';

export const WalletButton = ({ children, ...props }) => <Button color="primary" {...props}>{children}</Button>;
