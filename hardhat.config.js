require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const INFURA_PROJECT_ID = ""
const METAMASK_PRIVATE_KEY = "" ;


module.exports = {
   solidity: "0.4.24",
   paths: {
      artifacts: './build/abis',
      },
   networks:{
      hardhat: {},
      ropsten: {
         url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
         accounts: [`0x${METAMASK_PRIVATE_KEY}`] ,
      }
   }
};
