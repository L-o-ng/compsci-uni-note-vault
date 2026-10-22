#topic 

See first: [[Markov Chains and Processes]].

So far, we treated each letter of a sequence as [[Probabilistic Models for Alignment|sampled independently]] from a fixed distribution $q()$ over $\{ A,C,G,T \}$.
Real genomes are not like this. There are dependencies between neighbouring letters:
+ Special subsequences occur, for example: the TATA box in regulatory regions upstream of a gene;
+ The dinucleotide CG (CpG) is much rarer than independent sampling would predict.

We can model these dependencies with **Markov Chains** and [[Hidden Markov Models]].
## Notes
+ [[Finite Markov Chains]]
+ [[Ergodic Markov Chains]]
+ [[CpG Islands]]
+ [[Hidden Markov Models]]
