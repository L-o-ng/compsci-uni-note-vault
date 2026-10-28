#notes 

See first: [[The Forward Algorithm]], [[The Backward Algorithm]].

We have a useful factorisation $p(x,S_{i}=L)=F_{l}(i)\cdot B_{l}(i)$.

1. Run the forward algorithm once, storing $F_{l}(i)$ for every $i,l$;
2. Run the backward algorithm once, storing $B_{l}(i)$ for every $i,l$;
3. For any $i,l$: $$p(S_{i}=l|x)= \frac{p(x,S_{i}=l)}{p(x)}= \frac{F_{l}(i)\cdot B_{l}(i)}{p(x)}$$

Each algorithm does $O(m^{2})$ work per position, so $O(m^{2}L)$ time and $O(mL)$ space. It is in the same complexity class as [[Viterbi's Algorithm]].
## Example
![[The Joined Algorithm.png]]
![[The Joined Algorithm-1.png]]
![[The Joined Algorithm-2.png]]

