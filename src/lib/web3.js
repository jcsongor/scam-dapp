import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { scamToken } from "../config/contracts";

const getContract = (contract, account, web3) => new web3.eth.Contract(contract.abi, contract.address, { from: account });

export const balanceOf = async (web3, account) => {
	const contract = getContract(scamToken, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	const decimals = await contract.methods.decimals().call();
	return balance / 10 ** decimals;
};

const supportedChainIds = [56, 97];

export const bscConnector = new BscConnector({ supportedChainIds, });

export const injectedConnector = new InjectedConnector({ supportedChainIds });

export const maskAddress = (address) => address.substr(0, 4) + '...' + address.substr(-4);
