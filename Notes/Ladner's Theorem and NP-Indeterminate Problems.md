#notes 

>[!theorem] Ladner's Theorem
>If $P\neq NP$ then $NP$ contains **infinitely** many polynomial-time **inequivalent** problems.

This implies that unless $P=NP$, the class [[NP]] contains problems that are neither in $P$ nor $NP$-complete. Such problems are called **NP-Indeterminate**.
## $NP$-Indeterminate Problems
In a 1979 textbook, Garey and Johnson highlighted three $NP$ problems with undecided time-complexity, and so were possible $NP$-indeterminate candidates:
### Linear Programming
>[!question] Linear Programming (LP)
>**Instance**: Integer Vectors $V_{i}=(v_{1}^{i},\dots,v_{n}^{i}),1\leq i\leq m$, $D=(d_{1},\dots,d_{n})$, $C=(c_{1},\dots,c_{n})$ and an integer $B$;
>**Question**: Is there a rational vector $X=(x_{1},\dots,x_{n})$ such that $V_{i}\cdot X\leq d_{i}$ for all $1\leq i\leq m$ and such that $C \cdot X\geq B$?

Essentially, this is a problem of maximising a linear function subject to linear constraints. This has been proved to be in [[P]].
A similar problem `Integer Programming` where $X$ must be an **integer vector**, is $NP$-complete.
### Primes/Composite
>[!question] Composite
>**Instance**: Positive integer $K$;
>**Question**: Is $K$ composite?

`Primes` is the problem of deciding whether $K$ is prime. This was known to be in $NP \cap coNP$ (see [[coNP]]), before being proved to be in $P$ in 2002.
### Graph Isomorphism
>[!question] Graph Isomorphism
>**Instance**: Two undirected [[Graph Theory|Graphs]] $G=(V_{G},E_{G})$ and $H=(V_{H},E_{H})$;
>**Question**: Are $G$ and $H$ *isomorphic* - is there a **bijection** $f:V_{G}\to V_{H}$ such that $(u,v)\in E_{G}$ if and only if $(f(u),f(g))\in E_{H}$?

The status of this problem still remains largely unknown.
If it is $NP$-complete, then it would have a lot of surprising consequences, such as the collapse of the polynomial hierarchy.
It is the main candidate for $NP$-indeterminacy.
`Subgraph Isomorphism`, where $f$ is only required to be injective, is $NP$-complete.
