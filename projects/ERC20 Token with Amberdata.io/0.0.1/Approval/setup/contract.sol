pragma solidity ^0.5.0;

contract ERC20 {
    uint256 constant private MAX_UINT256 = 2**256 - 1;
    mapping (address => uint256) public balances;

    //TODO: Declare allowance mapping
    
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

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    // TODO: Implement approve & and allowance methods
}