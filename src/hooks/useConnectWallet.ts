import {useWeb3} from "./useWeb3";
import {bscConnector, injectedConnector} from "../lib/web3";

type Wallet3Connectors = {
	[key: string]: () => Promise<void>;
}

export const useConnectWallet = (): Wallet3Connectors => {
	const {activate} = useWeb3();
	return {
		connectBinanceWallet: () => activate(bscConnector),
		connectMetamask: () => activate(injectedConnector),
		connectTrustWallet: () => activate(injectedConnector),
	}
};
