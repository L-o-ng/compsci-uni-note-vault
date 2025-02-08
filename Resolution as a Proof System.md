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
