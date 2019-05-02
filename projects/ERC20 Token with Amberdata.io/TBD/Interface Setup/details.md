# Smart Contracts

Smart contracts are the backbone of the Ethereum network, written in the Solidity language, and are what allow developers to interact with the Ethereum blockchain. When building an application that interacts with Ethereum, start with building and deploying a smart contract.

## Solidity Pragma

A Solidity Pragma tells the compiler what version of Solidity you want to compile your code against. This lesson uses the solidity version **0.5.0**. We suggest you check the most current version by visiting the [Solidity GitHub](https://github.com/ethereum/solidity/releases) page. The version pragma should be the first line of code in the smart contract and is used as follows:

```
pragma solidity ^0.5.0;
```

Notice the carrot ```^``` used directly before the version. The carrot allows the compiler to compile in any solidity version up to the version we stated in our contract. This will prevent the compiler from using an updated version of solidity which might include breaking changes to your application.


# EIP-20
[Ethereum Improvement Proposals](http://eips.ethereum.org/) (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards.

EIP-20, formally adopted for Ethereum in September of 2017, defines a standard interface for tokens. 

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
