#notes 

Recall [[Proof Systems on Propositional Logic#Resolution]].

We can generalise the rule of resolution:
$$
\frac{p_{1} \vee \dots \vee p_{i-1} \vee x \vee p_{i+1} \vee \dots \vee p_{m} \quad q_{1} \vee \dots \vee q_{i-1} \vee ¬x \vee q_{i+1} \vee \dots \vee q_{n}}{p_{1} \vee \dots \vee p_{i-1}\vee p_{i+1}\vee\dots \vee p_{m}\vee q_{1}\vee\dots \vee q_{i-1}\vee q_{i+1}\vee\dots \vee q_{n}}
$$
where $p,q$ are literals.
## As a Proof System
Resolution takes the negation of a formula we wish to prove true, and shows that the negation is unsatisfiable.
## Steps
In the proof system Resolution, we proceed as follows:
+ We are given a propositional formula $\upvarphi$;
+ We take $¬\upvarphi$ and write it in CNF as $C_{1}\wedge C_{2}\wedge\dots \wedge C_{m}$;
+ We start with the clauses $C_{1},C_{2},\dots,C_{m}$;
+ We continually apply the resolution rule of inference to infer *new* clauses.
	+ If we infer the empty clause $\emptyset$ then $\upvarphi$ is not a theorem.
	+ If we have not inferred $\emptyset$ and cannot infer new clauses then $\upvarphi$ is not a theorem.
When resolving, we can delete repeated literals in any clause.
Resolution is sound and complete.
## Examples
### Example 1
Let $\upvarphi$ be the formula $¬((p \vee q)\wedge(¬p\vee q)\wedge(p\vee¬q)\wedge(¬p\vee¬q))$. Is $\upvarphi$ a theorem?

In order to prove this via resolution, we negate $\upvarphi$ and put it into CNF.
This gives us $(p \vee q) \wedge(¬p\vee q)\wedge (p\vee¬q)\wedge(¬p\vee¬q)$.
We now apply resolution on $¬\upvarphi$ until:
+ Either we infer $\emptyset$ meaning $¬\upvarphi$ is a contradiction and hence $\upvarphi$ is a theorem;
+ Or we do not infer the empty clause but at some point we do not find any new clauses either, in which case we can find a truth assignment that makes $¬\upvarphi$ true and hence $\upvarphi$ false, meaning $\upvarphi$ is not a theorem.
### Example 2
Q: Use resolution to prove that if:
+ It is not raining or I have my umbrella;
+ I do not have my umbrella or I do not get wet;
+ It is raining or I do not get wet;
then I do not get wet.
A:
A formula $\upvarphi \implies \Uppsi$ is logically equivalent to $¬\upvarphi\vee \Uppsi$, so the negation of our formula is $\upvarphi\wedge¬\Uppsi$; that is, $(¬R\vee U)\wedge(¬U\vee¬W)\wedge(R\vee¬W)\wedge W$.
So we apply resolution on the clauses:
$$
¬R\vee U,\quad ¬U\vee¬W,\quad R\vee¬W,\quad W
$$
### Example 3
Q: Apply resolution to the following clauses:
$$
a\vee b\vee c \quad a\vee¬c\vee d \quad ¬a\vee e\vee f \quad c\vee¬e\vee f \quad c \vee ¬d \vee ¬f
$$
A:
Resolving $a$ gives us $b\vee c\vee e\vee f$ and $¬c\vee d\vee e\vee f$.
From now on we ignore the three clauses containing $a$.
Resolving $c$ on the following clauses:
$$
\begin{array} \\
c\vee¬e\vee f  \\
¬c\vee d\vee e\vee f  \\
c \vee ¬d \vee ¬f  \\
¬c \vee d \vee e \vee f  \\
b \vee c \vee e \vee f  \\
¬c \vee d \vee e \vee f
\end{array}
$$
gives us $¬e\vee f\vee d\vee e\vee f$, $¬d\vee¬f\vee d\vee e\vee f$, and $b \vee e\vee f\vee d\vee e\vee f$ with respect to each pair of expressions.
The clauses containing $e\vee¬e,f\vee¬f$ are tautologies and will not be useful anymore.
The remaining clause simplifies to $b\vee d\vee e\vee f$. We cannot resolve any further variables on this last remaining clause, and we can find a satisfying truth assignment for $b,d,e,f$, making $c$ true and $a$ either true or false. We can then find a satisfying truth assignment for the initial set of clauses.
This means the initial set is not a contradiction.