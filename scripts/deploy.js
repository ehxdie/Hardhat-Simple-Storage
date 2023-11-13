// Imports
// Imported ethers from hardhat rather than independently
const { ethers, run, network } = require("hardhat");


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
  const contractAddress = await contract.getAddress();
  console.log(contractAddress);

  console.log(network.config);
 
  
  // verifying the contract if it is being deployed to a testnet
  //if (network.config.chainId === 11155111) {
    console.log("Waiting for block confirmation...");
    // Waiting for 6 block confirmations before the contract is verified
    await tx.wait(6);
    await verify(contractAddress, []);

  //}
  
  
  // Interacting with the smart contract
  console.log("Interacting with the blockchain...");
  const currentFavoriteNumber = await contract.retrieve();
  console.log(currentFavoriteNumber.toString());

  const transactionResponse = await contract.store("4");
  await transactionResponse.wait(2);

  const newFavoriteNumber = await contract.retrieve();
  console.log(newFavoriteNumber.toString());




  
};

// Quick verification 
async function verify(contractaddress, args){
  // Using the imported run package
  try {
    await run("verify:verify", {
      address: contractaddress,
      constructorArguments: args,
    })

  } catch (err) {
    if (err.message.toLowerCase().includes("already verified")){
      console.log("Already verified")
    } else {
      console.log(err)
    }
} }

main()
.then(() => {process.exit(0)})
.catch((err) => {
  console.log(err);
  process.exit(1)
})

/* OVER THE WEEKND TRAINING 
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

/* Over da the weeknd more training 
/* HARDHAT 
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
  process.exit(1)})*/
