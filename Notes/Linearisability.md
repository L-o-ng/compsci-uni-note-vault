#notes 

Two processes $P_{1},P_{2}$ execute different operations sequentially.
![[Linearisability.png]]
The process of **Linearising** is finding a virtual interleaving of operations as if they were executed on a single machine and the data is consistent with real times:
$$x_{1},y_{1},y_{2},x_{2},y_{3},x_{3},y_{4}$$
## Definition
There exists a **virtual canonical execution** - the interleaved operations against a virtual single image of shared and replicated objects, and than each client sees a view of the shared objects that is consistent with that single image.

In a DS, operations are **linearisable** if:
+ The interleaved sequence of operations meets the specification of a single correct copy of the objects - reads and writes should make sense;
+ The order of operations in the interleaving is consistent with the real times at which the operations occurred in the actual execution.

Note that linearisability concerns only the interleaving of individual operations and is not intended to be transactional. Linearisable execution may *break* application-specific notions of *consistency* if concurrency control is not applied.
## Example
Let servers $A,B$ have replicated data of accounts $x,y$. Suppose that both accounts have balance $0$ initially.
We then execute:

| Client 1             | Client 2          | Result |
| -------------------- | ----------------- | ------ |
| `setBalance_B(x, 1)` | `-`               | `-`    |
| `-`                  | `getBalance_A(y)` | `0`    |
| `-`                  | `getBalance_A(x)` | `0`    |
| `setBalance_A(y, 2)` | `-`               | `-`    |
There is a **delay** in getting updates from $B$ to $A$. The interleaving of operations is:
+ `setBalance_B(x, 1)`, `getBalance_A(y)` -> `0`, `getBalance_A(x)` -> `0`, `setBalance_A(y, 2)`.

This is **not** linearisable, as we set $x$ and do not receive the latest result.
It would **be** linearisable if we had `getBalance_A(x)` -> `1`.

In practical systems, each operation should appear to take effect instantaneously at some moment between its start and finish. Operations complete within a given time. For a write, the timestamp could be anywhere within the shaded region.
![[Linearisability-1.png]]
Operations with overlapping regions can appear in any order, but non-overlapping regions should maintain their ordering.
![[Linearisability-2.png]]
