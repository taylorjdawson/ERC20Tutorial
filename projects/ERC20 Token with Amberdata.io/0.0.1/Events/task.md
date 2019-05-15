## Solidity Events
It's time for some new material! Events are not required but are absolutely recommended when developing dApps. They allow applications to subscribe and listen to these events through the RPC interface of an Ethereum client or with an API provider such as [Amberdata's Websockets](https://docs.amberdata.io/reference/overview).


Tasks to complete this stage:

1. Declare a `Transfer` event which has 3 parameters: 
    - an `indexed` param, `_from` of type `address`
    - an `indexed` param, `_to` of type `address`
    - `_value` of type `uint256`
2. Declare an `Approval` event which has 3 parameters: 
    - an `indexed` param, `_owner` of type `address`
    - an `indexed` param, `_spender` of type `address`
    - `_value` of type `uint256`
3. Emit the `Transfer` event in the `transfer` & `transferFrom` function
4. Emit the `Approval` event in the `approve` function

