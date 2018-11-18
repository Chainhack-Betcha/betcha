import Web3 from 'web3';

const getWeb3 = () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // Request account access if needed
      window.ethereum.enable()
        .then(() => {
          window.web3.eth.defaultAccount = window.web3.eth.accounts[0];
          resolve();
        })
        .catch((e) => {
          console.error(e);
          reject(e);
        }); // eslint-disable-line no-console
    } else if (window.web3) {
      // Legacy dapp browsers...
      window.web3 = new Web3(window.web3.currentProvider);
      window.web3.eth.defaultAccount = window.web3.eth.accounts[0];
      resolve();
    } else {
      // Non-dapp browsers...
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!'); // eslint-disable-line no-console
      resolve();
    }
  });
});

export default getWeb3;
