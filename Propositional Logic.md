#notes 

Propositional Logic is the most fundamental logic. It lies at the heart  of many other logics.
It formalises day-to-day, common sense reasoning.

It is comprised of **propositions** - declarative sentences that can be either *true* or *false*.
They are represented by **propositional variables**, usually letters such as $x, Y, a$, or subscripted letters, like $x_{2}, Y_{0}, a_{1}$. They can take a value $T$ - true; or $F$ - false.
## Syntax
New propositions called *formulae*, *boolean formulae*, *propositional formulae*, or *compound propositions* are formed from propositional variables and formulae by use of logical operators.
$$
\eqalign{
\wedge & \text{- conjunction (and)} \\
\vee & \text{- disjunction (or)} \\
¬ & \text{- negation (not)} \\
\Rightarrow & \text{- implies} \\
\Leftrightarrow & \text{- if and only if (iff)}
}
$$
## Formulae
### Construction
The above operators take two propositional formulae $\upvarphi, \Uppsi$, and yield a new one:
$$
\array{
\upvarphi \wedge \Uppsi \\
\upvarphi \vee \Uppsi \\
\upvarphi \Rightarrow \Uppsi \\
\upvarphi \Leftrightarrow \Uppsi 
}
$$
The operator $¬$ takes one propositional formula $\upvarphi$ and yields a new one: 
$$
¬\upvarphi
$$
### Parentheses
$(\upvarphi \wedge \Uppsi) \vee \chi$ means to first build $\upvarphi \wedge \Uppsi$, then to build $(\upvarphi \wedge \Uppsi) \vee \chi$.
$\upvarphi \wedge (\Uppsi \vee \chi)$ means to first build $\Uppsi \vee \chi$, then to build $\upvarphi \wedge (\Uppsi \vee \chi)$.
### Examples
$$
\array{
¬((¬b \wedge a)\Rightarrow(c \vee ¬ d)) \\
((a \wedge ¬ a)\vee((b \vee c) \vee d))\Leftrightarrow d \\
(((a \Rightarrow b)\Rightarrow c)\Rightarrow d)
}
$$
## Semantics
All propositional variables take the value $T$ or $F$ - true or false.
The value of a formula under some truth assignment is ascertained by using the truth tables for the above logical connectives.
For our operators:

| $p$ | $q$ | $p \wedge q$ | $p \vee q$ | $¬p$ | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
| --- | --- | ------------ | ---------- | ---- | ----------------- | --------------------- |
| $T$ | $T$ | $T$          | $T$        | $F$  | $T$               | $T$                   |
| $T$ | $F$ | $F$          | $T$        | $F$  | $F$               | $F$                   |
| $F$ | $T$ | $F$          | $T$        | $T$  | $T$               | $F$                   |
| $F$ | $F$ | $F$          | $F$        | $T$  | $T$               | $T$                   |
To build the truth table of a formula, we decompose it into sub-formulae.
## Notation
If we have a propositional formula $\upvarphi(x_{1},x_{2},\dots,x_{n})$ then we call an assignment $f$ of either $T$ or $F$ to each $x_{1}, x_{2},\dots,x_{n}$, meaning the function:
$$
f:\{ x_{1},x_{2},\dots,x_{n} \}\to \{ T,F \}
$$
a **truth assignment**, or **interpretation**, or **valuation** for $\upvarphi$.

We sat that $\upvarphi$ evaluates to $T$ under $f$ if the row of the truth table for $\upvarphi$ corresponding to $f$ evaluates to $T$ and vice versa.

If $f$ evaluates $\upvarphi$ to $T$ then $f$ *satisfies* $\upvarphi$ or is a *satisfying truth assignment* of $\upvarphi$ or a **model** of $\upvarphi$.

If $\upvarphi$ evaluates to $T$ for every $f$ then $\upvarphi$ is a **tautology**.
If $\upvarphi$ evaluates to $F$ for every $f$ then $\upvarphi$ is a **contradiction**.

A *literal* is either a propositional variable or the negation of one.
## Logical Equivalence
We say that 2 propositional formulae are **logically equivalent** if they have identical *truth tables*. So, if $\upvarphi$ and $\uppsi$ are equivalent then we write $\upvarphi \equiv \Uppsi$
## De-Morgan's Laws
De-Morgan's laws are useful logical equivalences used for simplifying propositional formulae.
1) $¬(X \wedge Y) \equiv ¬X \vee ¬Y$
2) $¬(X \vee Y)\equiv¬X\wedge¬Y$
These laws can also be applied to formulae and sub-formulae as well as variables.
### Generalised De-Morgan's Laws
By pushing negations inside conjunctions/disjunctions of *more* than 2 literals/formulae, we can obtain generalisations of the laws:
1) $¬(X_{1}\vee X_{2}\vee\dots \vee X_{n})\equiv¬X_{1}\wedge¬X_{2}\wedge\dots \wedge¬X_{n}$
2) $¬(X_{1}\wedge X_{2}\wedge\dots \wedge X_{n})\equiv¬X_{1}\vee¬X_{2}\vee\dots \vee¬X_{n}$
## Distribution Laws
The distribution laws allow us to simplify formulae with respect to combinations of conjunctions and disjunctions.
+ **Distributive Law of Disjunction over Conjunction**: $$p\vee(q\wedge r)\equiv(p\vee q)\wedge(p\vee r)$$
+ **Distributive Law of Conjunction over Disjunction**:$$p\wedge(q\vee r)\equiv(p\wedge q)\vee(p\wedge r)$$
### Generalised Distributive Laws
+ $X\wedge(Y_{1}\vee Y_{2}\vee\dots \vee Y_{n})\equiv(X\wedge Y_{1})\vee(X\wedge Y_{2})\vee\dots \vee (X\wedge Y_{n})$
+ $X\vee(Y_{1}\wedge Y_{2}\wedge\dots \wedge Y_{n})\equiv(X\vee Y_{1})\wedge(X\vee Y_{2})\wedge\dots \wedge(X\vee Y_{n})$
+ 