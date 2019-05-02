pragma solidity ^0.5.0;

contract ERC20 {
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;
}