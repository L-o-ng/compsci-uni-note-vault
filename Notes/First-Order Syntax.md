#notes 

## Commands
$$
\text{Click here for command definitions!}
\newcommand\free[1]{\operatorname{free}(#1)}
$$
---

Every well-formed formula of first-order logic is constructed from *atoms*, or *atomic formula*. We completely define the syntax of first-order logic by defining what we mean by atoms and constructions we are allowed to use.
## Semantics
An **interpretation**/**structure** for a first order formula $\phi$ is:
+ A domain of discourse $D$;
+ A value from $D$ for every free variable of $\phi$;
+ A relation over $D$ for every relation symbol involved in $\phi$;
+ A value from $D$ for every constant symbol involved in $\phi$.
The semantic of a first order formula in some interpretation is as follows:
+ We interpret atoms as propositional variables;
+ We interpret $\wedge,\vee,¬$ as in [[Propositional Logic]];
+ We interpret $\forall x\phi$ as true if $\phi$ is true for all values of $x$;
+ We interpret $\exists x\phi$ as true if there is at least one value for $x$ making $\phi$ true.
## Atoms
>If $P$ is a relation symbol of arity $r$ and $y_{1},\dots,y_{r}$ are (not necessarily distinct) variables or constant symbols, then $P(y_{1},\dots,y_{r})$ is an **atom** with free variables from $y_{1},\dots,y_{r}$ - this sequence can also contain constants and repeated items.
>If $C,D$ are constant symbols, and $x,y$ are variables then $C=D,C=x,x=y$ are all **atoms** with, respectively, sets of free variables $\emptyset,\quad\{ x \},\quad \{ x,y \}$.

The **signature** of the formula is its finite set of predicate (relation) and constant symbols.
## Constructions
>If $\phi,\psi$ are formulae, with free variables $\free{\phi},\free{\psi}$, then:
>$$\phi \vee \psi,\phi \wedge \psi,¬\phi$$
>are formulae with, respectively, free variables $\free{\phi}\cup\free{\psi},\free{\phi}\cup\free{\psi},\free{\phi}$.
>If $\phi$ is a formula with free variables $\free\phi$ then:
>$$\exists x(\phi),\forall x(\phi)$$
>are formulae, both with free variables $\free{\phi}\setminus \{ x \}$. The occurrence of $x$ in both formulae is a bound occurrence.

If a formula has no free variables then it is called a **sentence**.
## Parse Trees
We can check if a formula is well-formed using a parse tree.
We illustrate with:
$$
\forall x(\forall y(P(x,y)\iff¬Q(x,y)))\wedge \exists x(P(C,x)\wedge¬Q(x,C))
$$
![[Parse Tree Example First Order Syntax.png]]
## Illustrations
### Illustration 1
Consider the interpretation:
$$
\phi=\forall x(\forall y(P(x,y)\iff¬Q(x,y)))\wedge \exists x(P(C,x)\wedge¬Q(x,C))
$$
where:
+ The domain of discourse is the set of natural numbers $\Bbb{N}$;
+ The relation $P=\{ (u,v):u,v \in \Bbb{N},u \leq v \}$;
+ The relation $Q=\{ (u,v):u,v \in \Bbb{N},u > v\}$;
+ The constant $C=0 \in \Bbb{N}$.
So:
+ $(\Bbb{N},P,Q,0)\vDash\phi$ if and only if $(\Bbb{N},P,Q,0)\vDash\forall x(\forall y(P(x,y)\iff¬Q(x,y)))\wedge \exists x(P(C,x)\wedge¬Q(x,C))$.
+ If and only if for every $x,y \in \Bbb{N},x\leq y\iff x \not>y$, and there exists $x \in \Bbb{N}$ such that $0\leq x$, and $x \not> 0$.
Both conjuncts are true. Thus, $(\Bbb{N},P,Q,0)$ is a model of $\phi$: $(\Bbb{N},P,Q,0)\vDash\phi$.

Now consider the interpretation:
$$
\phi=\forall x(\forall y(P(x,y)\iff¬Q(x,y)))\wedge \exists x(P(C,x)\wedge¬Q(x,C))
$$
where:
+ The domain of discourse is the set of natural numbers $\Bbb{N}$;
+ The relation $P=\{ (u,v):u,v \in \Bbb{N},u < v \}$; 📌
+ The relation $Q=\{ (u,v):u,v \in \Bbb{N},u > v\}$;
+ The constant $C=0 \in \Bbb{N}$.
So:
+ $(\Bbb{N},P,Q,0)\vDash\phi$ if and only if $(\Bbb{N},P,Q,0)\vDash\forall x(\forall y(P(x,y)\iff¬Q(x,y)))\wedge \exists x(P(C,x)\wedge¬Q(x,C))$.
+ If and only if for every $x,y \in \Bbb{N},x\leq y\iff x \not>y$, and there exists $x \in \Bbb{N}$ such that $0\leq x$, and $x \not> 0$.
Now both conjuncts are false. Thus, $(\Bbb{N},P,Q,0)$ is a not model of $\phi$: $(\Bbb{N},P,Q,0)\vDash¬\phi$.
#### Subtleties
##### Subtlety 1
Consider a signature consisting of two binary relation symbols $P,Q$ and one constant symbol $C$. Let $\phi$ be defined as:
$$
\forall x(\forall y(P(x,y)\iff¬Q(x,y)))\wedge \exists z(P(z,x)\wedge¬Q(x,C))
$$
This is a perfectly legal formula of first-order logic, even though $x$ appears "differently" in the formula:
+ $x$ appears *bound* in the first conjunct;
+ $x$ appears *free* in the second.
Consequently, it is more precise to speak of **free occurrences** or **bound occurrences** of variables rather than just free/bound variables.
##### Subtlety 2
Consider the formula $\chi$ defined as:
$$
\forall x(\forall y(P(x,y)\iff¬Q(x,y))) \wedge \exists y(P(y,x)\wedge¬Q(x,y))
$$
and the interpretation $I$ for $\chi$ where:
+ The domain $D=\{ 1,2,3 \}$;
+ $P=\{ (1,3),(2,3),(3,1) \}$ and $Q=\{ (1,1),(1,2),(2,1),(2,2),(3,2),(3,3) \}$;
+ $x=3$.
Not only does $x$ appear both free and bound, but $y$ appears bound but within the scopes of two different quantifications.

We clearly have that $I \vDash\chi$ as:
+ For every $(x,y)\in D\times D,(x,y)\in P$ if and only if $(x,y)\not \in Q$;
+ There exists a $y \in D$ such that $(y,3)\in P$ and $(3,y)\not\in Q$: namely, $y=1$.
If we amend $I$ so that $x$ is interpreted as $x=2$, then we have instead that $I \vDash ¬\chi$.
### Illustration 2
Consider the well-formed formula $\phi$ defined as $\forall x\exists yP(x,y)$, and the interpretation of $\phi$ where:
+ The domain of discourse is the set $\Bbb{Z}$ of integers;
+ $P=\{ (u,v):u,v \in \Bbb{Z},u>v \}$.
So:
+ $(\mathbb{Z},P)\vDash\forall x\exists yP(x,y)$: 
	+ If and only if for every $x \in \mathbb{Z},(\mathbb{Z},P)\vDash\exists yP(x,y)$;
	+ If and only if for every $x \in \mathbb{Z}$ there exists $y \in \mathbb{Z}$ with $x>y$.
For any $x \in \mathbb{Z}$, if we take $y=x-1$ then this value of $y$ *witnesses* that $x>y$; hence: $(\mathbb{Z},P)\vDash\phi$.

If we instead restrict the domain to the natural numbers $\mathbb{N}$ and where $P=\{ (u,v):u,v \in \mathbb{N},u>v \}$; ie, we have the restriction of $(\mathbb{Z},P)$ to $\mathbb{N}$, then $(\mathbb{N},P)\vDash¬\phi$.
### Illustration 3
Consider the well-formed formula $\phi$ defined as $\exists y\forall xP(x,y)$, and the interpretation of $\phi$ where:
+ The domain of discourse is the set $\mathbb{Z}$ of integers;
+ $P=\{ (u,v):u,v \in \mathbb{Z},u>v \}$.
So:
+ $(\mathbb{Z},P)\vDash\exists y\forall xP(x,y)$:
	+ If and only if there exists $y \in \mathbb{Z}$ such that $(\mathbb{Z},P)\vDash\forall xP(x,y)$
	+ If and only if there exists $y \in \mathbb{Z}$ such that for all $x \in \mathbb{Z},x>y$
No matter which $y \in \mathbb{Z}$ we choose, putting $x=y-1$ results in $x \leq y$; hence: $(\mathbb{Z},P)\vDash¬\exists y\forall xP(x,y)$.

==Take care with the order of quantifiers!==
