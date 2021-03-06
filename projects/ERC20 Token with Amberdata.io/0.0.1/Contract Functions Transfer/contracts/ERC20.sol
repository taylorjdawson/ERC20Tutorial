pragma solidity ^0.5.0;

contract ERC20 {
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;
    
    uint256 public totalSupply;

    string public name;
    uint8 public decimals;
    string public symbol;

    constructor(
        uint256 initialAmount,
        string memory tokenName,
        string memory tokenSymbol,
        uint8 decimalUnits
    ) public {
        balances[msg.sender] = initialAmount;
        totalSupply = initialAmount;
        name = tokenName;
        decimals = decimalUnits;
        symbol = tokenSymbol;
    };

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value); //solhint-disable-line indent, no-unused-vars
        return true;
    };
}