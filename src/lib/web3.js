import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

const supportedChainIds = [56, 97];

export const bscConnector = new BscConnector({ supportedChainIds, });

export const injectedConnector = new InjectedConnector({ supportedChainIds });
