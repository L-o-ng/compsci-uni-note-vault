#notes 

We can prove that a given language $L$ is regular:
1. Construct a DFA/NFA that recognises $L$;
2. Produce a regular expression that describes $L$.

How can we prove a given language $N$ is **not** regular? This would mean it cannot be recognised by any DFA. We can *assume* there is a DFA that recognises $N$ and use an [[Selection and Adversaries|Adversary Argument]] against that DFA in order to obtain a **contradiction**.
## Example
We shall prove that $L=\{ a^{n}b^{n}|n \in \mathbb{N} \}$ is not regular.
### Proof
Assume that there is a DFA $M$ that recognises $L$.
Suppose $M$ has $m$ states. Now consider the set of words $S=\{ a^{n}|0\leq n\leq m \}$.
There are $m+1$ words in $S$, so by the [[Pigeon Hole Principle]] there must be two different words from $S$: $a^{i},a^{j},i\neq j$ that end up in the same state $q$ when started from the start state of $M$.
Now we continue from $q$ with the word $b^{i}:a^{i}b^{i}$ and $a^{j}b^{i}$ both end up into the same state $q'$. But $a^{i}b^{i} \in L$ while $a^{j}b^{i}\not\in L$, so $q'$ is an accept state and a non-accept state at the same time. This is a contradiction.
The [[The Pumping Lemma|Pumping Lemma]] is a generalisation of this argument: it abstracts away the DFA and adversary argument.