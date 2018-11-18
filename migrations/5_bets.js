/* global artifacts */

const BettyToken = artifacts.require('./BettyToken.sol');
const Bets = artifacts.require('./Bets.sol');

module.exports = deployer => deployer.deploy(Bets, BettyToken.address);
