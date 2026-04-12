#notes 

For any function $f$, we say that the **time complexity** of a decidable language is $\cal L$ is $O(f)$, or $\cal L$ is decidable in $O(f)$ time, if there exists a [[The Turing Machine|TM]] $T$ which decides $\cal L$ and constants $n_{0}$ and $c$ such that for all inputs $x$ with $|x|>n_{0}$: 
$$
\text{Time}_{T}(x)\leq c\cdot f(|x|)
$$

We can now divide up decidable languages into classes, according to time complexity.

The class $\text{TIME}[f]$ is defined to be the class of all **problems** for which there *exists* an **algorithm** with time complexity in $O(f)$. It is sometimes called $\text{DTIME}[f]$ for *deterministic* time.
## The Complexity Class P
$$
\mathbf{P}=\bigcup_{k\geq 0}\text{TIME}[n^{k}]
$$
$\mathbf{P}$ contains all classes $\text{TIME}[t(n)]$ where $t(n)$ is a polynomial of finite degree.
It is a reasonable mathematical model of the class of problems which are **tractable** or *solvable* in practice. This correspondence is not exact: sometimes the polynomial can have too great a degree/constant to be tractable for high size.
## P on different systems
$\mathbf{P}$ is **robust**: it does not depend on the exact details of the computational model or encoding. We do not need to specify these.
### Models of Computation
>[!theorem] We can simulate $t$ steps of a $k$-tape TM with an equivalent one-tape TM in $O(t^{2})$ steps.

>[!theorem] We can simulate $t$ steps of a two-way infinite $k$-tape machine with an equivalent $k$-tape TM in $O(t)$ steps.

Hence, the class $\mathbf{P}$ is the **same** for these and indeed other models of computation.
### Encodings
>[!theorem] For any number $n$, the length of the encoding of $n$ in base $b_{1}$ and the length of the encoding of $n$ in base $b_{2}$ are related by a constant factor ($b_{1},b_{2}>2$).

>[!theorem] For any graph $G$, the length of the encoding of $G$ as an adjacency matrix and the length of the encoding of $G$ as a list of edges are both related by a polynomial factor to the number of vertices.

Hence, the class $\mathbf{P}$ is the **same** for these and many other encodings.
## Proving a Problem is in P
### Trivially
The most direct way to show that a problem is in $\mathbf{P}$ is to give a polynomial-time algorithm which solves it. Even a naive implementation often provides a good insight into how it can be solved efficiently.
### Reduction
Another way to show that a problem is in $\mathbf{P}$ is to use a reduction. Informally, a problem $P$ is reducible to a problem $Q$ if we can somehow use methods that solve $Q$ to solve $P$.
See [[Polynomial Time Reducibility]]
### Example
#### CNF
See [[Conjunctive Normal Form]] - in particular, the disjunction of literals.

If $f$ has at most $k$ literals per clause then it is in $k$-CNF. For example:
$$
(x_{1}\lor x_{2}\lor \neg x_{5})\land(\neg x_{2}\lor \neg x_{4}\lor \neg x_{5})\land(x_{2}\lor x_{3}\lor x_{4})
$$
is in 3-CNF.
#### Satisfiability
See [[Satisfiability of Formulae and Clause-Sets]]

$f$ is **satisfiable** if there exists an assignment that makes $f$ `true`. $f$ is `true` if and only if all the clauses are `true`. A clause is `true` if and only if at least one literal is `true`.
#### $k$-Colourability
Let $G=(V,E)$ be a graph, with vertices $V$ and edges $E$. A function $f:V \to \{ 1,\dots,n \}$ is a proper colouring if adjacent vertices are assigned different values.
#### Problems
> [!question] $k$-Satisfiability
> **Instance**: $k$-CNF formula *f*
> **Question**: Is *f* satisfiable?

>[!question] $k$-colourability
>**Instance**: A graph $G$
>**Question**: Is there a colouring of $G$ using at most $k$ colours?
#### Analysis
We can [[Polynomial Time Reducibility|reduce]] 2-colourability to 2-satisfiability:
1. For each vertex $v_{i}$ of the graph we create a variable $x_{i}$;
2. For each edge $(v_{i},v_{j})$ we add two clauses $(x_{i}\lor x_{j})$ and $(\neg x_{i}\lor \neg x_{j})$.

This translation of a 2-colourability problem to a 2-satisfiability problem is computable in polynomial time. Now we check it satisfies the reducibility condition:
+ $\Rightarrow$ : If the graph is 2-colourable, we use 2-colouring to assign truth values to variables;
+ $\Leftarrow$ : If the formula is satisfiable, we define 2-colouring by setting `true` variables to colour 1 and `false` to colour 2. If two adjacent vertices get the same colour then one of the associated clauses is not satisfied - a contradiction. Thus, we have a proper 2-colouring.
## An Aside
Some problems have been shown to be in $\mathbf{P}$ by non-constructive arguments - ie, by proving a polynomial time algorithm **must** exist.
In such cases, we might not even know *how* to construct an exponential algorithm!