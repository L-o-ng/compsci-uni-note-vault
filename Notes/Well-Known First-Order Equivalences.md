#notes 

See first [[First-Order Logical Equivalence]].

There are several well-known interactions between quantifiers and logical connectives.
## Negation Pushing
### Equivalence 1
Consider the formula $¬\forall x\phi$, where $\phi(x)$ is a first-order formula with free variable $x$. Let $I$ be some interpretation for $¬\forall x\phi$. We have that:
+ $I \vDash¬\forall x\phi$:
	+ If and only if it is not the case that $I \vDash\forall x\phi$;
	+ If and only if it is not the case that for every value $u$ in the domain of $I$, we have that $\phi(u)$ holds in $I$;
	+ If and only if there exists some value $u$ in the domain of $I$ such that $¬\phi(u)$ holds in $I$;
	+ If and only if $I \vDash\exists x¬\phi$;
So, for **every** first-order formula $\phi(x)$, 
$$
\boxed{¬\forall x\phi \equiv \exists x¬\phi}
$$
### Equivalence 2
Consider the formula $¬\exists x\phi$.
Let $I$ be some interpretation for $¬\exists x\phi$. We have that:
+ $I \vDash¬\exists x\phi$:
	+ If and only if it is not the case that $I \vDash\exists x\phi$;
	+ If and only if it is not the case that for every value $u$ in the domain of $I$, we have that $\phi(u)$ holds in $I$;
	+ If and only if there exists some value $u$ in the domain of $I$ such that $¬\phi(u)$ holds in $I$;
	+ If and only if $I \vDash\forall x¬\phi$;
So, for **every** first-order formula $\phi(x)$:
$$
\boxed{¬\exists x\phi \equiv \forall x¬\phi}
$$
### General Rule
>Negations can be *pushed through* universal quantifiers if we change the universal quantifier to an existential quantifier.

>Negations can be *pushed through* existential quantifiers if we change the existential quantifier to a universal quantifier.
#### Example
Consider the formula $¬\exists x\forall y(¬E(x,y)\vee M(y,y,z,x))$. We have:
$$
\eqalign{
& ¬\exists x\forall y(¬E(x,y)\vee M(y,y,z,x)) \\
\equiv&\forall x¬\forall y(¬E(x,y)\vee M(y,y,z,x)) \\
\equiv&\forall x\exists y¬(¬E(x,y)\vee M(y,y,z,x))
}
$$
## Quantifier Pulling
Consider $\forall x\phi \wedge \exists y\psi$, where $\phi(x)$ and $\psi(y)$ are first-order formulae with free variables $x,y$ respectively. By renaming bound variables (if necessary), we may assume that $x$ does not appear in $\psi$ and $y$ does not appear in $\phi$.
Let $I$ be some interpretation for $\forall x\phi \wedge \exists y\psi$; we have $I \vDash \forall x\phi \wedge \exists y\psi \iff I \vDash\forall x\phi,\space I \vDash\exists y\psi$:
+ $I \vDash\forall x\phi$ if and only if no matter which value from the domain of $I$ we give to the variable $x$, we have that $\phi(x)$ holds in $I$.
+ $I \vDash\exists y\psi$ if and only if there exists some value from the domain of $I$ for the variable $y$ such that $\psi(y)$ holds in $I$.
Thus, 
>$I \vDash\forall x\phi \wedge \exists y\psi$ if and only if no matter which value we give to $x$, we have that $\phi(x)$ holds in $I$ and there exists some value for $y$ such that $\psi(y)$ holds in $I$.

