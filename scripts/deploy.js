// Imports
// Imported ethers from hardhat rather than independently
const { ethers } = require("hardhat");
 require

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

// Quick verification 
async function verify(contractaddress, args){

}

main()
.then(() => {process.exit(0)})
.catch((err) => {
  console.log(err);
  process.exit(1)
})

/* OVER THE WEEKND TRAINING */
const ethers = require("ethers");
const fs = require("fs");

async function main() {
  const provider = new ethers.JsonRpcProvider("url");
  const wallet = new ethers.Wallet("privatekey", "provider");
  const abi = fs.readFileSync("");
  const bin = fs.readFileSync("");
  const contractFactory = await ethers.ContractFactory(abi,bin,wallet);
  const contract = await contractFactory.deploy();
}

main()
.then(() => process.exit(0))
.catch((err) => {
  console.log(err);
  process.exit(1);
})

/* Over da the weeknd more training */
/* HARDHAT */
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const contractFactory = await ethers.getContractFactory(
    "smartcontractname"
  );
  const contract = await contractFactory.deploy();
  const transactionReceipt = await contract.deploymentTransaction();
}

main()
.then(() => process.exit(0))
.catch((err) => {
  console.log(err)
  process.exit(1)})
