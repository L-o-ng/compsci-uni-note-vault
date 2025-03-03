#notes 

We need a proof system that:
+ Allows us to prove all tautologies - **completeness**;
+ Ensures all proved theorems are tautologies - **soundness**.
A proof system defines the proofs of the system. It is a collection of **rules of inference**. These can be applied to infer new formulae from old.
## Rules of Inference
### Syntax
An **argument form** in propositional logic is a sequence of formulae:
$$
\upvarphi_{1},\upvarphi_{2},\dots,\upvarphi_{n},\Uppsi
$$
An argument form is **valid** if whenever a truth assignment $f$ is such that $\upvarphi_{1},\upvarphi_{2},\dots,\upvarphi_{n}$ evaluates to *true* under $f$; then, $\Uppsi$ necessarily evaluates to *true* under $f$.

An argument form can be written as a **sequent**:
$$
\upvarphi_{1},\upvarphi_{2},\dots,\upvarphi_{n}\vdash \Uppsi
$$
The rule of inference corresponding to the above form is:
$$
\upvarphi_{1},\upvarphi_{2},\dots,\upvarphi_{n} \implies \Uppsi
$$
If this argument form is valid then this rule of inference is a tautology.
### Well-Known Rules
#### Modus Ponens
$$
\frac{p\quad p\implies q}{q}
$$
#### Modus Tollens
$$
\frac{¬q \quad p \implies q}{¬p}
$$
#### Hypothetical Syllogism
$$
\frac{p \implies q \quad q \implies r}{p \implies r}
$$
#### Resolution
$$
\frac{p \vee q \quad ¬p \vee r}{q \vee r}
$$

### Applying Rules
When applying a rule, we can substitute arbitrary formulae for $p,q$; for example:
$$
\begin{array}{c|c}
(p\wedge q)\implies¬r & X  \\
((p\wedge q)\implies¬r)\implies((q\wedge r)\vee s) & X \implies Y \\
(q\wedge r)\vee s & Y
\end{array}
$$
