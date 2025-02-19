#notes 

We want to concentrate on algorithms for clause-sets.
For general propositional formulae, we can convert them to CNF via an algorithm. The standard procedure for converting a formula $\phi$ to CNF $F_{CNF(\phi)}$ is as follows:
1) Express all connectives using $\wedge, \vee, ¬$.
2) Push $¬$ inside
3) Use [[Propositional Logic#De-Morgan's Laws]] to convert this into CNF.
This is costly however:
+ For $n>0$, let $\psi_{n}$ be the formula:$$(x_{1}\wedge y_{1})\vee\dots \vee(x_{n}\wedge y_{n})$$
+ It turns out that $F_{CNF(\psi_{n})}$ is huge: $2^{n}$ clauses!

>For every $n>1$ there exists a propositional formula of length $2n$ for which any logically equivalent clause-set contains at least $2^{n}$ clauses.
## Tseitin's Fast Transformation
In 1968, Tseitin devised a faster method. The idea is that transformation does not need to preserve logical equivalence, only equivalence with respect to satisfiability. This is called **equisatisfiability**; ==2 propositional formulae/clause-sets are equisatisfiable if both are satisfiable/unsatisfiable==.
We may introduce new variables - extension variables.
### Algorithm
+ **Input** - a propositional formula $\psi$; assume that double negations are eliminated. Initially, put $F=\emptyset$.
	+ While $\psi$ has a sub-formula $l \circ m$ where $\circ$ is any binary logical connective and $l,m$ are literals:
		+ Replace in $\psi$ the sub-formula $l \circ m$ with a new variable $x_{l \circ m}$;
		+ Extend the clause-set: $F \cup F_{l \circ m}$ and use this as a new $F$, where $F_{l \circ m}$ is a clause-set logically equivalent to the propositional formula $x_{l \circ m} \leftrightarrow (l \circ m)$.
	+ Now $\psi$ is a single literal $l$. Add the unit clause $\{ l \}$ to $F$ and halt.
+ **Output** - clause-set $F$.
Note that we can stop as soon as $\psi$ is in CNF and add the clauses of $F_{\psi}$ to $F$.
#### Defining $F_{l \wedge m}$
The clause-set $F_{l \wedge m}$ needs to be logically equivalent to the formula $x \equiv l \wedge m$.
We derive $F_{l\wedge m}$ using the slow method:
$$
\eqalign{
1.& x \equiv l \wedge m \\
2.& [x \to (l\wedge m)]\wedge[(l \wedge m)\to x] \\
3.& [¬x \vee(l \wedge m)]\wedge[¬(l\wedge m)\vee x] \\
4.& [(¬x \vee l)\wedge(¬x \vee m)]\wedge[(¬l \vee ¬m)\vee x] \\
5.& (¬x \vee l) \wedge (¬x \vee m) \wedge (¬l \vee ¬m \vee x)
}
$$
So $F_{l\wedge m}=\{ \{ \bar{x},l \},\{ \bar{x},m \},\{ \bar{l},\bar{m},x \} \}$.
## Examples
### Example 1
Input: $\psi=¬(x \implies(y \implies x))$
+ $\psi=¬(x \implies(y \implies x)),F=\emptyset$
+ $\psi=¬(x \implies u),F=\{ \{ y,u \}\{ \bar{x},u \},\{ \bar{y},x,\bar{u} \} \}$
+ $\psi=¬v,F=\{ \{ y,u \},\{ \bar{x},u \},\{ \bar{y},x,\bar{u} \},\{ x,v \},\{ \bar{u},v \},\{ \bar{x},u,\bar{v} \} \}$
Output: $F=\{ \{ y,u \},\{ \bar{x},u \},\{ \bar{y},x,\bar{u} \},\{ x,v \},\{ \bar{u},v \},\{ \bar{x},u,\bar{v} \},\{ \bar{v} \} \}$
### Example 2
$\psi_{n}=(x_{1}\wedge y_{1})\vee\dots \vee(x_{n}y_{n}),F=\emptyset$
$x_{x_{1}\wedge y_{1}}\vee(x_{2}\wedge y_{2})\vee\dots \vee(x_{n}\wedge y_{n}),F=F_{x_{n}\wedge y_{n}}$
$x_{x_{1}\wedge y_{1}}\vee x_{x_{2}\wedge y_{2}}\vee(x_{3}\wedge y_{3})\vee\dots \vee(x_{n}\wedge y_{n}),F=F_{x_{1}\wedge y_{1}}\cup F_{x_{2}\wedge y_{2}}$
$\dots$
$x_{x_{1}\wedge y_{1}}\vee x_{x_{2}\wedge y_{2}}\vee\dots \vee x_{x_{n}\wedge y_{n}},F=F_{x_{1}\wedge y_{1}}\cup\dots \cup F_{x_{n}\wedge y_{n}}$
$F=\{ \{ x_{x_{1}\wedge y_{1}},\dots,x_{x_{n}\wedge y_{n}} \} \}\cup F_{x_{1}\wedge y_{1}}\cup\dots \cup F_{x_{n}\wedge y_{n}}$
## Results
Let $\psi$ be a propositional formula and $T(\psi)$ the clause-set obtained using the fast-transformation.
+ $\psi,T(\psi)$ are equisatisfiable.
+ $\psi$ is a tautology if and only if $T(¬\psi)$ is unsatisfiable.
+ Let $n$ be the number of occurrences of binary connectives in $\psi$. Then, $T(\psi)$ contains at most $4n+1$ clauses, with each clause containing at most 3 literals. And so, $|T(\psi)|=O(n)$; this means the number of clauses in $T(\psi)$ is linear in the number $n$ of occurrences of binary connectives in $\psi$.
+ Note that $\psi,T(\psi)$ are equisatisfiable but *not* logically equivalent.
## A Search Algorithm
```
fn A
in F
op "sat" or "unsat"
	if var(F) = emptyset then
		if F = emptyset then
			exit(sat)
		else
			exit(unsat)
		endif
	else
		choose x in var(F) // x is the branching variable
		if A(F[x = 0]) = sat then
			exit(sat)
		else if A(F[x = 1]) = sat then
			exit(sat)
		else
			exit(unsat)
		endif
	endif
```
