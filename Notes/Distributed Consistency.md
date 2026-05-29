#notes 

If a system maintains only a **single** copy for each object, then object correctness simply relates to the sequence of operations applied to that object.

Correctness of [[Replication|Replicated]] **Objects** is more challenging: replicas are maintained by different machines, where each machine may receive operations in a different order.

DSs rely on replicating shared objects, or allowing concurrent access at many nodes. If this is not carefully controlled, then accesses may be executed in a different order than expected, generating incorrect results.
> [!example] 
> Suppose you want to perform some operations $x,y$ on servers $A,B$ at 10:02AM and 10:04AM, respectively.
> There are clock synchronisation errors at servers due to physical locations, such that on an atomic clock, $A$ is actually at 10:06AM and $B$ at 10:03AM.
> Now, the actual implementation of operations is in the reverse order: $y$ then $x$.
> This is a **synchronisation error**.
## Consistency Models
A **Consistency Model** is a contract between a *data store* and *processes*, in which the data store specifies precisely what the results of read and write operations are in the presence of concurrency:
+ All models attempt to return the results of the ==last write for a read operation==;
+ Models differ in how the *last* write is determined at each disk;
+ We have several notions of consistency to loosen requirements.
## Strict Consistency
This is the **strongest** consistency model:
+ Any read on a data item $X$ returns a value corresponding to the result of the most recent write on $X$;
+ A write is immediately visible to all processes, assuming no transmission delays;
+ This is difficult to achieve in real systems.

We need an absolute global time, such that **most recent** becomes unambiguous. 
## Sequential Consistency
See: [[Linearisability]].

If for any transaction, there is some interleaving of the series of operations that satisfies then following two criteria:
1. The interleaved sequence of operations meets the **specification** of a single correct copy of the objects;
2. The order of operations in the interleaving is consistent with the program order in which each individual process executed them. That is, for each process, the interleaving of operations has the same order for the process' operations as the process description.

then we have **sequential consistency**.

All processes should see identical ordering of operations by maintaining real-time ordering for operations of each individual process, but they may not maintain real-time ordering across processes.

Operations that are linearisable also fulfil sequential consistency.
### Example 1
We have two processes $P_{1},P_{2}$ executing different operations sequentially:
![[Distributed Consistency.png]]
The virtual interleaving of operations are in the same order as their execution.
$$
x_{1},y_{1},x_{2},y_{2},y_{3},x_{3},y_{4}
$$
Note that $x_{2},y_{2}$ do not follow the real-time order. This is valid when the effects of $y_{2}$ are seen later than the effects of $x_{2}$. There is no strict consistency.
### Example 2
Let servers $A,B$ have replicated data of accounts $x,y$. Suppose that both accounts have balance $0$ initially.
We then execute:

| Client 1             | Client 2          | Result |
| -------------------- | ----------------- | ------ |
| `setBalance_B(x, 1)` | `-`               | `-`    |
| `-`                  | `getBalance_A(y)` | `0`    |
| `-`                  | `getBalance_A(x)` | `0`    |
| `setBalance_A(y, 2)` | `-`               | `-`    |
There is a **delay** in getting updates from $B$ to $A$.

Sequential consistency **is** there.
## Causal Consistency
This model is a weakening of sequential consistency in that it makes a distinction between events that are potentially causally related and those that are not.
*Necessarily*, **writes** that are *potentially* causally related must be seen by all processes in the same order. Concurrent writes may be seen in a different order on different machines.
![[Distributed Consistency-1.png]]
This sequence is allowed under this model.
`W(x)a` and `W(x)b` are causally related as there is a read before `W(x)b` at `P2`. The effect of `W(x)a` is seen at `P2` before applying `W(x)b`.
In contrast, `W(x)b` and `W(x)c` are concurrent as there is no intervening read operation.
`P3` and `P4` must read `a`, `b` in the same order as they are potentially causally related. There is no causality for `c`.
`P3` and `P4` see values in a different order, however, so there is no sequential consistency.
## Eventual Consistency
In many systems , one or a few processes perform **updates**.
In the absence of updates, all replicas converge towards identical copies. An update should *eventually* propagate to all replicas.
