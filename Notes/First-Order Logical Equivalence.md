#notes 

Two formulae $\phi,\psi$ are **logically equivalent** if they are true for the same set of models. In this case, we write $\phi \equiv \psi$.
All logical equivalences from [[Propositional Logic]] give rise to equivalences in first-order logic; for example:
$$
\array{\text{As }p \implies q \equiv ¬p\vee q,\text{ for any propositional variables }p,q \\ \text{we must have that }\phi \implies \psi \equiv¬\phi \vee \psi\text{ for any first-order formulae }\phi,\psi}
$$

Note that we have to take care as to exactly what an interpretation is when we plug in formulae in this way; for example, if:
+ $\phi$ is over the signature consisting of the binary relation symbol $E$ and the constant symbol $C$;
+ $\psi$ is over the signature consisting of the binary relation symbol $E$ and the ternary relation operator $M$;
then an interpretation for $¬\phi \vee \psi$ is over the signature consisting of the symbols $E,C,M$.
## Tricks
### Renaming Variables
Consider some first-order formula of the form $\forall x\phi(x)$ where $y$ does not appear in $\phi(x)$.
If we replace every occurrence of the variable $x$ in $\phi$ with the variable $y$, we claim that $\forall x\phi(x)\equiv \forall y\phi(y)$:
+ Let $I$ be some interpretation for $\forall x\phi(x)$ in which $\forall x\phi(x)$ is true;
+ For every value $u$ in the domain of $I$, we have that $(I,x=u)\vDash\phi(x)$.
+ So, for every value $u$ in the domain of $I$, we have that $(I,y=u)\vDash\phi(y)$.
+ Hence, $I$ is an interpretation in which $\forall y\phi (y)$ is true.
Similarly, if $I$ is an interpretation in which $\forall y\phi(y)$ is true then $I$ is an interpretation in which $\forall x\phi(x)$ is true.
#### In General
If we ever have some formula $\phi$ in which there is a quantification, say $\forall x$, we can replace:
+ Every occurrence of $x$ in the scope of this quantification with the variable $y$;
+ The quantification $\forall x$ with $\forall y$.
so long as $y$ does not appear in $\phi$, without changing the semantics.

The same can be said of $\exists x\phi(x)$ and more generally, any formula containing a quantification $\exists x$.

However, consider the formula $\exists xE(x,y)$: if we simply replace $x$ with $y$ and $\exists x$ with $\exists y$, then we get $\exists yE(y,y)$ which is semantically very different from $\exists xE(x,y)$.
### Substitution
Consider some formula $\phi$ in which there is contained a sub-formula $\psi$.
Suppose further that $\psi$ has free variables $x_{1},x_{2},\dots ,x_{k}$.
If $\psi$ is logically equivalent to a formula $\chi(x_{1},x_{2},\dots,x_{k})$ then we can replace $\psi$ in $\phi$ with the formula $xhi$ and not change the semantics.
