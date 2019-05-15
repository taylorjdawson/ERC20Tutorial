# Interfaces
[Solidity interfaces](https://solidity.readthedocs.io/en/v0.5.3/contracts.html#interfaces) are contracts that do not have any functions implemented. In this case, we are adding the [ERC interface](https://eips.ethereum.org/EIPS/eip-20) to conform to the ERC20 standard. This enables wallets to predictably interact with our smart contract as it contains the set functions common to all ERC20 tokens.

We define interfaces using the following syntax:
```
interface ERC20Interface {
    // Declarations go here
}
```

Inside the interface we will declare functions but will not include any implementation. Everthing 

Syntax for declaring functions:
```
function functionName(paramType param) visibility returns (returnType returnValue);
```

That should be all you need to succesfully complete this stage!