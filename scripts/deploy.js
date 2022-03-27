async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
       "Deploying contracts with the account:",
       deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance())
       .toString()
    );

    const NFTCollection = await ethers.getContractFactory("NumbersNFT");
    const nftCollection = await NFTCollection.deploy('namme', "NAM");
    await nftCollection.deployed();
    console.log("NumbersNFT deployed to:", nftCollection.address);
  

    const NFTMarketplace = await ethers.getContractFactory("NFTDutchAuction");
    const nftMarketplace = await NFTMarketplace.deploy(nftCollection.address);
    console.log("NFTDutchAuction address:", nftMarketplace.address);
   // output:  
   //    Deploying contracts with the account: 0xAa1566F2E1ADC112afbF4e8B7C7A69194Ed6073f
   //    Account balance: 2948035054614292634
   //    NFTCollection deployed to: 0xcFF7f406fA487E743E2ec8763de8a389630445C4
   //    NFTMarketplace address: 0x9c6BCF4f831460C01D713437C33a1d5096419F48
 }
 main()
    .then(() => process.exit(0))
    .catch(error => {
       console.error(error);
       process.exit(1);
    });
