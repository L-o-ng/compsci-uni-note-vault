#notes 

See [[Dynamic Programming for Sequence Alignment]].

Let $V[i,j]=d(s[1..i],t[1..j])$ be the optimal score of aligning the two prefixes $s[1..i],t[1..j]$ of $s$ and $t$.

$V[i,j]$ is a **max** of:
+ $\sigma(s[i],t[j])+V[i-1,j-1]$;
+ $\sigma(s[i],-)+V[i-1,j]\text{ if }0<j<|t|\text{, and }V[i-1,j]\text{ if }j=0\text{ or }|t|$;
+ $\sigma(-,t[j])+V[i,j-1]\text{ if }0<i<|s|\text{, and }V[i,j-1]\text{ if }i=0\text{ or }|s|$.

Base cases are now: $V[0,0], V[i,0],V[0,j]=0$.

