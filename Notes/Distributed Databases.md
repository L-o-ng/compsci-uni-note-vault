#topic  

See also: [[Distributed Systems]].

> [!abstract] 
> A **Distributed Database** is a collection of shared data, distributed over a network.
> A **Distributed DBMS**, or *DDBMS*, is the software system managing the *distributed database*.
> In a *DDBMS*:
>  + There is a *single* logical database, split into **fragments**;
>  + Each *fragment* is stored on one or more **sites**;
>  + *Sites* have *local* **autonomy**, using their own DBMS;
>  + *Sites* have access to the **global** database, using their network connection to other sites.

![[Distributed Databases.png]]
A distributed database can be:
+ **Partitioned**:
	+ The database can be partitioned into disjoint fragments;
	+ Each data item is assigned to *exactly one site* to avoid replication;
	+ There is no redundancy.
+ Completely **Replicated**:
	+ Each site has a complete copy of the database;
	+ This allows faster data retrieval.
+ **Selectively** *Replicated*:
	+ This is a combination of partitioning and replication.
## Notes
+ [[Distributed Transactions]]
+ [[Distributed Serialisability]]
+ [[Distributed Concurrency Control]]
+ [[Distributed Deadlocking]]
+ [[Network Partitioning]]
+ [[Two-Phase Commit]]
+ [[Three-Phase Commit]]