#notes 

The notions of [[Transactions#Schedules|Schedules]] and [[Transactions#Conflict Serializability|Serialisability]] naturally extend to the **distributed** environment. We have a **local** and **global** schedule.
> [!definition] 
> A **Global Schedule** is said to be *serialisable* if:
>  + Each *local* schedule is serialisable at each site;
>  + The local serialisation orders of transactions are identical.

In other words, if all sub-transactions appear at every site, in the same order in the equivalent serial schedule.
That is,
+ $n$ sites $S_{1},S_{2},\dots,S_{n}$;
+ We denote by $T_{i}^{x}$ the sub-transaction of $T_{i}$ at site $S_{x}$;
+ A global schedule of transactions is serialisable if whenever $T_{i}^{x}<T_{j}^{x}$ at some $S_{x}$, we have that $T_{i}^{y}<T_{j}^{y}$ for **every** site $S_{y}$.
+ So all sub-transactions appear at **every** *site* in the **same** *order* as in the equivalent serial schedule.

Given a distributed non-serial schedule, we can test conflict serialisability using the precedence graph. However, since the database is distributed, no site has full information about all global conflicts, and so even building the precedence graph is non-trivial.
![[Distributed Serialisability-4.png]]
Here, the local schedules are serialisable, but not the global!

See now: [[Distributed Concurrency Control]].
## Examples
### 1
Consider a quite **restrictive** schedule of transactions:
+ Every site ensures **local serialisability**;
+ At every time at most *one* transaction is active;
+ Even then, global serialisability is **not** guaranteed.
![[Distributed Serialisability.png]]
![[Distributed Serialisability-1.png]]
### 2
![[Distributed Serialisability-2.png]]
![[Distributed Serialisability-3.png]]