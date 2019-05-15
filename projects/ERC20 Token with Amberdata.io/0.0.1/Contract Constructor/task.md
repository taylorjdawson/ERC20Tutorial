## Contract Constructor
Now that we have all of our variables declared it's time to create the constructor! This will allow us to instantiate our `ERC20` contract, define our instance variables, and start implementing behaviour.

We need to 

1. Declare a `public` constructor with 4 parameters (one for each instance variable). 

2. Define the instance variables by assigning them to the parameter variables

3. Give the caller of the constructor (aslo known as the contract deployer) the total amount of tokens e.g. the total supply.

> Note: Make sure that the variable declaration type matches the parameter type.


