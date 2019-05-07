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
    }
}