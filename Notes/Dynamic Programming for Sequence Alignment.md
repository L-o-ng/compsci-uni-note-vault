#notes 

Let $V[i,j]=d(s[1..i],t[1..j])$ be the optimal score of aligning the two prefixes $s[1..i],t[1..j]$ of $s$ and $t$.

So $V[i,j]$ is a **max** of:
+ $\sigma(s[i],t[j])+V[i-1,j-1]$ (diagonal: mis/match);
+ $\sigma(s[i], -)+V[i-1,j]$ (up: delete $s[i]$);
+ $\sigma(-,t[j])+V[i,j-1]$ (left: insert $t[j]$).

We have base cases:
+ $V[0,0]=0$;
+ $V[i,0]=V[i-1,0]+\sigma(s[i],-)$;
+ $V[0,j]=V[0,j-1]+\sigma(-,t[j])$.
## Needleman and Wunsch Algorithm
![[Dynamic Programming for Sequence Alignment.png]]
![[Dynamic Programming for Sequence Alignment-1.png]]
![[Dynamic Programming for Sequence Alignment-2.png]]
![[Dynamic Programming for Sequence Alignment-3.png]]
## Reconstructing the Best Alignment
While filling $V$, we record which cases achieved the maximum in each cell. To recover an optional alignment, we trace back from $V[n,m]$ to $V[0,0]$, following the recorded choices:
+ Diagonal step: Align $s[i]$ with $t[j]$;
+ Up step: Align $s[i]$ with a gap;
+ Left step: align $t[j]$ with a gap.

More than one optimal alignment may exist.