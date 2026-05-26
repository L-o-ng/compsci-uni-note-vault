#notes 

See first: [[Transactions]]; In particular, [[Transactions#Concurrency Control]].

There are **two** main methods to ensure consistency when executing transactions *concurrently*:
+ **Conservative** (**pessimistic**): Actively avoid conflict, and delay/restart conflicting transactions;
+ **Optimistic**: Assume that transactions rarely conflict, and check for conflicts just before committal.
## Conservative Methods
+ [[Locking]]
+ [[Timestamping]]
## Optimistic Methods
+ [[General Approach to Optimistic Concurrency Control]]
+ 

