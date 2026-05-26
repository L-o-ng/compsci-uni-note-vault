#notes 

**Database Recovery** is the process of restoring the database to a correct state in the event of *failure*.
Possible failures include:
+ System crashes;
+ Media failures;
+ Application software errors;
+ Natural physical disasters;
+ Unintentional destruction of data;
+ Sabotage.

At the time of failure, if a transaction has **not** committed, the recovery manager must *roll back* any effects of the transaction, for [[Transactions#Atomicity]].
If it *has* committed, then the recovery manager must *redo* any effects of the transaction, for [[Transactions#Durability]].
![[Database Recovery.png]]
## Logging
In order to recover from failures that might affect transactions, the system can maintain a **log** to keep track of all updates.
This is periodically backed up to **tape** for the case of *catastrophic* failure. Tapes are cheaper and more reliable than disk. Nowadays, however, the log is stored online.
![[Database Recovery-1.png]]
## Commit Points
A transaction $T$ reaches its **commit point** when:
+ All $T$'s operations that access the database have been successfully executed;
+ The effects of all these have been recorded in the log.

After the commit point:
+ $T$ is *committed*;
+ A *commit record* is added to the log;
+ Its effect is assumed to be permanently recorded in the database.

In case of failure, we use the log to:
+ Roll back all started-but-not-committed transactions;
+ Redo all committed transactions, if necessary.


