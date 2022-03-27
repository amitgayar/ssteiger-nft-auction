require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const INFURA_PROJECT_ID = "e51d322e40ac48219cee96531fbd80d5"
const METAMASK_PRIVATE_KEY = "5f6e3e96f4a1b82065d605833221bd213acf639e4e7d973f466348791a5b09c1" ;


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
