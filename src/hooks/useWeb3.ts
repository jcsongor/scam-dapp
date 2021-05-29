import {useWeb3React} from "@web3-react/core";
import Web3 from 'web3';
import {Web3ReactContextInterface} from "@web3-react/core/dist/types";

type Web3ContextInterface = Web3ReactContextInterface & {
	web3: Web3
}

export const useWeb3 = (): Web3ContextInterface => {
	const web3React = useWeb3React();
	return {...web3React, web3: new Web3(web3React.library)}
};
