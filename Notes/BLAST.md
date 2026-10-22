#notes 

> [!abstract] 
> Rather than [[FASTA|looking for c-mers]], we look for **close matches**. A *high-scoring pair* (**HSP**) is two length-$c$ substrings $u,v$ with ungapped score $d(u,v)$ above threshold $T$.
> BLAST proceeds in three stages:
> 1. Find *short*, high-scoring seed words (not necessary exact matches like [[FASTA]]);
> 2. Extend these seeds into ungapped diagonal matches;
> 3. Extend the best ungapped matches into full gapped local alignments.
## Seeding and Extension
1. Find every length-$c$ word scoring at least $T$ against some $c$-mer in $t$, under a **substitution matrix**;
2. **Ungapped Extension**: Seeds on the same diagonal are extended both directions as far as the score keeps improving;
3. **Gapped Extension**: promising ungapped matches are extended further, now allowing gaps, with a restricted banded style [[Banded Dynamic Programming|DP]];
4. Extension is abandoned once the running score drops too far below its best value, keeping BLAST fast.

![[BLAST.png]]
## E-Values
A raw alignment score is hard to interpret, as it could have happened by chance.
> [!important] 
> BLAST reports an **E-value**: roughly, the expected number of unrelated database sequences that would score at least this well by chance.

A small *E-Value* is unlikely to be chance.
## PSI-BLAST
This is an extended algorithm which builds a position-specific profile from significant hits, then searches again with the profile, and so is much more sensitive to distant relationships.
