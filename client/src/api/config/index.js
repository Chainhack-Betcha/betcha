import truffleContract from "truffle-contract";

const getContractFromName = contractName => async (web3) => {
  const contractJson = require(`../../contracts/${contractName}.json`);
  const Contract = truffleContract(contractJson);
  Contract.setProvider(web3.currentProvider);
  return Contract.deployed();
}

export const getBetsContract = getContractFromName('Bets');

export const getTokenContract = getContractFromName('BettyToken');
