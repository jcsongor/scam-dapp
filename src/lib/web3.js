import { BscConnector } from "@binance-chain/bsc-connector";

export const bscConnector = new BscConnector({
	supportedChainIds: [56, 97],
});
