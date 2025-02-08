#notes 

**Natural Deduction** consists of a collection of valid rules of inference and is used to obtain proofs of sequents of the form:
$$
\upvarphi_{1},\upvarphi_{2},\dots,\upvarphi_{n}\vdash \Uppsi
$$
We assume we are given $\upvarphi_{1},\upvarphi_{2},\dots,\upvarphi_{n}$ as **premises**. We apply our [[Proof Systems on Propositional Logic#Well-Known Rules|rules of inference]] to obtain $\Uppsi$.
## Facts
+ Natural Deduction is **sound** and **complete**.
+ A **theorem** is a formula $\Uppsi$ for which the sequent $\vdash \Uppsi$ is provable.
	+ Per point 1, every theorem is a tautology and vice versa.
## Rules in Natural Deduction
See [[Proof Systems on Propositional Logic#Well-Known Rules]]
### Conjunction
#### $\wedge$-introduction
$$
\frac{\upvarphi_{1}\quad \upvarphi_{2}}{\upvarphi_{1} \wedge \upvarphi_{2}}\quad\wedge i
$$
#### $\wedge$-elimination
$$
\frac{\upvarphi_{1}\wedge \upvarphi_{2}}{\upvarphi_{1}}\quad \wedge e1
$$
$$
\frac{\upvarphi_{1}\wedge \upvarphi_{2}}{\upvarphi_{2}}\quad \wedge e 2
$$
### Double-Negation
#### ¬¬-introduction
$$
\frac{\upvarphi}{¬¬\upvarphi}\quad ¬¬i
$$
#### ¬¬-elimination
$$
\frac{¬¬\upvarphi}{\upvarphi}\quad ¬¬e
$$
### Implication
#### $\implies$-elimination
$$
\frac{\upvarphi_{1} \quad \upvarphi_{1} \implies \upvarphi_{2}}{\upvarphi_{2}}\quad \implies e
$$
#### $\implies$-introduction
$$
\frac{\boxed{\array{\upvarphi_{1}\\\dots \\ \upvarphi_{2}}}}{\upvarphi_{1} \implies \upvarphi_{2}}\quad \implies i
$$
### Disjunction
#### $\vee$-introduction
$$
\frac{\upvarphi}{\upvarphi\vee \Uppsi}\quad \vee i 1
$$
$$
\frac{\upvarphi}{\Uppsi \vee \upvarphi}\quad \vee i 2
$$
Note that usually just $\vee i$ is written.
#### $\vee$-elimination
$$
\frac{\upvarphi \vee \Uppsi \quad \boxed{\array{\upvarphi \\ \dots \\ \chi}} \quad \boxed{\array{ \Uppsi \\ \dots \\ \chi}}}{\chi}\quad \vee e
$$
### Negation
#### $\perp$-elimination
$$
\frac{\perp}{\upvarphi}\quad\perp e
$$
The symbol $\perp$, known as a *bottom*, represents a contradiction. If you obtain a contradiction then you can infer *any* formula.
#### ¬-elimination
$$
\frac{\upvarphi \quad ¬\upvarphi}{\perp}\quad ¬e
$$
#### ¬-introduction
$$
\frac{\boxed{\array{\upvarphi \\ \dots \\ \perp}}}{¬\upvarphi}\quad¬i
$$

### Derived Rules
#### Reductio Ad Absurdum (RAA)
>If from $¬\upvarphi$ I can prove $\perp$, then I can deduce $\upvarphi$.
#### Law of the Excluded Middle (LEM)
>Either $\upvarphi$ is true or $¬\upvarphi$ is true.
## Examples
### Example 1 - Basic
Here we prove the sequent $p,¬¬(q\wedge r)\vdash¬¬p\wedge r$:
$$
\begin{array}{c|c}
p & \text{premise} \\
¬¬(q\wedge r) & \text{premise} \\
¬¬p & ¬¬i 1 \\
q \wedge r & ¬¬e 2 \\
r & \wedge e 2 4 \\
¬¬p \wedge r & \wedge i 3 5
\end{array}
$$
The validity of the rules means that if $p,¬¬(q\wedge r)$ are *true* under some truth assignment, then $¬¬p \wedge r$ is necessarily true under this truth assignment.
### Example 2 - Boxes
Here we prove the sequent $p \implies q, q \implies r \vdash p \implies r$:
$$
\begin{array}{c|c}
p \implies q & \text{premise} \\
q \implies r & \text{premise} \\
\boxed{\array{
p \\
q  \\
r
}} & \array{\text{assumption}\\ \implies e 1 3 \\ \implies e 2 4} \\
p \implies r  &  \implies i 3-5
\end{array}
$$
Proofs can involve more than one box and nested boxes, but boxes *cannot* overlap.
### Example 3 - More Than 1 Box 
Here we prove the sequent $(p \wedge q)\implies r \vdash p \implies (q \implies r)$:
$$
\begin{array}{c|c}
(p \wedge q)\implies r & \text{premise} \\
\boxed{\array{
p  \\
\boxed{\array{
q  \\
p \wedge q  \\
r 
}} \\
q \implies r
}} & \array{\text{assumption}\\ \text{assumption} \\ \wedge i 2 3 \\ \implies e 1 4 \\ \implies i 3 - 5} \\
p \implies (q \implies r) & \implies i 2-6
\end{array}
$$

todo! add all the examples :(
