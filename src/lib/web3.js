import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { lovePool, lpMonitor, scamToken } from "../config/contracts";
import { Decimal } from "decimal.js";

const getContract = (contract, account, web3) => new web3.eth.Contract(contract.abi, contract.address, { from: account });

const numberToString = (number, decimals) => {
	const decimal = new Decimal(number);
	return decimal.dividedBy(new Decimal(10).toPower(decimals)).toString();
};

export const balanceOf = async (web3, account) => {
	const contract = getContract(scamToken, account, web3);
	const balance = new Decimal(await contract.methods.balanceOf(account).call());
	const decimals = parseInt(await contract.methods.decimals().call());
	return numberToString(balance, decimals);
};

const LP_DECIMALS = 18;

export const lpMonitorBalanceOf = async (web3, account) => {
	const contract = getContract(lpMonitor, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	return numberToString(balance, LP_DECIMALS);
};

export const lpBalanceOf = async (web3, account) => {
	const contract = getContract(lovePool, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	return numberToString(balance, LP_DECIMALS);
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
