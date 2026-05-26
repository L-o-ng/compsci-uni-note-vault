#notes 

A *transaction* in a DDBMS is initiated in one of the sites and then divided into sub-transactions: one per site.
The DDBMS must ensure:
+ **Synchronisation** of *sub-transactions* with other local transactions;
+ [[Transactions#ACID Properties|ACID]] properties of local/global transactions.

All the typical [[Transactions#Problems|Problems]] still exist, but a new one appears: the **multiple-copy consistency problem**. When an item is updated, it must be updated at **every** *site*; otherwise, we have inconsistency in the global database.

