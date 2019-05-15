## Getting Setup

In this Task section you'll find what you need to pass this step. For a more in-depth view switch to the Details pane.

You can also look at your test.js to see the exact tests you need to pass. Once you feel confident in your code, click "Run Tests" to try and pass this stage!

> These variables will need to be public and use these exact variable names in order for your tests to pass.

We're going to start by declaring 4 variables. 

- `totalSupply` - This will keep track of the total supply of tokens
- `name` - This is the name of our token
- `decimals`- The number of decimals or the amount of precision (see [here](https://ethereum.stackexchange.com/questions/38704/why-most-erc-20-tokens-have-18-decimals) for more info).
- `symbol` - The token symbol!

> Note: `name`, `decimals` and `symbol` are optional (as you may have read in [the EIP-20 spec](http://eips.ethereum.org/EIPS/eip-20)). They do, however, improve usibility and allow for users and exchanges to better identify your token. Thus, they are recommended. 

Tasks to complete:

1. Declare a [Solidity Pragma 0.5.0](?tab=details&scroll=Solidity%20Pragma)
2. Declare the `ERC20` contract
3. Declare a variable `totalSupply` of type `uint256`
4. Declare a variabls `name` of type `string`
5. Declare a variable `decimals` of type `uint8`
6. Declare a variable `symbol` of type `string`
