const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery", function () {
  it("Should deploy contract", async function () {
    const TomBank = await ethers.getContractFactory("TomBank");
    const test = await TomBank.deploy();
    await test.deployed();  
  });

  describe("Owner", function () {
    
    it("Should set the right owner", async function () {
      const [owner] = await ethers.getSigners(); 
    });

  
    
});
});
