#notes 

> [!abstract]
> Global [[Sequence Alignment]] forces the **entire** sequence to be aligned, regardless of gaps. However, we often want to know if two sequences share a **strongly similar region**.
> Formally, we want to find $i,j,k,l$ such that $d(s[i..j],t[k..l])$ is maximal.
> ![[Local Alignment.png]]
## Recurrence (Smith and Waterman)
Let $V[i,j]=d(s[1..i],t[1..j])$ be the optimal score of aligning the two prefixes $s[1..i],t[1..j]$ of $s$ and $t$.

$V[i,j]$ is a **max** of:
+ 0;
+ $\sigma(s[i],t[j])+V[i-1,j-1]$;
+ $\sigma(s[i],-)+V[i-1,j]\text{ if }0<j<|t|\text{, and }V[i-1,j]\text{ if }j=0\text{ or }|t|$;
+ $\sigma(-,t[j])+V[i,j-1]\text{ if }0<i<|s|\text{, and }V[i,j-1]\text{ if }i=0\text{ or }|s|$.

Base cases are now: $V[0,0], V[i,0],V[0,j]=0$.
### Tracing the Optimal Alignment
The optimal local alignment score is the largest value **anywhere** in $V$, not necessarily in the bottom-right corner.
We start traceback at the cell with the maximum value and stop at 0.