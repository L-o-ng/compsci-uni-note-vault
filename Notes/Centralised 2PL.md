#notes 

> [!abstract] 
> In the **Centralised 2PL Protocol**, a *single* site has a **central lock manager** (*LM*).
> The LM maintains *all* locking information for the DDBMS.
## Overview
The main idea here is to treat the database as if it were centralised.
### Advantages
+ Easy implementation, with little consideration for the distributed environment;
+ Deadlock detection is simple, as building the wait-for graph is centralised.
### Disadvantages
+ Bottlenecks when the **LM*** is overloaded, so there are issues with scalability;
+ Failure of the **LM** freezes the DDBMS, so reliability is low.
## Methodology
When a transaction is initiated at site $S_{i}$:
+ The **local transaction coordinator** (*TC*) at $S_{i}$ is responsible for ensuring consistency throughout the transaction;
	+ It ensures all copies of an updated item are synchronised.
+ If the transaction needs to update a data item $x$:
	+ The TC requests a write-lock from the LM for each copy of $x$;
	+ The LM decided to grant the lock by standard [[Locking#Two Phase Locking|2PL]] rules.
+ Similarly, for reading $x$:
	+ The transaction can read from any copy of $x$;
	+ The LM decides to grant a read-lock or not.

