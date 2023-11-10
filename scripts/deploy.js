// Imports
// Imported ethers from hardhat rather than independently
const { ethers } = require("hardhat");


// This function will hold most of the neccessary interactivity
async function main() {

  // Defining the contract factory that would be used to deploy the contract
  const contractfactory = await ethers.getContractFactory(
    "SimpleStorage"
  );
  console.log("Deploying...")

  // Actual deploying of the contract
  const contract = await contractfactory.deploy();

  // Transaction receipt
  const tx = await contract.deploymentTransaction();
  console.log( await contract.getAddress())
  
};


main()
.then(() => {process.exit(0)})
.catch((err) => {
  console.log(err);
  process.exit(1)
})


