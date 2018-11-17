/* global artifacts */

const UserProfiles = artifacts.require('./UserProfiles.sol');

module.exports = deployer => deployer.deploy(UserProfiles);
