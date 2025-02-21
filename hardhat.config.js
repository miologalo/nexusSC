require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    anychain: {
      url: "https://YOUR_RPC_URL", // Replace with target chain RPC URL
      accounts: ["YOUR_PRIVATE_KEY"], // Never share this!
    },
  },
};
