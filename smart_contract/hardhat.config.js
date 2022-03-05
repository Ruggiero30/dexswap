require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/rZHN7iekiOvKZo74eZEhkm9rpWlRXycb',
      accounts: [
        '96a43127a1d52207930483addbf59893fbd5afedf1c77a3cfc356845d48cba22',
      ],
    },
  },
};
