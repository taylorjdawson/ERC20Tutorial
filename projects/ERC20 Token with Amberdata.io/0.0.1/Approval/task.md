## Approval

At this point we can transfer tokens between accounts and view the balance of accounts. In this stage we are going to implement a way to approve accounts to spend tokens on our behalf of another account.

Tasks to complete:

1. Declare a `public` mapping, `address -> mapping (address -> uint256)`, named `allowed`.

2. Implement a `public` `approve` function that takes two parameters, `_spender` of type `address` and `_value` of type `uint256` and returns a `bool` `success`.

3. Implement a `public` `view` function `allowance` that takes an `_owner` of type `address` and `_spender` of type `address` and returns a `uint256` variable, `remaining`, the total number of tokens that the the `_owner` has allowed the `_spender` to spend on their behalf. 
