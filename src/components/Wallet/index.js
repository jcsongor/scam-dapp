import React from "react";
import { useWeb3 } from "../../hooks/useWeb3";
import { Connected } from "./Connected";
import { Connect } from "./Connect";

export const Wallet = () => {
	const { account } = useWeb3();
	return account ? <Connected /> : <Connect />;
};

