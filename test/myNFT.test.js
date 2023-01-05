const { expect } = require("chai");

var owner, myNFT;

describe("MyNFT Test", async function () {
  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("MyNFT");
    myNFT = await MyNFT.deploy();
  });

  it("Should able to get name", async function () {
    expect(await myNFT.name()).to.equal("MyNFT");
  });
});
