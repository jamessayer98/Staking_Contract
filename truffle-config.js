const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync('.secret').toString().trim();

module.exports = {
	// plugins: [ 'truffle-plugin-verify' ],
	// api_keys: {
	// 	bscscan: BSCSCANAPIKEY
	// },
	networks: {
		development: {
			host: '127.0.0.1', // Localhost (default: none)
			port: 8545, // Standard BSC port (default: none)
			network_id: '*' // Any network (default: none)
		},
		testnet: {
			provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
			network_id: 97,
			confirmations: 10,
			timeoutBlocks: 200,
			skipDryRun: true, //,
			//gas: 4000000
			gasLimit: 75000
		},
		bsc: {
			provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
			network_id: 56,
			confirmations: 10,
			timeoutBlocks: 200,
			skipDryRun: true
		}
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		timeout: 100000
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: '0.6.4', // Fetch exact version from solc-bin (default: truffle's version)
			// docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
			settings: {
				// See the solidity docs for advice about optimization and evmVersion
				optimizer: {
					enabled: false,
					runs: 200
				}
				//	evmVersion: 'byzantium'
			}
		}
	}
};
