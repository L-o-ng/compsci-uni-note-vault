#notes 

Let $\psi,\phi$ be two propositional formulae. Then $\phi$ is a **logical consequence** of $\psi$, or $\psi$ *entails* $\phi$, denoted $\psi \vDash \phi$, if every truth assignment that satisfies $\psi$ also satisfies $\phi$.
Trivially, any formula is a consequent of an unsatisfiable formula.

>For any 2 propositional formulae $\psi,\phi$, we have $\psi \vDash\phi$ if and only if $\psi \wedge¬\phi$ is insatiable.

Similarly, $\psi_{1},\dots,\psi_{n}\vDash\phi$ if and only if $\psi_{1}\wedge\dots \wedge \psi_{n}\wedge¬\phi$ is unsatisfiable.

Thus, knowing how to check for entailment is the same as knowing how to check for insatiability.
## Syntax
+ **Literals** - variables $x,y,z,\dots$ and their negations $\bar{x},\bar{y},\bar{z},\dots$
+ **Clauses** - formulae of the form $l_{1}\vee\dots \vee l_{n}$ where each $l_{i}$ is a literal.
+ [[Conjunctive Normal Form]] - $C_{1}\wedge\dots \wedge C_{m}$ where each $C_{i}$ is a clause.
	+ **Fact** - each formula is equivalent to one in CNF.
+ **Clause Set** - a set of clauses. Each CNF can be thought of as a clause set.
## Example
$$\array{
F=\{ \{ u,\bar{v},\bar{y} \},\{ \bar{u},z \},\{ \bar{v},\bar{w} \},\{ w,\bar{x} \},\{ x,y,\bar{z} \} \} \\
\operatorname{var}(F)=\{ u,v,w,x,y,z \} \\
\text{Since }F\text{ is a set, we have:} \\
F=\{ \{ \bar{u},z \},\{ \bar{v},\bar{w} \},\{ u,\bar{v},\bar{y} \},\{ w,\bar{x} \},\{ \bar{u},z \},\{ x,y,\bar{z} \} \}
}$$
