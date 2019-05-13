pragma solidity ^0.5.0;

contract ERC20 {
    uint256 constant private MAX_UINT256 = 2**256 - 1;
    

    mapping (address => uint256) public balances;

    uint256 public totalSupply;

    string public name;
    uint8 public decimals;
    string public symbol;

    //TODO: add contract constructor and variable initializers
}