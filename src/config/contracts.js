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
