const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

// This describe thing takes in the description of the tests and a func
describe("SimpleStorage", function() {
    // initializing the variables that will be used
    let simpleStorage,simpleStorageFactory
    // The beforeEach func will execute before every test
    beforeEach(async function () {
        // Deploying the contract   
        simpleStorageFactory  = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
        //return { simpleStorage, simpleStorageFactory };

    });

    it("Should return a favorite number of 0", async function () {
        const favoriteNumber = await simpleStorage.retrieve();
        const expectedValue = "0";
        //assert.equal(favoriteNumber.toString(), expectedValue);
        expect(favoriteNumber.toString()).to.equal(expectedValue);
    })

})