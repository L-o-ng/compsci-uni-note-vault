#notes 

> [!abstract] 
> **Optimistic** methods assume that transactions are rarely in conflict, and so allowing them to proceed and checking just before a commit is more efficient.
> There are 2-3 phases:
>  + *Read*;
>  + *Validation*;
>  + *Write* (only for write operations).
## Phases
### Read Phase
The **read** phase runs from the beginning until just before commit.
We read all items from the database, store them in local copies, and update these local copies.

Both read/write operations occur in this phase, but on a virtual database.
### Validation Phase
The **validation** phase runs after the *read* phase. It checks if [[Transactions#Conflict Serializability|Serialisability]] will be violated on commit. If something looks suspicious, the transactions are aborted and restarted; the local copies are just discarded in this case.

For read-only transactions, this is trivial: we check if the read values are still current:
+ If yes, we commit;
+ If no, abort and restart - another transaction updated a value in the meanwhile.

For transactions that *update* values:
+ we check whether the transaction will leave the database in a **consistent** state with serialisability maintained;
+ If yes, we proceed to the *write* phase;
+ If not/unsure, abort and restart.
### Write Phase
After a successful validation, we apply the local copies to the database.
## Validation In Depth
Each transaction $T$ gets three timestamps:
+ At the start of execution: $\text{start}(T)$;
+ At the start of validation: $\text{validation}(T)$;
+ At the finish, including write: $\text{finish(T)}$.

We now perform several passes:
### Pass 1
We check all transactions $S$ with earlier $\text{start}$ timestamps **finished** before $T$ started: $\text{finish}(S)<\text{start}(T)$. In this case, there are no conflicts, as:
+ All items $T$ has read are still current;
+ All items $T$ has written were not overridden.
### Pass 2
Suppose $T$ started before $S$ finished: $\text{start}(T)<\text{finish}(S)$. Then, we check that **both**:
+ All data items written by $S$ were not **read** by $T$;
+ $S$ completes its write phase before $T$ enters its validation phase: $$\text{start}(T)<\text{finish}(S)<\text{validation}(T)$$

Here, the former guarantees that $T$ has read **current** values.
The latter guarantees that **writes** of $T$ are done *serially*, such that no conflicts with $S$ can ever arise.
### Serialisability
These guarantees are too strong for serialisability:
+ For the former, suppose $T$ reads only after $\text{finish}(S)$ an item that $S$ wrote. $S,T$ are **not** in conflict;
+ For the latter, suppose $\text{validation}(T)<\text{finish}(S)$. If $S$ wrote different items than $T$, then they are **not** in conflict.

This means that transactions may restart more than needed. However, rollback involves only a local copy of data, so there is no cascading. More accurate tests would take more time and be useless for rare conflicts. Conservative methods may be faster if conflicts are common.


