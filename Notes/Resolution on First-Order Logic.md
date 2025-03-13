#notes 

Resolution is not only a proof system for [[Propositional Logic]], but it is a sound and complete proof system for first-order logic too:
+ If $\Sigma$ is a set of first-order formulae and $\phi$ is a first-order formula such that for every interpretation $M,M \vDash \Sigma \implies M \vDash \phi$ then the proof system will answer "yes" - it satisfies **completeness**.
+ If the proof system answers "yes" on input ($\Sigma,\phi$) then for every interpretation $M,M \vDash \Sigma \implies M \vDash \phi$ - it satisfies **soundness**.

>We are given a set of first-order formulae $\Sigma$ and another first order formula $\phi$, and we want to know whether or not for every interpretation $M$, if $M$ satisfies each formula in $\Sigma$ then $M$ necessarily satisfies $\phi$; that is, we want to know whether the conjunction of the formulae in $\Sigma$, also denoted $\Sigma$, is such that $\Sigma \implies \phi$ is valid (holds in all interpretations).
## Process
1) Form the conjunction of all formulae in $\Sigma,¬\phi$.
2) Reduce the resulting formula to [[Prenex Normal Form]].
3) For any existentially-quantified variable $x_{i}$, replace each occurrence of $x_{i}$ in $\phi$ with the term $F_{i}(x_{j_{1}},x_{j_{2}},\dots,x_{j_{r}})$ where $x_{j_{1}},x_{j_{2}},\dots,x_{j_{r}}$ are the universally-quantified variables appearing in the list $x_{1},x_{2},\dots,x_{i-1}$ and $F_{i}$ is a new function symbol.
4) Delete the prefix of quantifiers $Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}$.
5) Reduce the remaining quantifier-free formula to conjunctive normal form and apply [[Resolution as a Proof System|Generalised Resolution]] to the resulting set of clauses.
6) If we resolve the empty clause then we answer "yes"; if we get to the point where we can resolve no more new clauses then we answer "no".
## Example
Suppose we have two clauses:
$$
A(F(x))\vee L(G(x),x),\quad ¬L(u,v)\vee¬K(u,v)
$$
We can *unify* the terms and variables $\{ u / G(x),v / x \}$; make these substitutions throughout the clauses; then resolve the two resulting clauses:
$$
A(F(x))\vee L(G(x),x),\quad ¬L(G(x),x)\vee¬K(G(x),x)
$$
This resolves to yield:
$$
A(F(x))\vee¬K(G(x),x)
$$
