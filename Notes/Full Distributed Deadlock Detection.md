#notes 

In **Distributed Deadlock Detection**, at every site $S$:
1. Construct the *local* **Wait-For** graph (*WFG*) of $S$;
2. Add an external node $T_\text{ext}$.

For a transaction $T_{i}$ in the local WFG of $S$:
+ If $T_{i}$ *waits* for a lock of a transaction at some site $S'\neq S$:
	+ Add $T_{i}\to T_\text{ext}$ to the *local* WFG of $S$;
	+ This edge is labelled $S'$.
+ If a transaction waits for a lock of $T_{i}$ at some site $S'\neq S$:
	+ Add $T_\text{ext}\to T_{i}$ to the *local* WFG of $S$;
	+ This edge is labelled $S'$.

Now, at every site $S$:
+ If the *local* WFG has a cycle **without** $T_\text{ext}$, then there is a local deadlock at $S$;
+ If there is a cycle *with* $T_\text{ext}$ then there is *potential* for a global deadlock.

To find out, we **merge** cycles using edge-labels *to* and *from* $T_\text{ext}$ until:
+ Either a global cycle is found without $T_\text{ext}$;
+ Or there is no cycle.
## Advantages and Disadvantages
This method is more robust to failures, but has higher communication complexity.
## Example
![[Full Distributed Deadlock Detection.png]]
Here, there is **no** *local* cycle without $T_\text{ext}$, so no *local* deadlocks.
We have a cycle $T_\text{ext}\to T_{3}\to T_{1}\to T_\text{ext}$ at site $S_{1}$. We therefore transmit the local WFG of $S_{1}$ to the site for which $T_{1}$ is waiting: $S_{2}$.
There, we find $T_\text{ext}\to T_{3}\to T_{1}\to T_{2}\to T_\text{ext}$. Here $T_{2}$ is waiting for $S_{3}$ so we send the WFG over. We finally obtain:
$$
T_\text{ext}\to T_{3}\to T_{1}\to T_{2}\to T_{3}\to T_\text{ext}
$$
which is a cycle without $T_\text{ext}$, so we have a global deadlock.
