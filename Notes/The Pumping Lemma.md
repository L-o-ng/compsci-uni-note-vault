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
### Example 1

>The language $L=\{ 0^{n}1^{n}|n \in \mathbb{N} \}$ is not regular.

Take the word $0^{p}1^{p}\in L$ where $p$ is the pumping length of $L$. If $0^{p}1^{p}=xyz$ and $|xy|\leq p$ then $x=0^{i},y=0^{j},z=0^{p-i-j}1^{p}$. But then $xy^{2}z=0^{p+j}1\not \in L$ as $|y|>0$, meaning $j>0$.
### Example 2
>The language $C=\{ w|w\text{ has an equal number of 0s and 1s} \}$ is not regular.

Take the word $0^{p}1^{p}\in C$ where $p$ is the pumping length of $C$. Proceed as in the previous example.
### Example 3
>The language $F=\{ ww|w \in \{ 0,1 \}^{*} \}$ is not regular.

Take the word $0^{p}10^{p}1 \in F$ where $p$ is the pumping length of $F$. Note that $x=0^{i},y=0^{j},z=0^{p-i-j}10^{p}1$. Observe that $xy^{2}z \not\in F$.
### Example 4
>The set $P$ of palindromes over $\{ 0,1 \}$ is not regular.

Take the word $0^{p}10^{p}$ where $p$ is the pumping length of $P$.
### Example 5
>The unary language $S=\{ 1^{n^{2}}|n \in \mathbb{N} \}$ is not regular.

Take the word $1^{p^{2}}$ where $p$ is the pumping length of $S$. Now, $x=1^{i},y=1^{j},z=1^{p^{2}-i-j}$. Observe that $i+j\leq p$ and so $j\leq p$. Consider $xy^{2}z$. $|xy^{2}z|=p^{2}+j$, but $p^{2}<p^{2}+j<(p+1)^{2}$ as $0<j\leq p$: therefore, $p^{2}+j$ cannot be a perfect square.
### Example 6
>The language $E=\{ 0^{i}1^{j}|i>j\geq 0 \}$ is not regular.

Take $0^{p+1}1^{p}$ where $p$ is the pumping length of $E$. We have $x=0^{i},y=0^{j},z=0^{p+1-i-j}1^{p}$ where $j>0$. Consider $xy^{0}z=xz=0^{p+1-j}1^{p}$. This contradicts $j\geq 1$ so $p+1-j\leq p$.
