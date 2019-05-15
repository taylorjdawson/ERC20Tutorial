## Record Keeping

We're going to be implementing the essential part of an ERC20 token. In order to determine the number of tokens an account owns it is necessary to create a key value store that records the number of tokens which the account, or address, owns. To do this we'll be using solidity mappings.

In addition, we'll need to record how many tokens an account is *allowed* to spend on behalf of another account. This will enables

### Solidity Mappings
Mapping are a simple concept especially if you've had any amount of programming experience. Mappaings are just key value stores like JSON.


We declare mappings with the following syntax:
```
mapping(keyType => valueType)
```

`keyType` can be any solidity built-in value types plus `bytes` and `string`. However, it can not be a user defined type.

`valueType` can be any type, including mappings and defined types.

Check out [the docs](https://solidity.readthedocs.io/en/v0.5.8/types.html#mapping-types) for more information about mappings.