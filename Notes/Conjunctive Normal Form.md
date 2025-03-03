#notes 

See [[Functional Completeness]].

Let $\upvarphi$ be a propositional formula involving the variables $p_{1}, p_{2}, \dots,p_{n}$.
Now build up the truth table for $\upvarphi$ and let $f$ be some truth assignment (row) that evaluates to *true*:

| $p_1$   | $p_2$   | $\dots$ | $p_n$   | $\upvarphi$ |
| ----- | ----- | ----- | ----- | --------- |
| $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$     |
| $T$     | $F$     | $\dots$ | $F$     | $T$         |
| $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$     |
Suppose that in this truth assignment $f$ that each $p_{i}$ has the truth value $v_{i}$: we can build a conjunction $\chi_{f}$ of literals as follows:
+ For each $i$:
	+ If $v_{i}$ is *true* then include the literal $p_{i}$ in $\chi_{f}$;
	+ If $v_{i}$ is *false* then include the literal $¬p_{i}$ in $\chi_{f}$.

Now, let $\Uppsi$ be the *disjunction* of all the conjunctions $\chi_{f}$.
We now claim that $\upvarphi,\Uppsi$ are logically equivalent.
+ A key point is that the *only* truth assignment making the conjunction $\chi_{f}$ *true* is the truth assignment $f$ itself.
+ Hence, $f$ makes $\Uppsi$ true.
Conversely:
+ Suppose that $g$ is some truth assignment making $\Uppsi$ true. So, at east one conjunct $\chi_{f}$ is made *true* by $g$.
+ However, the only truth assignment making $\chi_{f}$ true is $f$. 
+ So, $f=g$.
+ $\chi_{f}$ appears as a conjunct since $f$ makes $\upvarphi$ true. So, $g=f$ is a truth assignment making $\upvarphi$ true.
Consequently, for any truth assignment $f$:
+ $f$ satisfies $\upvarphi$ if and only if $f$ satisfies $\Uppsi$.
+ That is, $\upvarphi \equiv \Uppsi$.

>Every formula of propositional logic is equivalent to a formula in disjunctive normal form: a disjunction of conjunctions of literals.
>Also, every truth table is the truth table of some propositional formula.

Now let $\upvarphi$ be some formula of propositional logic. The formula $¬\upvarphi$ is equivalent to one in DNF.
So, $\upvarphi$ is equivalent to the formula $¬(\chi_{1}\vee \chi_{2}\vee\dots \vee \chi_{n})$, which by the [[Propositional Logic#Generalised De-Morgan's Laws]], is equivalent to $¬\chi_{1}\wedge¬\chi_{2}\wedge\dots \wedge¬\chi_{n}$.
Each $¬\chi_{i}$ is equivalent to a disjunction of literals by the same process.
Therefore:
>Every formula of propositional logic is logically equivalent to a conjunction of disjunction of literals; a conjunction of clauses, in other words.
>That is, a formula in conjunctive normal form.
## Application
See [[SAT-Solving]].
