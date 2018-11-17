/* global artifacts */

const BettyToken = artifacts.require('./BettyToken.sol');

module.exports = deployer => deployer.deploy(BettyToken);
