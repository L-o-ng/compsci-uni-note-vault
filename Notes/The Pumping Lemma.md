#notes 

For every regular language $L$, there is a number $p$, called the **pumping length** of $L$, such that every word $w \in L$ of length at least $p$ can be divided into 3 parts $w=xyz$, satisfying the following conditions:
1. $xy^{i}z \in L$ for every $i \in \mathbb{N}$ - in particular $xz \in L$ as one can take $i=0$;
2. $y$ is a non-empty string;
3. The length of the string $xy$ is not greater than $p$.
## Proof
Let $M=(Q,\Sigma,\updelta,q_{0},F)$ be a DFA that recognises $L$, and let us set the pumping length to be the number of states in $M:p=|Q|$.
Consider the computation of $M$ on the word $w=w_{1}w_{2}\dots w_{n}$ for $n\geq p$:
$$
q_{0}=r_{0}\overset{w_{1}}{\to}r_{1}\overset{w_{2}}{\to}r_{2}\overset{w_{3}}{\to}\dots r_{n-1}\overset{w_{n}}{\to}r_{n}\in F
$$
Let $i$ be the first moment in time when we see a repetition in the sequence of states $r_{0},r_{1},r_{2},\dots r_{n}$ - such an $i$ must exist by the [[Pigeon Hole Principle]] as $n+1>p$ - this means $r_{i}=r_{j}$ for some $j<i$ and the states $r_{0},r_{1},r_{2},\dots,r_{i-1}$ are all different (this implies $i\leq p$).
We can then set $x=w_{1}w_{2}\dots w_{j}$, $y=w_{j+1}\dots w_{i}$ and $z=w_{i+1}\dots w_{n}$.
It is now straightforward to check all 3 conditions are met. 
## Applications
todo!