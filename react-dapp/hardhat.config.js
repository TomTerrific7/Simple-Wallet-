require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: {
    version: "0.8.0",
    paths: {
      artifacts: './src/artifacts',
    },
    networks: {
      hardhat: {
        forking: {
          url: "https://mainnet.infura.io/v3/476e7137ecf94e0da1e0090f792faa33",
          blockNumber:12961862
        }
      }

    }
      }
    }

        



