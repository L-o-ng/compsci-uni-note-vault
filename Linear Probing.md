#definition 

If we try to insert an entry `(k,v)` into a bucket `A[i]` that is already occupied, where `i=h(k)`, then we try next at `A[(i+1) MOD N]`.
If that is also occupied, then we try `A[(i+2) MOD N]` and so on, until we find an empty bucket that can accept the new entry.

The name comes from the fact that accessing a cell of the bucket array can be viewed as a probe.
## Costs
+ Insert and search cost are dependant on the length of the cluster.
+ Average length of cluster is `N/M`
+ Worst case: All keys hash to the same cluster.