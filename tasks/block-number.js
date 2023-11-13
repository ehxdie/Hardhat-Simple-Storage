// This task will generate the current block number of the smart contract
const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        // Getting the current block number 
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        
    }
)