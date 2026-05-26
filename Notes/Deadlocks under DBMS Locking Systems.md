#notes 

Under the 2PL model, two or more transactions can wait for each other, and hence wait forever.
![[Locking Deadlocking.png]]
There are 2 solutions to this:
## Timeouts
A transaction requests a lock for up to a system-defined maximum period of time.
After that:
+ The DBMS assumes a deadlock;
+ The request **times out**;
+ The transaction **rolls back** and restarts.

This is a simple solution implemented in many commercial DBMSs.
## Detection
We construct a **wait-for graph** $G=(N,E)$, with nodes $N$ per transaction $T_{i}$; and directed edges $T_{i}\to T_{j}$ whenever transaction $T_{i}$ is waiting for a lock that is kept by transaction $T_{j}$.
> [!theorem] 
> A **deadlock** exists if and only if the wait-for graph contains a directed *cycle*.
## Handling Deadlocks
When a deadlock is detected, the DBMS **aborts** (*rolls back*) a transaction.

Thus, if we check too often, then the database is slower. If we check too rarely, then deadlocks may go undetected for long periods.
### Recovery
We have some important parameters for recovery:
+ How far to roll back:
	+ The simplest solution is to undo all changes and restart;
	+ More efficiently, we can roll back only **part** of a transaction.
+ Choice of the deadlock *abortion*:
	+ Which transaction is aborted?
	+ The choice affects efficiency;
	+ Criteria generally include:
		+ How long a transaction has been running: It is better to terminate a short transaction;
		+ How many data items has it updated: Fewer changes is better;
		+ How many items has it yet to update: Better to not abort transactions that have few updates left, but this is hard to calculate.
+ Avoiding *starvation*:
	+ Starvation occurs when a specific transaction is **always** chosen. It can thus never complete;
	+ We thus store how many times a transaction has been aborted, and use different criteria upon an upper limit.

