#notes 

> [!abstract] 
> So far, we have considered **flat** transactions with a single start and end point. This is suitable for traditional databases with simple data and short transactions capping out at the minute level.
> In modern database applications, transactions can have a **long** duration:
>  + They are more susceptible to **failure**;
>  + In case of a *rollback*, there can be loss of **significant work**;
>  + Delays are unacceptably long;
> 
> Ideally, we would like to recover to a state shortly before the crash.

Flat transactions also mean that:
+ More data items are accessed:
	+ To preserve [[Transactions#Isolation]], many items can be locked for extended periods;
	+ This limits concurrency.
+ [[Deadlocks under DBMS Locking Systems|Deadlocks]] are also more likely: the frequency of deadlocks increases to the 4th power of transaction size.

To mitigate these, we have several methods:
+ [[Nested Transaction Model]]
+ [[Dynamic Restructuring]]
+ [[Sagas]]
+ [[Workflow Models]]

---

