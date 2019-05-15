## Transfer

Now that we have *everything* we can start implementing methods. By the end of this stage we'll be able to transfer funds between accounts and view the balances of accounts.

Let's get going!

Tasks to complete this stage:

1. Implement a `public` function named `transfer` that returns a `boolean` named `success` and takes two parameters `_to` and `_value`. It should transfer funds from one account to another and record it properly in the `balances` mapping.

2. Implement a `public` `view` function named `balanceOf` that returns a `uint256` named `balance`