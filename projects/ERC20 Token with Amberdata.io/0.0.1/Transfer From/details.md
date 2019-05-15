## Transfer From
We'll only be implementing a single function in this stage. There's a few things that we need to check i......


### Prevent Overspending
Again we'll need to use a function modifier to check that the `_from` account has adaquate funds e.g. the `_value` that is to be transfered is less than or equal to the amount of tokens that the `_from` account owns.

In addition, we need to check that the `msg.sender` is allowed to transfer the funds by requiring that the allowance (i.e. `allowed[_from][msg.sender]`) is greater than or equal to the `_value` that is to be transfered.

### Record Keeping
Just like in the `transfer` function we need to add and substact the appropriote funds from the accounts. the `balances[_from]` should reduced by the `_value` that is to be transfered. Likewise, the balance of the `_to` account should increased by the `_value`.

Additionally, we must now reduce the amount that the `msg.sender` is allowed to spend on behalf of the `_from` account.

### TODO: MAX_UINT256 

From there we should be all set!


