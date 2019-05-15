pragma solidity ^0.5.0;

contract ERC20 {
    mapping (address => uint256) public balances;
    
    uint256 public totalSupply;

    string public name;
    uint8 public decimals;
    string public symbol;

    constructor(
        uint256 _totalSupply,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) public {
        balances[msg.sender] = _totalSupply;
        totalSupply = _totalSupply;
        name = _name;
        decimals = _decimals;
        symbol = _symbol;
    }
}