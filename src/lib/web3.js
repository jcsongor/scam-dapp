import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { lpMonitor, scamToken } from "../config/contracts";

const getContract = (contract, account, web3) => new web3.eth.Contract(contract.abi, contract.address, { from: account });

export const balanceOf = async (web3, account) => {
	const contract = getContract(scamToken, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	const decimals = await contract.methods.decimals().call();
	return balance / 10 ** decimals;
};

const LP_DECIMALS = 18;

export const lpBalanceOf = async (web3, account) => {
	const contract = getContract(lpMonitor, account, web3);
	return await contract.methods.balanceOf(account).call() / 10 ** LP_DECIMALS;
};

export const isAddressRegistered = async (web3, account) => {
	const contract = getContract(lpMonitor, account, web3);
	return await contract.methods.isAddressRegistered(account).call();
};

export const register = async (web3, account) => {
	const contract = getContract(lpMonitor, account, web3);
	return await contract.methods.register().send();
};

const supportedChainIds = [56, 97];

export const bscConnector = new BscConnector({ supportedChainIds, });

export const injectedConnector = new InjectedConnector({ supportedChainIds });

export const maskAddress = (address) => address.substr(0, 4) + '...' + address.substr(-4);
