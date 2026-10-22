#notes 

Suppose $|s|=|t|$ and we expect the optimal alignment to use few indels, so it stays close to the main diagonal.
![[Banded Dynamic Programming.png]]
We can save time by only computing cells within a **band** of width $k$ around the diagonal: $\left( |i-j| \leq \frac{k}{2} \right)$, and we treat cells outside the band as $-\infty$.
$V[i,j]$ is a **max** of:
+ $\sigma(s[i],t[j])+V[i-1,j-1]$ (diagonal);
+ $\sigma(s[i],-)+V[i-1,j]\text{ if }|(i-1)-j| \leq \frac{k}{2}\text{ else }-\infty$ (up);
+ $\sigma(-, t[j])+V[i,j-1]\text{ if }|i-(j-1)| \leq \frac{k}{2}\text{ else }-\infty$ (left).

If the band has width$k$, then filling it takes $O(kn)$ time instead of $O(n^{2})$.
## Choosing $k$
If $k$ is too small, then we can cut off the true optimal alignment.
If $k$ is too large, then we lose the time-saving benefit.
In practice, $k$ is chosen from prior knowledge of how similar the sequences are expected to be. For [[Local Alignment]] or $|s|\neq |t|$ it is less obvious where to centre the band: see [[FASTA]].
