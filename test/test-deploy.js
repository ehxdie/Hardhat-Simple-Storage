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

    // This test checks if the favorite number variable is equal 0 
    it("Should return a favorite number of 0", async function () {
        const favoriteNumber = await simpleStorage.retrieve();
        const expectedValue = "0";
        //assert.equal(favoriteNumber.toString(), expectedValue);
        expect(favoriteNumber.toString()).to.equal(expectedValue);
    })

    // This test checks if the store function works adequately 
    it("should update when the store function is called", async function () {
        await simpleStorage.store("2");
        const expectedValue = "2";
        const storedValue = await simpleStorage.retrieve();
        expect(storedValue.toString()).to.equal(expectedValue);
    }) 

    // This test checks if the peopleList is populated with the inputted
    it("the people list should be updated with the pushed favorite number and", async function (){
        await simpleStorage.addPeople(2,"jeff");
        const expectedName = "jeff";
        const expectedNumber = "2";
        const storedName = await simpleStorage.getPerson(0);
        expect(storedName[0]).to.equal(expectedName);
        expect(storedName[1].toString()).to.equal(expectedNumber); 
        

    })

})