Consider now $\forall x \exists y(\phi \wedge \psi)$. Suppose that $I \vDash\forall x\exists y(\phi \wedge \psi)$. Choose *any* $u$ for $x$. There exists a $v$ for $y$ such that $\phi(u)\wedge \psi(v)$ holds.
So, $I \vDash\forall x\phi \wedge \exists y\psi$. Hence, $\forall x\phi \wedge \exists y\psi \equiv \forall x\exists y(\phi \wedge \psi)$. Indeed, by the same token, $I \vDash\forall x\phi \wedge \exists y\psi \iff I \vDash\exists y\forall x(\phi \wedge \psi)$.
### General Rule
>Quantifications can be *pulled out* from inside logical connectives and the order of the quantifiers does not matter, so long as the names of the quantified variables are not used elsewhere.
#### Examples
##### Example 1
If we assume:
+ $x$ does not appear in $\psi,\chi$;
+ $y$ does not appear in $\phi,\chi$;
+ $z$ does not appear in $\phi,\psi$;
then applying this general rule yields:
$$
\eqalign{
&(\forall x\phi \wedge \exists y\psi)\vee \forall z\chi \\
\equiv& \forall x\exists y(\phi \wedge \psi)\vee \forall z\chi \\
\equiv& \forall x\exists y\forall z((\phi \wedge \psi)\vee \chi)
}
$$
##### Example 2
Consider the formula $(\forall x\phi \vee \forall x\psi)\wedge \exists x\chi$.
assuming $y,z$ do not appear in $\psi,\chi$ respectively, we can rename two of the bound occurrences of $x$ to get:
$$
(\forall x\phi(x)\vee \forall y\psi(y))\wedge \exists z\chi(z)
$$
Now we obtain the equivalent formula:
$$
\eqalign{
&(\forall x\phi(x)\vee \forall y\psi(y))\wedge \exists z\chi(z) \\
\equiv& \forall x\forall y(\phi(x)\vee \psi(y))\wedge \exists z\chi(z) \\
\equiv& \forall x\forall y\exists z(\phi(x)\vee\psi(y)\wedge \chi(z))
}
$$
## General Rule Application
Great care has to be taken when manipulating quantifiers:
+ The **order** of quantification matters;
+ You need to consider other occurrences of a quantified variable **outside the scope**.
### Example
Consider the first-order sentence $\forall x\exists yE(x,y)$.
Let $I$ be the interpretation with domain $\{ 1,2,3,4 \}$ where $E=\{ (1,2),(2,3),(3,4),(4,1) \}$.
Clearly, $I \vDash\forall x\exists yE(x,y)$ but $I \not \vDash \exists x\forall yE(x,y)$. (💀)
Consider the first order sentence $\forall x\exists yE(x,y)\wedge \forall z¬E(z,z)$.
Whilst:
$$
\eqalign{
I&\vDash\forall x\exists yE(x,y)\wedge \forall z¬E(z,z) \\
I&\vDash\forall z\forall x\exists y(E(x,y)\wedge¬E(z,z)) \\
I &\vDash\forall x\forall z\exists y(E(x,y)\wedge¬E(z,z))
}
$$
it is not the case that $I \vDash\forall z\exists y\forall x(E(x,y)\wedge¬E(z,z))$.
### Bound Occurrences
Consider the first-order formula $\forall x\exists yE(x,y)\wedge \exists xU(x)$.
It does not make sense to pull the quantifiers out, as we would get $\forall x\exists y\exists x(E(x,y)\wedge U(x))$. This is semantically logically equivalent to $\exists y\exists x(E(x,y)\wedge U(x))$, as the existentially quantified $x$ *overwrites* the universally quantified $x$ which is not equivalent to the sentence we started with. We can see this is the case when we consider an interpretation where:
+ $D=\{ 1,2 \}$;
+ $E=\{ (1,2) \}$
+ $U=\{ 1 \}$.
We need to ensure that the two original bound occurrences of $x$ have nothing to do with each other. In order to ensure this, we rename one of them:
$$
\eqalign{
&\forall x\exists yE(x,y)\wedge \exists xU(x) \\
\equiv& \forall x\exists yE(x,y)\wedge \exists zU(z) \\
\equiv& \forall x\exists y\exists z(E(x,y)\wedge U(z))
}
$$
