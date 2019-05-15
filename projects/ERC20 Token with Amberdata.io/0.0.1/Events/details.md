## Events
In this stage we are going to be defining and emitting two events: `Transfer` & `Approval`. This will allow us to log any transfer of tokens or aproval to the blockchain. Then with our applications we can listen for these events to be emitted, as well as, searhc through events that our contract has emitted in the past.

Read more about Events [here](https://solidity.readthedocs.io/en/latest/contracts.html?highlight=view#events)!

This is the syntax for defining an event:
```
event EventName(paramType indexed param, paramType param);
```

Note the `indexed` attribute is used to allow for efficient searching of logs. It is stored in a special data structure known as a "topics".

There's a lot more infromation about the `indexed` attribute and topics so be sure to [read up on](https://solidity.readthedocs.io/en/latest/contracts.html?highlight=view#events) them!


This is how we emit an event:
```
emit EventName(param, param);
```

> Note: The `param` should match the types that were previously set in the event definition.