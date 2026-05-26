#notes 

**Thomas' Write Rule**, also known as the *ignore obsolete write* rule, is as follows:
+ When a transaction $T$ issues a `read(x)`, we perform actions as in [[Timestamping#Methodology]];
+ When $T$ issues a `write(x)`:
	+ If $TS(T)<RTS(x)$: then we do the same: roll back $T$;
	+ If $TS(T)<WTS(x)$: then we ==ignore `write(x)`==;
	+ Otherwise, it is the same as before - execute the write.

This works, since a later transaction has already updated the value of $x$, so $T$ would have attempted to write an out-dated value of $x$, which will never need to be read.
The write restarts **only** if it is *read* by a *later* transaction.

It can be proven that this produces [[Transactions#View Serializability|View Serialisable]] schedules, which can **never** be produced by other protocols. This means more concurrency and efficiency.

![[Thomas' Write Rule.png]]
Normally, $T_{11}$ would be *rejected* and *restarted* after $T_{12}$. Here, we instead see that $T_{12}$ overwrites later, so we ignore $T_{11}$'s write operation.
