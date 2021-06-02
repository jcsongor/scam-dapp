import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../index'
import {bscConnector, injectedConnector} from "../../lib/web3";

type BinanceProvider = 'BinanceProvider'
type InjectedProvider = 'InjectedProvider'
type Provider = BinanceProvider | InjectedProvider
type ConnectedWalletState = {
	connected: true,
	provider: Provider,
}
type DisconnectedWalletState = {
	connected: false,
}

type WalletState = ConnectedWalletState | DisconnectedWalletState;

const initialState: WalletState = {
	connected: false
};

export const connectBinanceWallet = createAsyncThunk(
	'wallet/connectBinanceWallet',
	async () => {
		await bscConnector.activate()
	},
);

export const connectMetamask = createAsyncThunk(
	'wallet/connectMetamask',
	async () => {
		await injectedConnector.activate()
	},
);

export const walletSlice = createSlice({
	name: 'wallet',
	initialState: initialState as WalletState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(connectBinanceWallet.fulfilled, () => ({connected: true, provider: 'BinanceProvider'}));
		builder.addCase(connectMetamask.fulfilled, () => ({connected: true, provider: 'InjectedProvider'}));
	}
});

export const providerSelector = ({wallet}: RootState): Provider | null => wallet.connected ? wallet.provider : null;

export const walletReducer = walletSlice.reducer;
