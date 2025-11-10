#notes 
## Box Operator $\Box$
The meaning of the box operator comes alongside [[Propositional Logic]] plus $\Box \phi$ to mean "I **know**/can **prove** $\phi$", or more generally - "necessarily $\phi$". We have $\Box\phi \to \phi$, but *not* the other way around: $\phi$ is true, but we cannot prove it.
## Diamond Operator $\Diamond$
We define $\neg \Box\phi:=\Diamond\neg \phi$. In words: "I can't prove $\phi$, so it is *possible* that $\neg \phi$". Conversely, $\neg \Diamond\phi$: $\phi$ is impossible - is the same as proving $\neg \phi$ - meaning $\Box\neg \phi$.
## Axioms
These are inherited from [[Propositional Logic]], plus two extra rules.
### Necessitation Rule, $N$
$$
\frac{\phi}{\Box\phi}
$$
### Distribution Axiom $K$
$$
\Box(\phi\to \psi)\to(\Box\phi\to \Box\psi)
$$
### Possible Axioms
+ $T: \Box\phi\to \phi$;
+ $4: \Box\phi\to \Box\Box\phi$;
+ $B:\phi\to \Box \Diamond\phi$;
+ $D:\Box\phi\to \Diamond\phi$;
+ $5:\Diamond\phi\to \Box\Diamond\phi$.
## Kripke Semantics
Over a set of atomic propositions $P$, and a set of words $W$, we are given a **valuation function**:
$$
f:P\times W\to \{ \text{true, false} \}
$$
and an **accessibility relation**:
$$
R \subseteq W\times W 
$$
Here, $(u,v) \in R$ if $v$ is accessible from $u$.
$\Box a$ holds at $u$ iff $a$ holds at *every* $v$ such that $(u,v) \in R$. Thus, $\Diamond a$ holds at $u$ iff $a$ holds at *some* $v$ such that $(u,v) \in R$.