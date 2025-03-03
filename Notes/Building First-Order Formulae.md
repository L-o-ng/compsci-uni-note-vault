#notes 

Given some atomic formulae, we can build more complicated formulae from these atomic formulae by using the usual connectives of propositional logic, namely $¬,\wedge,\vee,\implies,\iff$.
For example: 
$$
E(x_{1},x_{2})\vee(T(x_{1},x_{1},x_{3})\implies¬E(x_{2},x_{3}))
$$
is a formula of first-order logic, where $E$ is a predicate symbol of arity 2, $T$ is a predicate symbol of arity 3, and $x_{1},x_{2},x_{3}$ are variables.

In order to interpret this formula, we need a binary relation for $E$, a ternary relation for $T$, and values for $x_{1},x_{2},x_{3}$. The domains of the relations for $E,T$ must be the same.
## Equalities
Not only do we allow formulae like $P(x_{1},x_{2},\dots ,x_{r})$ as atomic formulae, but we are also allowed formulae of the form $x=y$, where $x,y$ are variables.
The semantics of $x=y$ is that this atomic formula is true only if the value of $x$ is equal to the value of $y$.

For example:
>Let $E$ be a binary predicate symbol. Consider the formula $(E(x,y)\wedge E(y,z))\implies¬(x=z)$.
>If $E$ is interpreted as $E=\{ (x,y)\in \Bbb{N}^{2}:x<y \},x=5,y=7,z=11$ we can say that this formula is *true*.
>Note that $¬(x=y)$ can be abbreviated as $(x \neq y)$ in some cases.

Formulae built from atomic formulae are called quantifier-free formula and the free variables are those variables appearing in a formula.
## Quantifiers
Given any formula with *free* variables, we can now **quantify** over these variables using the universal quantifier $\forall$, or **for-all**; and the existential quantifier $\exists$, or **exists**.
Suppose that $\phi(x)$ is a quantifier-free formula with one free variable $x$. Then $\forall x\phi(x)$ is a formula of first-order logic and has no free variables. The variable $x$ is a **bound** variable in $\forall x\phi(x)$.

For example:
>Suppose that $Q$ is a unary relation symbol. Consider the formula $\forall xQ(x)$.
>If we interpret $Q$ as the relation $Q=\{ u \in \Bbb{N} : u\text{ is even}\}$, then it is *false*.
>If we interpret $Q$ as the relation $Q=\{ u \in \Bbb{N} : u\text{ is a square root}\}$, then it is *true*.

