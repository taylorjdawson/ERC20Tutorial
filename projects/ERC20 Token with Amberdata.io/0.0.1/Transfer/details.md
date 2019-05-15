
## Transfering funds
We want to give our token holders the ability to transfer exchanges their tokens with other accounts. We'll use functions to make this happen.


## Functions

We can give our contract behaviour with functions. We declare functions using the following syntax:

```
function functionName() visibility returns (returnValue) {
    // Implementation details
}
```
You can learn more about contract functions [in the Solidity docs](https://solidity.readthedocs.io/en/latest/contracts.html#functions).


## Function Modifiers

From the docs:
> Modifiers can be used to easily change the behaviour of functions. For example, they can automatically check a condition prior to executing the function. Modifiers are inheritable properties of contracts and may be overridden by derived contracts.

We can use this to require certain conditions are met. If the conditions are not met then the function call will `revert` or fail. 

## Special variable
There are special variables that exists in the global namespace. We'll be using `msg.sender` which is the address of the sender of the message e.g. the function caller.

Read more about special variables and functions [here](https://solidity.readthedocs.io/en/latest/units-and-global-variables.html#special-variables-and-functions).


## Transfer function
Now that we know about functions and modifiers you should be ready to implement the transfer function.

Our function will take two parameters the first is an `address` variable, `_to`, to which we want to transfer tokens and the second is an `uint256` variable, `_value`, or the amount of token we want to transfer.

The function should be `public` and return `true`. Include a function modifier that requires the caller's balance to be greater than the value that they are trying to transfer e.g. they can't spend more tokens than they have.

Make sure it correctly updates the `balances` mapping, substracting from the function caller,`msg.send`, and adding teh appropriate value to the `_to` address.

## Balances Fucntion
This one is simple. Given an `address` `_owner` it returns the balance, number of tokens, that the account owns. It should be `public` and marked as `view`. A `view` function is one that promises not to modify the contract state we just want to *view* it. For more information, refer to [View Functions](https://solidity.readthedocs.io/en/latest/contracts.html?highlight=view#view-functions) in the docs.