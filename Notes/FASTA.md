#notes 
> [!abstract] 
> FASTA gives us near linear-time search using the following process:
> 1. Build an index table of $c$-mers from the database sequence (once);
> 2. Look up the query's $c$-mers in the index to find exact-match seeds;
> 3. Group seeds by their diagonal and greedily extend the strongest ones, ungapped;
> 4. Run [[Banded Dynamic Programming]] around the best diagonal regions for a final gapped alignment.
> 
> Each stage is a *heuristic filter*, so FASTA can miss the true optimum for very divergent subsequences.
## Identifying Exact-Match Seeds
1. We fix a small word length $c$: the *seed* length;
2. We find all pairs $(i,j)$ such that $s[i..i+c-1]=t[j..j+c-1]$: an exact $c$-length match. 

This is typically $c=1,2$ for proteins and $c=4,5,6$ for DNA.
### Finding Seeds Efficiently
We precompute an **index table**: for every possible word $x$ of length $c$, the list of positions where $x$ occurs in $s$. This is built once per database sequence, ahead of any query.
To search with query $t$, we slide a $c$-window along $t$ and look up each word.
The total time is $O(|s|+|t|)$, which is **linear**.
![[FASTA.png]]
## Gapped Alignment
1. Every matching pair $(i,j)$ lies on the diagonal $i-j$. We sort matches by the diagonal to find promising regions;
2. Extend the individual matches greedily along the diagonal while the running score keeps improving;
3. Rank the candidate diagonal regions by the ungapped score, then run banded DP restricted to a band around each high-scoring diagonal;
4. This recovers a proper gapped local alignment in time proportional to the band width, not the full matrix.
## Choosing $c$
### Small $c$ (1-2 for proteins, 4-6 for DNA)
Here:
+ More candidate diagonals;
+ Lower chance of missing the true optimal local alignment;
+ More seeds to extend, so more work at the extension stage.
### Large $c$
Here:
+ Fewer candidate diagonals, so less work extending them;
+ Faster overall searches;
+ Higher chances of missing a real but weak local alignment.

