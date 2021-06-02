import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../index'
import {fetchAccountInfo, register, update} from "../../lib/web3";
import Web3 from "web3";

export type Account = {
	address: string,
	balance: string,
	lpMonitorBalance: string,
	lpBalance: string,
	isRegistered: boolean,
	isPromotionRunning: boolean,
} | null


const initialState: Account = null;

export const loadAccountInfo = createAsyncThunk(
	'account/loadInfo',
	async ({web3, address}: {web3: Web3, address: string}) => await fetchAccountInfo(web3, address),
);

export const registerAccount = createAsyncThunk(
	'account/update',
	async ({web3, address}: {web3: Web3, address: string}) => await register(web3, address),
);

export const updateLPMonitor = createAsyncThunk(
	'account/update',
	async ({web3, address}: {web3: Web3, address: string}) => await update(web3, address),
);

export const accountSlice = createSlice({
	name: 'account',
	initialState: initialState as Account,
	reducers: {
		setAccount: (state, action: PayloadAction<Account>) => {
			state = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loadAccountInfo.fulfilled, (state, action: PayloadAction<Account>) => action.payload);
	}
});

export const {setAccount} = accountSlice.actions;

export const selectAccountInfo = ({account}: RootState): Account => account;
export const selectAccountIsLoaded = ({account}: RootState): boolean => !!account;
export const selectAccountAddress = ({account}: RootState): string => account ? account.address : '';
export const selectAccountBalance = ({account}: RootState): string => account ? account.balance : '';
export const selectAccountLpBalance = ({account}: RootState): string => account ? account.lpBalance : '';
export const selectAccountLpMonitorBalance = ({account}: RootState): string => account ? account.lpMonitorBalance : '';
export const selectAccountIsRegistered = ({account}: RootState): boolean => account ? account.isRegistered : false;
export const selectIsPromotionRunning = ({account}: RootState): boolean => account ? account.isPromotionRunning : false;
export const selectIsLpMonitorBalanceUpToDate = ({account}: RootState): boolean => account ? account.lpBalance !== account.lpMonitorBalance: false;

export const accountReducer = accountSlice.reducer;
