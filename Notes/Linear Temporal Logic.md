#notes 

Consider that we have a **boolean** state, or **world**, in which a number of **atomic** **propositions** (*AP*) are true or false.
We would like to reason about discrete linear time, which is an infinite sequence of states $A_{0}A_{1}\dots$ with sate $A_{0}$ being the current state.
We would also like to add **temporal** **modalities**, such as:
+ $\text{always }a$, or $\Box a$;
+ $\text{eventually }a$, or $\diamond a$;
+ $\text{next }a$, or $\circ a$;
+ etc...

These talk about the entire sequence. These let us express other natural temporal properties like: $\text{infinitely often }a = \Box \diamond a$, and others.
## Syntax
We are given a finite set $AP$ of atomic propositions (boolean variables); boolean connectives; and two temporal modalities: $\circ$ = next; and $U$ = until.
>A formula in LTL is defined by the following grammar, in which brackets are omitted: $$\phi := \text{true}|a|\phi_{1} \wedge \phi_{2}|\neg \phi|\circ\phi|\phi_{1}U\phi_{2}$$where $a \in AP$ and $\phi_{1},\phi_{2}$ are LTL formulae.

Other modalities can be expressed; for example:
+ $\diamond a \overset{\text{def}}{=}\text{true}Ua$
+ $\Box a\overset{\text{def}}{=}\neg \diamond\neg a$
## Semantics
### Intuitive Semantics
![[Linear Temporal Logic Semantics.png]]
### Formal Semantics
A **world** is labelled by the AP that are *true* in it, so it is just a letter from the alphabet $2^{AP}$ (the set of all subsets of AP).
A *word* $\sigma$ is an infinite sequence of *worlds*; ie, $\sigma \in (2^{AP})^{\omega}$.
>The **satisfaction relation** $\sigma \vDash \phi$, where $\sigma=A_{0}A_{1}\dots$ is a word and $\phi$ is a formula is defined recursively by: $$\begin{align}&\sigma \vDash\text{true}\\ &\sigma \vDash a &\iff a \in A_{0}\\  & \sigma \vDash \phi_{1}\wedge \phi_{2} &\iff \sigma \vDash\phi_{1}\text{ and }\sigma \vDash\phi_{2} \\ &\sigma \vDash\neg \phi &\iff \sigma \not \vDash\phi \\ &\sigma \vDash \circ \phi &\iff A_{1}\dots \vDash\phi \\ &\sigma \vDash\phi_{1}U\phi_{2}&\iff \exists i\geq 0 | A_{i}\dots \vDash\phi_{2}\cap A_{j}\dots \vDash\phi_{1} \forall_{0} \leq j < i\end{align}$$

The set of all word that satisfy a formula $\phi$ is called $Words(\phi)$.
## Transition Systems
A transition system $TS$ has:
1. A finite set of states $S$;
2. A **transition relation** $\to \subseteq S\times S$, which is **left-total** (for every $s_{1} \in S$ there is $s_{2} \in S$ such that $s_{1} \to s_{2}$);
3. A set of initial states $I \subseteq S$;
4. A finite set of atomic propositions AP;
5. A labelling function $L:S \mapsto {2}^{AP}$

The transitions may be labelled by a finite set of actions $Act$ in which case the transition relation becomes $\to \subseteq S\times Act\times S$.
### Executing a Transition System
A **run** of $TS$ is an infinite sequence of states $s_{0} \to s_{1} \to\dots,$ where $s_{0} \in I$, which produces an infinite **trace** $\sigma \in(2^{AP})^{\omega},\sigma=L(s_{0})L(s_{1})\dots$
The set of **all possible traces** of $TS$ is called $Traces(TS)$.
Finally, $TS$ satisfies $\phi$, $TS \vDash \phi$, if $Traces(TS) \subseteq Words(\phi)$, or idiomatically, ==if each trace of the $TS$ satisfies the formula $\phi$==.
Thus, it is possible that $TS \not \vDash\phi \cap TS \not \vDash\neg \phi$!
### Example
![[Linear Time Logic Transition System Example.png]]
