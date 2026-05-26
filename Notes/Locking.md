#notes 

When a [[Transactions|Transaction]] accesses the database, the **lock** denies access to other transactions to prevent incorrect results.
This is the most widely used method to *ensure* [[Transactions#Conflict Serializability|Serialisability]].
## Terminology
+ A transaction **requests** a lock to the DBMS;
+ The DBMS **grants** the lock;
	+ Otherwise, the transaction **waits**.
+ A transaction **releases** a lock on the data item;
+ The item **unlocks**.
## Rules
A transaction $T$ can keep two types of locks:
+ **Shared** (*read*) lock:
	+ $T$ is allowed only to *read* some data item;
	+ Any other transaction can only *read* this item.
+ **Exclusive** (*write*) lock:
	+ $T$ is allowed to *read* and *write* on some data item;
	+ Any other transaction has *no* access to this item.

When a transaction needs to access a data item, it **requests** the appropriate lock type. If the item is *not* currently locked, it will be **granted**. If the item *is* currently locked, the DBMS checks **compatibility** between the *existing* and *requested* locks:
+ A **shared** lock can be granted when the item is locked by another shared **lock**;
+ Otherwise, the transaction must wait until the lock is released.

A transaction **holds** a lock until it explicitly **releases** it:
+ During its execution;
+ When it terminates (commit/abort).

The effects of a **write** are made visible when an **exclusive** lock is released. This ensures [[Transactions#Isolation|Isolation]].

Some systems can permit upgrading or downgrading a lock to increase concurrency.
## Methodology
We cannot guarantee serialisability with just locking alone:
![[Locking Serialisability.png]]
Let us suppose $\text{bal}_{x}=100,\text{bal}_{y}=400$. Then, regardless of which transaction is completed first, the sum is 550. If we grant locks as above, however, then our sum is 560 instead.
To guarantee serialisability, we need an additional protocol.
## Two Phase Locking
**Two Phase Locking**, or *2PL*, is a protocol where for each transaction, *all* **locking** operations occur **before** *all* unlocking operations, in the respective growing and shrinking phase.
### Problems
#### Lost Update
This is prevented, as the **request** of $T_{1}$ for an exclusive lock *waits* until the exclusive lock is released by $T_{2}$.
![[Locking Lost Update.png]]
#### Dirty Data
The request of $T_{3}$ for an exclusive lock *waits* until it is released by $T_{4}$, only after the **rollback** of $T_{4}$ is completed.
![[Locking Dirty Data.png]]
#### Inconsistent Analysis
![[Locking Inconsistent Analysis.png]]
### Cascading Rollback
It can be proven that if every transaction follows *2PL*, then the schedule is **always** [[Transactions#Conflict Serializability|Conflict Serialisable]]. However, problems can occur if locks are **released early**. This results in the *cascading rollback problem*:
> [!question] Cascading Rollback
> A transaction can **rollback** after a long time. This can cause a pile-up or rollbacks, which is inefficient.
> ![[Locking Cascading Rollback.png]]
#### Recoverability
This is [[Recoverable Schedule|Recoverable]] if none of the transactions have committed yet.

A schedule is **cascadeless** if this cannot occur; that is, for each pair of transactions $T_{i},T_{j}$, if $T_{j}$ reads before $T_{i}$, then the **commit** operation of $T_{i}$ appears **before** the **read** operation of $T_{j}$.

This is slightly different to a [[Recoverable Schedule]], in which the **commit** operation of $T_{i}$ must appear before the **commit** operation of $T_{j}$.
![[Locking Recoverability.png]]
#### Solutions
##### Rigorous 2PL
In **Rigorous 2PL**, we release *all* locks at the **end** of every transaction. Here, transactions are serialisable in the order that they commit, without cascading rollback.
##### Strict 2PL
This is as above, but we release all **write** locks at the committal of each transaction. Read locks can be released earlier.
## Granularity
> [!question] 
> How large is the data item that is to be locked?

This is computed as a hierarchy:
+ Entire database - coarsest size;
+ File (relation/table);
+ Page (section of physical disk);
+ Record (tuple of relation);
+ Field value (cell of a tuple) - finest size.

The coarser, the larger the locked items, the fewer locks requested, and so the faster the locking system. However, we have a lower degree of concurrency.
The finer, the smaller the locked items, the more locks requested, and the slower the locking system - more locking information storage is required. However, we obtain a higher degree of concurrency.

The best granularity size depends on the nature of the transactions.

---

See now: [[Deadlocks under DBMS Locking Systems]]
