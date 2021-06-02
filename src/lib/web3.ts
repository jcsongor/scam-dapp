import {BscConnector} from "@binance-chain/bsc-connector";
import {InjectedConnector} from "@web3-react/injected-connector";
import {ContractInfo, lovePool, lpMonitor, scamToken} from "../config/contracts";
import {Decimal} from "decimal.js";
import Web3 from "web3";
import {Account} from "../store/slices/accountSlice";

const getContract = (contract: ContractInfo, account: string, web3: Web3) => new web3.eth.Contract(contract.abi, contract.address, {from: account});

const numberToString = (number: number, decimals: number) => {
	const decimal = new Decimal(number);
	return decimal.dividedBy(new Decimal(10).toPower(decimals)).toString();
};

const balanceOf = async (web3: Web3, account: string): Promise<string> => {
	const contract = getContract(scamToken, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	const decimals = parseInt(await contract.methods.decimals().call());
	return numberToString(balance, decimals);
};

const LP_DECIMALS = 18;

const lpMonitorBalanceOf = async (web3: Web3, account: string): Promise<string> => {
	const contract = getContract(lpMonitor, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	return numberToString(balance, LP_DECIMALS);
};

const lpBalanceOf = async (web3: Web3, account: string): Promise<string> => {
	const contract = getContract(lovePool, account, web3);
	const balance = await contract.methods.balanceOf(account).call();
	return numberToString(balance, LP_DECIMALS);
};

const isAddressRegistered = async (web3: Web3, account: string): Promise<boolean> => {
	const contract = getContract(lpMonitor, account, web3);
	return !!await contract.methods.isAddressRegistered(account).call();
};

const promotionRunning = async (web3: Web3, account: string): Promise<boolean> => {
	const contract = getContract(lpMonitor, account, web3);
	return !!await contract.methods.PromotionRunning().call();
};

export const fetchAccountInfo = async (web3: Web3, account: string): Promise<Account> => ({
	address: account,
	balance: await balanceOf(web3, account),
	lpMonitorBalance: await lpMonitorBalanceOf(web3, account),
	lpBalance: await lpBalanceOf(web3, account),
	isRegistered: await isAddressRegistered(web3, account),
	isPromotionRunning: await promotionRunning(web3, account),
});

export const register = async (web3: Web3, account: string): Promise<void> => {
	const contract = getContract(lpMonitor, account, web3);
	return await contract.methods.register().send();
};

export const update = async (web3: Web3, account: string): Promise<void> => {
	const contract = getContract(lpMonitor, account, web3);
	return await contract.methods.update().send();
};

const supportedChainIds = [56, 97];

export const bscConnector = new BscConnector({supportedChainIds,});

export const injectedConnector = new InjectedConnector({supportedChainIds});

export const maskAddress = (address: string): string => address.substr(0, 4) + '...' + address.substr(-4);
