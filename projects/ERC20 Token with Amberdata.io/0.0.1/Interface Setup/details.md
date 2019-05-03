# Interfaces
[Solidity interfaces](https://solidity.readthedocs.io/en/v0.5.3/contracts.html#interfaces) are contracts that do not have any functions implemented. In this case, we are adding the [ERC interface](https://eips.ethereum.org/EIPS/eip-20) to conform to the ERC20 standard. This enables wallets to predictably interact with our smart contract as it contains the set functions common to all ERC20 tokens.

Define an `ERC20Interface` interface using the following syntax:
```
interface ERC20Interface {

    // Additional function declartions here

}
```
Inside the interface we will define additional functions but will not include any implementation.


# Contract Functions
Within the `ERC20Interface` interface we are going to define 6 external functions

TODO: Mention token symbol & name how having the interface ensures that we'll get a token symbol and name to appear when exchanges or etc ask for it


# Contract Events
TODO: ...explain
