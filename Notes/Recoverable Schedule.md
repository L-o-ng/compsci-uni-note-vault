#definition 

A transaction $T$ reads from transaction $T'$ in a schedule $S$ if some data item $x$ is *first* **written** by $T'$, *then* **read** by $T$.

$S$ is **recoverable** if no $T$ *commits* in $S$ unless first all $T'$ commit, from which $T$ reads.

Consider:
![[Recoverable Schedule.png]]
If $T_{9}$ commits immediately after `read(A)`, then this schedule is *not* recoverable. This is because there is the possibility that $T_{8}$ aborts, and so $T_{9}$ may have processed an inconsistent state.

This can lead to a cascading rollback.