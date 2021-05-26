import { useWeb3 } from "./useWeb3";
import { bscConnector, injectedConnector } from "../lib/web3";

export const useConnectWallet = () => {
	const { activate } = useWeb3();
	return {
		connectBinanceWallet: () => activate(bscConnector),
		connectMetamask: () => activate(injectedConnector),
	}
};
