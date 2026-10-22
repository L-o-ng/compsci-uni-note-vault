#notes 

The matrix $V$ needs $O(mn)$ space to support traceback. This is already tens of gigabytes for $m=n=20000$.
We can use the **Hirschberg** trick to recover the optimal alignment in $O(\min(m,n))$ space:
> [!definition] Hirschberg
> Find the single column an optimal alignment **must** cross using linear-space forward and backward score sweeps, then recurse on each half.

Our total time stays $O(mn)$ with a small additional constant overhead, and we get linear space complexity.
