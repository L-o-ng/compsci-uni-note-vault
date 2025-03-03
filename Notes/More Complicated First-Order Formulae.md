#notes 

We can apply quantifiers to quantifier-free formula even when there is more than one free variable in the formula.
Let $\phi(x_{1},x_{2},\dots,x_{r})$ be a quantifier-free formula with free variables $x_{1},x_{2},\dots,x_{r}$. Then the following are two examples of formulae of first-order logic:
$$
\array{
\forall x_{1}\phi(x_{1},x_{2},\dots,x_{r}) \\
\exists x_{3}\phi(x_{1},x_{2},\dots,x_{r})
}
$$
The first has free variables $x_{2},x_{3},\dots,x_{r}$ and bound variable $x_{1}$.
The second has free variables $x_{1},x_{2},x_{4},\dots,x_{r}$ and bound variable $x_{3}$.

The interpretation of such formulae are as before except that free variables must be *supplied*.
## More complex examples
### Example 1
If $\phi(x)$ is the formula $\forall y(x=y\vee E(x,y))$, and $E=\{ (u,v)\in \Bbb{N}^{2}:u<v \}$, then:
$$
(E,x=0)\vDash \phi(x)
$$
but
$$
(E,x=v)\vDash¬\phi(x)\text{ whenever } v\neq 0
$$
### Example 2
If $\phi(x)$ is the formula $\exists yE(y,x)$ and $E=\{ (u,v)\in \Bbb{N}^{2}:u<v \}$ then we have:
$$
(E,x=0 \vDash ¬\phi(x)
$$
but
$$
(E,x=v)\vDash \phi(x)\text{ whenever }v \neq 0
$$
## Multiple Quantifiers
We can apply quantifiers to formulae already involving quantifiers.
Consider the formula $\forall y(x=y\vee E(x,y))$. There is one free variable and we can quantify over this free variable:
$$
\exists x \forall y(x=y\vee E(x,y))
$$
If we interpret the relation $E=\{ (u,v)\in \Bbb{N}^{2}:u<v \}$, for the relation above to be true, then we need that there exists some value $u \in \Bbb{N}$ for $x$ such that for any value $v \in \Bbb{N}$ for $y$ we have that $u=v\vee E(u,v)$; that is, either $u=v$ or $u<v$.
There clearly does exist such a value $u$, namely $u=0$. However, if $E=\{ (u,v)\in \Bbb{Z}^{2}:u<v \}$ then the formula is *false* as given any value for $x$, there is always some integer that is strictly less than this value for $x$.
## Propositional Connectives and Quantifiers
We can build new formulae using propositional connectives from existing formulae that involve quantifiers.
Consider the formulae:
$$
\array{
\exists x\forall y(x=y\vee E(x,y)) \\
\exists x\forall w(x=w)\vee(E(w,x))
}
$$
If we interpret E as $\{ (u,v)\in \Bbb{N}^{2}:u<v \}$ then the conjunction of the formulae is *false* as there is a minimum natural number, but no maximum. The formula can be made true if the domain of $E$ is a finite set of integers instead.