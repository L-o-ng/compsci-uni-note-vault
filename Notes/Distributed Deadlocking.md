#notes 

Recall [[Deadlocks under DBMS Locking Systems]].

Now consider the following:
![[Distributed Deadlocking.png]]
In the local wait-for graphs, we have *no* deadlocks. However, in the *global* case:
![[Distributed Deadlocking-1.png]]
A deadlock arises.

We have **three** main methods to deal with distributed deadlocks:
+ [[Centralised Distributed Deadlock Detection]]
+ [[Hierarchical Distributed Deadlock Detection]]
+ [[Full Distributed Deadlock Detection]]