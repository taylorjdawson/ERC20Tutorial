## Contract Constructor
In the last stage we *declared* variables but didn't *define* them. That's what our constructor is for!

This gives us the mechanism by which we will be able to give our token a name, symbol, total supply and the level of precision or decimals.


This is the syntax for writing a constructor in Solidity:
```
constructor( type variableName ) visibility {
    // code that runs once when the contract deploys
}
```

We want to place the code that will initialize the variables that we declared above the contract declaration.

For instance, we want the ability to set the total supply, the total number of tokens, but only when we first create the contract. We don't want the ability to mint more as this will be a [deflationary](https://www.investopedia.com/terms/d/deflation.asp) token.

Here's an example where we declare an variable and construcor, then initialise the variable within the constructor giving it an initial value:

```
string public name;
constructor(string memory _name) public {
    name = _name;
}
```
As of [Solidity v5.0.0](https://solidity.readthedocs.io/en/latest/050-breaking-changes.html#explicitness-requirements) you have to explicity specify the data location for all variables of struct, array or mapping types. Since strings are simply byte arrays they must be marked as `storage` or `memory`.

### So why `memory` instad of `storage` in this case? 
`memory` is volitile meaning that it only lasts within the current context of the calling function, then poof! 💨it's gone, although it's much cheaper in terms of gas costs. `storage` is persistent and will be around long after that function has finished executing; is essential for contract state. However, it's much more expensive and thus should be used sparingly. 

Since `_name` is a parameter variable it is only needed to store a temporary variable that is used to intialize our persistent `storage` variable, `name`.


You can learn more about working with strings in solidity [here](https://hackernoon.com/working-with-strings-in-solidity-c4ff6d5f8008).


> Note: The visibility of the constructor can only be `public` or `internal`. If it is marked `internal` than it will be marked as an abstract contract and cannot be compiled on it's own but can only be used within a concrete class.