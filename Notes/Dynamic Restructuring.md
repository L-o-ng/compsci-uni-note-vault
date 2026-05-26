#notes 

**Dynamic Restructuring** works on the basis of a *split-transaction* operation.
+ Transaction $T$ is split into two serialisable transactions $A,B$;
+ Their actions and resources are divided;
+ The new transactions proceed *independently*.

This does mean partial results of $T$ become visible by other transactions.
## Conditions
There are three conditions for a split transaction:
1. $A\text{-Write-Set} \cap B\text{-Write-Set} \subseteq B\text{-Write-Last}$;
	1. If both $A,B$ write to the same object, then $B$'s write operations follow $A$'s write operations.
2. $A\text{-Read-Set}\cap B\text{-Write-Set}=\emptyset$;
	1. $A$ cannot see any results of $B$.
3. $B\text{-Read-Set} \cap A\text{-Write-Set}=\text{Share-Set}$.
	1. $B$ may see the results of $A$.

Then, $A$ is serialisable before $B$: if $A$ aborts then $B$ must also abort.
If $B\text{-Write-Last}=\text{Share-Set}=\emptyset$ then $A,B$ are serialised in **any** order.
## Join-Transaction Operation
This is the *reverse* of a split-transaction. The work of both ongoing transactions is **merged** as though they have been a single transaction.
### Combination
We:
1. Split into transactions $A,B$;
2. Then join of $B$ with $C$;

This allows us to transfer work amongst transactions without making them available to others.
## Advantages
+ **Adaptive Recovery**: Allows part of the work of a transaction to commit, and so not be affected by subsequent failures;
+ **Reduced Isolation**: Resources are released by committing part of a transaction, and so the effects of a long transaction are mitigated.
## Example Scenario
Programmer Bob edits and recompiles module $F$, and then works for several days on other modules. Another programmer Alice wants to test her own changes to a module $G$, but has to wait until Bob commits his work, in order to be able to read module $F$’s code to build the system executable. The length of Bob’s transaction may prevent Alice from carrying out productive work for unacceptably long time.