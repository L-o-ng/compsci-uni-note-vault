#notes 

The **Primary Copy 2PL Protocol** is a straightforward extension of [[Centralised 2PL]], where we now have *many* **Lock Managers** (*LM*s) across the DDBMS. Each LM is responsible for locking a different set of data items.

For every replicated data item $x$, one copy is chosen as the **primary copy**, and further copies are designated as **slave copies**.

When an item $x$ is **updated**:
1. The local **Transition Coordinator** (*TC*) locates the *primary* copy of $x$;
2. The TC sends a write-lock request to the appropriate LM;
3. Only the primary copy of $x$ is locked and updated;
4. The change later propagates to slave copies.
## Advantages
+ In a system where large updates are infrequent and sites do not always need the most current data, this protocol is *very* efficient.
+ The bottleneck problems are solved, as the load is distributed between Lms.
## Disadvantages
+ There are still reliability issues:
	+ Large degree of centralisation;
	+ Failure of one LM freezes a part of the DDBMS;
	+ All primary copies of this LM are inaccessible;
	+ Each LM may nominate a ***backup* site** to address this.
## Backup Site
When an LM receives an *update* request, it sends a copy of this to its backup site (**B-LM**).
If the LM does **not** send a quick *update notification*, then the B-LM:
1. Assumes that the LM failed, and acts in its place;
2. It sends a copy of the request to its own backup;
3. It notifies all sites that it is the new LM;
4. It performs all updates of the original LM.

When the LM *recovers*:
1. It notifies all sites that it is again the LM;
2. It receives from B-LM the log of updates made.

