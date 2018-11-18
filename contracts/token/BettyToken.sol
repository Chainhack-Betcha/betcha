pragma solidity ^0.4.24;

contract owned {
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(
            msg.sender == owner,
            "Only owner can call this function."
        );
        _;
    }
}

contract BettyToken is owned {

    uint256 constant MAX_UINT256 = 2**256 - 1;

    /*
    NOTE:
    The following variables are OPTIONAL vanities. One does not have to include them.
    They allow one to customise the token contract & in no way influences the core functionality.
    Some wallets/interfaces might not even bother to look at this information.
    */
    string public name;                   //fancy name: eg Simon Bucks
    uint8 public decimals;                //How many decimals to show.
    string public symbol;                 //An identifier: eg SBX
    uint256 public totalSupply;

    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    constructor() public {
        balances[msg.sender] = 1000000000 * 10 ** 18;        // Give the creator all initial tokens
        totalSupply = 1000000000 * 10 ** 18;                 // Update total supply
        name = 'Betty';                                      // Set the name for display purposes
        decimals = 18;                                       // Amount of decimals for display purposes
        symbol = 'BET';                                      // Set the symbol for display purposes
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        //Default assumes totalSupply can't be over max (2^256 - 1).
        //If your token leaves out totalSupply and can issue more tokens as time goes on, you need to check if it doesn't wrap.
        //Replace the if with this one instead.
        //require(balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        //same as above. Replace this line with the following if you want to protect against wrapping uints.
        //require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(balances[_from] >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _owner) view public returns (uint256 balance) {
        return balances[_owner];
    }

    function currentAccountBalance() view public returns (uint balance) {
        return balances[msg.sender];
    }

    function distributeToken(address[] addresses, uint256 _value) external onlyOwner {
        uint total = _value * addresses.length;
        require(total/_value == addresses.length); // Overflow check
        require(balances[owner] >= total); // Underflow check
        balances[owner] -= total;
        for (uint i = 0; i < addresses.length; i++) {
           balances[addresses[i]] += _value;
           require(balances[addresses[i]] >= _value); // Overflow check
           emit Transfer(owner, addresses[i], _value);
        }
    }

    // IMPORTANT - Note that approve isn't used at this moment.
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // IMPORTANT - Note that allowance isn't used at this moment.
    function allowance(address _owner, address _spender)
    view public returns (uint256 remaining) {
      return allowed[_owner][_spender];
    }
}
