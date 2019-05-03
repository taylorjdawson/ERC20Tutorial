## Smart Contracts

Smart contracts are the backbone of the Ethereum network, written in the Solidity language, and are what allow developers to interact with the Ethereum blockchain. When building an application that interacts with Ethereum, start with building and deploying a smart contract.

## Solidity Pragma
In Solidity, we can use the `pragma` directive to let the compiler know what version of Solidity you want to compile your code against. This lesson uses the solidity version **0.5.0**. We suggest you check the most current version by visiting the [Solidity GitHub](https://github.com/ethereum/solidity/releases) page. The version `pragma` should be the first line of code in the smart contract and is used as follows:
```
pragma solidity ^0.5.0;
```

Notice the carrot `^` used directly before the version. The carrot allows the compiler to compile in any solidity version up to the version we stated in our contract. This will prevent the compiler from using an updated version of solidity which might include breaking changes to your application. This syntax may look familiar to you. This is because it follows the same [semver conventions used by npm](https://docs.npmjs.com/misc/semver). 

#### Did you know? 
The `pragma` directive is not only for declaring the compiler version. It can be used to enable features of the compiler or language that are not yet enabled by default. You can read more about the `pragma` directive [here](https://solidity.readthedocs.io/en/v0.5.8/layout-of-source-files.html#pragmas).


## Contract Object

Declare an `ERC20` [contract](https://solidity.readthedocs.io/en/v0.5.8/structure-of-a-contract.html) object using the following syntax:

```
contract ContractName {

  // Contract code and data here

}
```
Within this contract object we can define the specific functions and state of our smart contract that live at a specific address on the Ethereum blockchain.


## Contract State Variables
Within the contract object, we are going to declare 7 [state variables](https://solidity.readthedocs.io/en/v0.5.8/structure-of-a-contract.html#state-variables).



It should be noted that Solidity is a **statically typed language**. Therefore, when you declare any variable in Solidity, the type of the variable must be associated to the variable declaration. For the 3 parties described above, this can be accomplished with the following syntax:


```
address public variableName;
```

> Here, **address** is the variable type. The keyword **public** is a visibility specifier. More detail around visibility specifiers is provided on the next stage.

These definitions will inform the smart contract that these variables are in fact Ethereum addresses on the blockchain and enable those addresses to interact with the smart contract based on the constraints we program into the contract.

For more information on variable types, check out the [types](http://solidity.readthedocs.io/en/v0.4.19/types.html) section within the Solidity documentation.