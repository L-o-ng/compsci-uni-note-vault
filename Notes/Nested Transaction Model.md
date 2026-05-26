#notes 

In the **Nested Transaction Model**, we permit a transaction to contain *sub-transactions*.
We obtain a **tree** of these sub-transactions, each with their own **start** and **termination**. 
Only **leaves** perform database *operations*.
Execution is then done *bottom-up*. A child starts before and finishes after the parent.
Abort/Commit is performed at the *top* level.
![[Nested Transaction Model.png]]
## Updates
Updates of a **committed** sub-transaction:
+ Are visible *only* to the immediate parent;
+ The commit is *conditional* to the commit of ancestors;
+ Sub-transactions are not [[Transactions#Durability|Durable]] - they become permanent only upon the top-level commit.

During execution, updated items are isolated and visible only to the parent.
## Abortion
If a sub-transaction **aborts**, then:
+ Just the parent node is informed;
+ There is no impact on higher-level progress;
+ The parent chooses how to proceed.

The parent has 4 possible reactions:
1. **Retry**;
2. **Ignore** - this is useful for non-vital sub-transactions, like no rental cars for a flight, etc;
3. Run a **contingency** - like booking a different hotel if one fails;
4. **Abort**.
## Advantages
+ Modularity and finer granularity;
+ Sub-transactions can execute concurrently;
+ Aborted sub-transactions can roll back without side-effects;
+ Long-duration transactions have lesser effect.
## Savepoints
We can simulate nesting transactions with **savepoints**. These are *identifiable* points in **flat** transactions, representing a partially consistent state. They can be used as internal restart points. This provides a finer unit of recovery than a whole transaction.

