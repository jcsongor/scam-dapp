export const scamToken = {
	address: '0xdb78fcbb4f1693fdbf7a85e970946e4ce466e2a9',
	abi: [{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [{ "name": "", "type": "string" }],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{ "name": "delegate", "type": "address" }, { "name": "numTokens", "type": "uint256" }],
		"name": "approve",
		"outputs": [{ "name": "", "type": "bool" }],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{ "name": "receiver", "type": "address" }],
		"name": "airdropTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [{ "name": "", "type": "uint256" }],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{ "name": "owner", "type": "address" }, { "name": "buyer", "type": "address" }, {
			"name": "numTokens",
			"type": "uint256"
		}],
		"name": "transferFrom",
		"outputs": [{ "name": "", "type": "bool" }],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [{ "name": "", "type": "uint8" }],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [],
		"name": "releaseBNB",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [{ "name": "tokenOwner", "type": "address" }],
		"name": "balanceOf",
		"outputs": [{ "name": "", "type": "uint256" }],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [{ "name": "", "type": "string" }],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{ "name": "receiver", "type": "address" }, { "name": "numTokens", "type": "uint256" }],
		"name": "transfer",
		"outputs": [{ "name": "", "type": "bool" }],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [{ "name": "owner", "type": "address" }, { "name": "delegate", "type": "address" }],
		"name": "allowance",
		"outputs": [{ "name": "", "type": "uint256" }],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, {
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}, {
		"anonymous": false,
		"inputs": [{ "indexed": true, "name": "tokenOwner", "type": "address" }, {
			"indexed": true,
			"name": "spender",
			"type": "address"
		}, { "indexed": false, "name": "tokens", "type": "uint256" }],
		"name": "Approval",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{ "indexed": true, "name": "from", "type": "address" }, {
			"indexed": true,
			"name": "to",
			"type": "address"
		}, { "indexed": false, "name": "tokens", "type": "uint256" }],
		"name": "Transfer",
		"type": "event"
	}],
};

export const lpMonitor = {
	address: '0xe469de015a3d61a57cd486548899300fb55106fc',
	abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, {
		"anonymous": false,
		"inputs": [{ "indexed": true, "internalType": "address", "name": "newAddress", "type": "address" }],
		"name": "AddressRegistered",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{ "indexed": true, "internalType": "address", "name": "oldOwner", "type": "address" }, {
			"indexed": true,
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		}],
		"name": "NewOwner",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{ "indexed": false, "internalType": "uint256", "name": "ScamAmount", "type": "uint256" }],
		"name": "PromotionEnd",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{ "indexed": true, "internalType": "address", "name": "caller", "type": "address" }],
		"name": "PromotionStart",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{ "indexed": true, "internalType": "address", "name": "caller", "type": "address" }],
		"name": "Update",
		"type": "event"
	}, { "stateMutability": "nonpayable", "type": "fallback" }, {
		"inputs": [],
		"name": "Count",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "LiquiditiyPool",
		"outputs": [{ "internalType": "address", "name": "", "type": "address" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "Owner",
		"outputs": [{ "internalType": "address", "name": "", "type": "address" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "OwnerHasPrivileges",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "PayoutLimit",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "PromotionRunning",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "ScamToken",
		"outputs": [{ "internalType": "address", "name": "", "type": "address" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{ "internalType": "address", "name": "check", "type": "address" }],
		"name": "balanceOf",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{ "internalType": "uint256", "name": "newLimit", "type": "uint256" }],
		"name": "changePayoutLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "disableOwnerPrivileges",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "emergencyReleaseSCAM",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{ "internalType": "address", "name": "check", "type": "address" }],
		"name": "isAddressRegistered",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "lastUpdateTime",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "payoutAfterPromotion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "promotionEndTime",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "startDebugPromotion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "startPromotion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "update",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{ "internalType": "address", "name": "check", "type": "address" }],
		"name": "weightedBalanceOf",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}],
};
