import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3';

export const useWeb3 = () => {
  const web3React = useWeb3React();
  return {...web3React, web3: new Web3(web3React.library)}
};

