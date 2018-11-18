pragma solidity ^0.4.24;

contract UserProfiles {

    mapping (string => address) userToAddress;
    mapping (address => string) addressToUser;

    function getUserIdOf(address _address) view external returns (string userId) {
        userId = addressToUser[_address];
    }

    function getAddressOf(string _userId) view external returns (address addr) {
        addr = userToAddress[_userId];
    }

    function registerUser(string _userId) external returns (bool success) {
        require(bytes(_userId).length > 0, "userId cannot be empty");
        userToAddress[_userId] = msg.sender;
        addressToUser[msg.sender] = _userId;
        return true;
    }
}
