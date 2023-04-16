const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = '6e55670d41bd34416b73a4b28426c3a8cd853ab6e7716fa432dbbb229bdebfba'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic,
         `https://goerli.infura.io/v3/2e6c175db6b34a888b900cf4c266e63f`),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
        version: "0.8.13",
    }
  }
}