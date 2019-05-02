pragma solidity ^0.5.0;

import "./ERC20Interface.sol";

contract ERC20 is ERC20Interface {
    uint256 constant private MAX_UINT256 = 2**256 - 1;
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;
}