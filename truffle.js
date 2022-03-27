require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
// const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = 
// "";
process.env.PRIVATE_KEYS || "";
const infuraKey = process.env.INFURA_API_KEY;
// const infuraKey = ""

module.exports = {
  

  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" //match any network id
    // },
    ropsten: {
      networkCheckTimeout:20000,
      timeoutBlocks: 200,
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // array of private keys
          `https://ropsten.infura.io/v3/${infuraKey}` // Url to an Ethereum node
        )
      },
      // gas: 5000000,
      // gasPrice: 75000000000,
      network_id: "*",
      skipDryRun: true
    }
  },
  contracts_directory: './contracts',
  contracts_build_directory: './build/abis',

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.4.23" 
    }
  }
};


// output 

// 2_deploy_contracts.js
// =====================

//    Deploying 'NumbersNFT'
//    ----------------------
//    > transaction hash:    0x53922446b467fbe7e85bebba7b9f02797ae828aa8c39748113bf57faa6653e14
//    > Blocks: 3            Seconds: 37
//    > contract address:    0xB00403ad16258f6dA1001cAA242a24331856DEf3
//    > block number:        12123687
//    > block timestamp:     1648033778
//    > account:             0xAa1566F2E1ADC112afbF4e8B7C7A69194Ed6073f
//    > balance:             2.71545517932615089
//    > gas used:            2450977 (0x256621)
//    > gas price:           2.500000009 gwei
//    > value sent:          0 ETH
//    > total cost:          0.006127442522058793 ETH


//    Deploying 'NFTDutchAuction'
//    ---------------------------
//    > transaction hash:    0x3eb69568833f25d2096b519f4c3b7a6398c04a46a13a2113f36e5ae219298e6e
//    > Blocks: 1            Seconds: 33
//    > contract address:    0x551AED2A0a34885D47D1f60FdD9331d6F57BE865
//    > block number:        12123692
//    > block timestamp:     1648033791
//    > account:             0xAa1566F2E1ADC112afbF4e8B7C7A69194Ed6073f
//    > balance:             2.711599864313813882
//    > gas used:            1542126 (0x1787ee)
//    > gas price:           2.500000008 gwei
//    > value sent:          0 ETH
//    > total cost:          0.003855315012337008 ETH

//    > Saving migration to chain.
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:     0.009982757534395801 ETH

// Summary
// =======
// > Total deployments:   2
// > Final cost:          0.009982757534395801 ETH