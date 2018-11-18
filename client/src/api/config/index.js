const getContractFromName = contractName => async (web3) => {
  const contractJson = require(`../../contracts/${contractName}.json`);
  const { abi } = contractJson;
  const { address } = contractJson.networks['5777'].address;
  return window.web3.eth.contract(abi).at(address);
};

export const getBetsContract = getContractFromName('Bets');

export const getTokenContract = getContractFromName('BettyToken');

export const getUserProfilesContract = getContractFromName('UserProfiles');
