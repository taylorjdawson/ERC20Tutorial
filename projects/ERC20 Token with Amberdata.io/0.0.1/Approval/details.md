## Approval 
At this point you should be pretty familiar with how to declare mappings, implement functions, and use function modifiers so it won't be too difficult. 

We want to create a way for other addresses to spend tokens on the behalf of another address. This way we have the option to create contracts that can spend tokens for us. However, before we implement the method `transferFrom` we need a way to safely *approve* an address to spend a predifined amount of tokens. 

This should use the `allowed` mapping with the `msg.sender` mapping the `_spender` to the `_value`.

## Maps of Maps
We are going to map an address to another map which maps an address to a value.

I think in terms of JSON, so to illustrate this concept imagine it as such:
```
[
    _owner_0: {
        _spender_0: value,
        _spender_1: value,
        ...
         _spender_n: value
    },
    _owner_1: {},
    ...
    _owner_n: {},
]
```

Here's what the syntax would look like in Solidity:
```
mapping ( varType  => mapping (varType => varType)) visibility variableName;
```

## Approve & Allowance
We are going to wrap the `allowed` mapping with two functions: `approve` & `allowance`.

`approve` will assign a value, `_value`, that the `_spender` is allowed to spend on behalf of the function caller, `msg.sender`.

`allowance` just returns the amount of tokens, `remaining`, that a `_spender` is allowed to spend on behalf of the `_owner`.
