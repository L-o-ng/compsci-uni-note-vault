#notes 

We have a [[Database Management Systems|DBMS]]. We need to *trust* it, by having mechanisms that ensure:
+ Reliability;
+ Consistency.

This is especially important where we have software/hardware failures or concurrent access.

We can track **transactions** to ensure this.
## Terminology
+ **Concurrency Control Protocols**: Prevent database accesses interfering with each other;
+ **Database Recovery**: The process of restoring a database to a correct state after failure;
+ **Transaction**: An action or series of actions carried out by a single user/program which reads/updates the database.
## Architecture
![[Transactions Architecture.png]]
+ **Transaction Manager** - Coordinates transactions on behalf of the application programs;
+ **Scheduler** - Implements a strategy for concurrency control;
	+ The aim is to maximise concurrency and ensure correctness, by not allowing executing transactions to interfere.
+ **Buffer Manager** - Ensures efficient transfer of data between the disk and main memory;
+ **Recovery Manager** - In case of failure, the database is restored to the last consistent state.
## Transaction Properties
At the end of a transaction:
+ Database must be left in a consistent state;
+ Primary and foreign keys must be in a valid state.

During Execution:
+ The database **may** be in an inconsistent state;
+ Constraints can be violated so long as they are fixed before the end of execution.

A *transaction* can have *two* outcomes:
+ **Committed**: On successful completion, the changes are applied;
+ **Rolled Back**: The changes are discarded when unsuccessful.
### ACID Properties
#### Atomicity
A transaction is either performed entirely, or not at all. The recovery subsystem of the DBMS is responsible for enforcing this.
#### Consistency
A transaction must transform the database from a consistent state to another consistent state. Both the DBMS and app developers are responsible for enforcing this:
+ The DBMS ensures referential consistency;
+ The programmer must ensure that the logic is correct, or else a transaction can be valid but inconsistent.
#### Isolation
Transactions execute independently. The partial effects of incomplete transactions should not be visible to other transactions. The concurrency control system of the DBMS is responsible for enforcing this.
#### Durability
The effects of a committed transaction are **permanently** recorded on disk. They should not be lost because of a failure. The recovery subsystem of the DBMS is responsible for this.

We have the notion of a [[Recoverable Schedule]] ([[#Schedules]]) for this:
+ Once a transaction is committed, it should **never** be necessary to roll it back.
+ This guarantees durability.
## Concurrency Control
This is the process of managing simultaneous operations on the database, without having them interfere with each other. This is important when many users can access the database.
This is different to a multi-user OS:
+ An OS allows two people to edit a document simultaneously. If both write, then one user loses their changes. This does not happen in a DBMS.

Two transactions may be both correct by themselves but cause inconsistency when executed simultaneously.
There are three main problems:
### Problems
#### Lost Update Problem
Here, an apparently successfully completed update operation by one user is overridden by another user.
![[Lost Update.png]]
Here, the loss of $T_{2}$'s update can be avoided by preventing $T_{1}$ from reading $\text{bal}_{x}$ until after the update.
#### Uncommitted Dependency Problem
Here, a transaction is allowed to see the intermediate results of another transaction before it has committed.
![[Uncommitted Dependency.png]]
We can avoid reading dirty data by preventing $T_{3}$ from reading $\text{bal}_{x}$ until $T_{4}$ commits or aborts.
#### Inconsistent Analysis Problem
Here, a transaction reads some values while they are being updated by another transaction.
![[Inconsistent Analysis.png]]
Here, we can prevent $T_{6}$ from reading $\text{bal}_{x},\text{bal}_{z}$ until $T_{5}$ completes its updates.
## Schedules
An obvious solution to the above problems is to allow only one transaction at a time. However, we want to *maximise* concurrency. Therefore, we need mechanisms that are **guaranteed** to ensure consistency with concurrency.

A **schedule** is a sequence of operations from a set of $n$ concurrent transactions $T_{1},T_{2},\dots,T_{n}$ such that the **order** of the operations in each transaction $T_{i}$ is preserved in the schedule.
A schedule can be one of two types:
+ A **serial** schedule is a schedule where the operations of any two transactions are *not* interleaved. The order of transactions **matters**;
+ A **non-serial** schedule is a schedule where the operations of **some** transactions are interleaved.
### Conflict Serializability
Any serial schedule will leave the database in a consistent state.
A non-serial schedule is serialisable if it produces a database state that can be produced by **some** serial execution of the same transactions.
We therefore have the problem of finding this equivalent schedule.

The following pairs of operations are **not** in *conflict*:
+ When two transactions only **read** some data;
+ When two transactions read/write separate data items.

The following are in **conflict**:
+ When one transaction writes a data item and another one reads or writes the *same* item.

The ordering for our schedule only matters for operations in conflict. All others can have arbitrary order.
![[Conflict Serializability.png]]
### Checking Conflict Serializability
To check whether a given non-serial schedule is serializable or not, we construct the **precedence** graph: a directed graph $G=(N,E)$ with nodes $N$ and edges $E$ where:
+ There is a node for each transaction;
+ A directed edge $T_{i}\to T_{j}$ whenever:
	+ $T_{j}$ reads a value of an item written by $T_{i}$;
	+ $T_{j}$ writes a value into an item after it has been read or written by $T_{i}$.

![[Precendence Graph.png]]
In the precedence graph, an edge $T_{i}\to T_{j}$ means that in **any** equivalent serial schedule, $T_{i}$ appears **before** $T_{j}$.
It can be proven that a schedule is conflict serializable if and only if its precedence graph has no directed cycle.
There is an efficient algorithm for checking this.
### View Serializability
Two schedules $S_{1},S_{2}$ are **view** serialisable if:
+ For each data item $x$, if transaction $T_{i}$ reads the *initial* value of $x$ in $S_{1}$, then $T_{i}$ reads the initial value of $x$ also in $S_{2}$;
+ For each $x$, if the *last* **write** operation on $x$ in $S_{1}$ was done by $T_{i}$, then $T_{i}$ must perform the last write operation on $x$ also in $S_{2}$;
+ For a **read** operation on $x$ by $T_{i}$ in $S_{1}$, if the value of $x$ read by $T_{i}$ was written by transaction $T_{j}$, then $T_{i}$ must also read the value of $x$ produced by $T_{j}$ in $S_{2}$.

In other words, $S_{1},S_{2}$ are **view equivalent** if they return the **same** results.

A non-serial schedule is view-serialisable if it is view equivalent to a serial schedule.
Conflict serialisability implies view serialisability. The converse is not true. Testing for view serialisability is [[NP-Completeness|NP Complete]]. Every view serialisable schedule which is not conflict serialisable has one or more blind writes.
