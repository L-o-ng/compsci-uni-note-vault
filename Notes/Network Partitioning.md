#notes 

> [!abstract] 
> Typical types of failure in a distributed system include:
>  + Loss of a message;
>  + Failure of a communication link;
>  + Failure of a site.
>  
>  An even more critical failure, however, is **Network Partitioning**:
>  + Communication failures can results in a network becoming split into two or more partitions
>  + It is difficult to distinguish between a communication link or site failure in this scenario.

![[Network Partitioning.png]]
Here, site $S_{1}$ cannot reach $S_{2}$ within a fixed period. It is difficult to determine whether the link or site has failed. It could be:
+ $S_{2}$ crashed or its network is down;
+ Communication link $S_{1}\iff S_{2}$ failed;
+ Network is partitioned;
+ $S_{2}$ is very busy and delays its response.
## Problem
Consider a **global** transaction $T$, acting at many sites:
+ Sub-transactions of $T$ in one partition decide to commit;
+ Sub-transactions in the other decide to abort;
+ This violates [[Transactions#Atomicity|Atomicity]].

To ensure atomicity, we must have a protocol that has all sub-transactions finish, then the global transaction finishes.
We can use one of the following protocols to address this:
+ [[Two-Phase Commit]]
+ [[Three-Phase Commit]]

