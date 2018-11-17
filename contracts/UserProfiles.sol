pragma solidity ^0.4.24;

contract UserProfiles {

    mapping (string => address) users;

    constructor() public {
    }

    function getAddressOf(string _userId) view external returns (address) {
        address addr = users[_userId];
        require(addr != address(0), 'User does not exist');
        return addr;
    }

    function registerUser(string _userId) external returns (bool success) {
        users[_userId] = msg.sender;
        return true;
    }
}
