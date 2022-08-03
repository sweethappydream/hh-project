import { ethers } from "hardhat";

async function main() {
  const initialSupply = ethers.utils.parseEther('10000.0')
  const ClassToken = await ethers.getContractFactory("ClassToken");
  const token = await ClassToken.deploy(initialSupply);
  await token.deployed();

  console.log("ClassToken deployed to:", token.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
