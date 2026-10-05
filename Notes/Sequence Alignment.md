#notes 

Recall our DNA/RNA bases: $\{ A,C,G,T \} / \{ A,C,G,U \}$.
We have:
+ $A$ - **Adenine**, matching $T$ - **Thymine**;
+ $C$ - **Cytosine**, matching $G$ - **Guanine**.

As DNA molecules are *copied*, **errors** can be introduced:
+ **Mutation**, where a base is changed;
+ **Deletion**, where a base is skipped;
+ **Insertion**, where a base is added.
## Alignment Anatomy
![[Sequence Alignment 1.png]]
## Scoring Alignments
Similar sequences are believed to have evolved from a **common ancestor** - evolutionary change sequences through the operations. 
A score should therefore reflect *how many*, and *which*, **operations** are needed to relate two sequences. A good score should *favour* the **simplest** or **most likely** explanation.
### General Additive Scoring Functions
We define a function:
$$
\sigma:\Sigma \cup \{ - \}\times \Sigma \cup \{ - \}\to \mathbb{R}
$$
over pairs of letters, including the gap symbol $-$:
+ $\sigma(x,y)$ returns the score of replacing $x$ by $y$;
+ $\sigma(x,-) / \sigma(-,x)$ returns the score of an indel.

The score of an alignment is thus the sum of the $\sigma$-scores of its columns.
The **optimal** score $d(s,t)$ is the maximum score over all possible alignments of sequences $s,t$.
