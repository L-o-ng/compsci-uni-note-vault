#notes 

A *formula* $\phi$ in a formal system that reasons about natural numbers is a *finite sequence of symbols*, so can be suitably encoded by a *single* number $[\phi]$.
A **proof** $\Pi$ in the system can **also** be encoded by a single number $[\Pi]$. The predicate $\operatorname{Proof}([\Pi], [\phi])$, stating that $\Pi$ is a proof of $\phi$, is [[Primitive Recursive Functions|Primitive Recursive]].

We assume that the system is consistent (one cannot prove both $\phi$ and $\neg \phi$ for any formula $\phi$). Assume now that every formula in the system which is true is also provable; assume also that the system can reason about a TM's computations. For every instance $\mathscr{M}$, $w$ of the co-halting problem, the predicate:
$$
\exists p \operatorname{Proof}(p, [\mathscr{M}]\text{ does not terminate on }w)
$$
is [[Turing Languages|semi-decidable]]. Indeed, for a positive instance, the predicate is true and by our assumption there is a proof encoded by some number $p$. We find $p$ by brute-force, trying numbers in sequence. But then we find the co-Halting problem is semi-decidable, and since the Halting problem is semi-decidable, we get that the Halting problem is decidable - a contradiction.
## Gödel's Self-Referential Sentence
Let $\phi(x)$ be a formula with free variable $x$. We define the predicate $P(n,[\phi])$ to mean "$n$ does not encode a proof of $\phi([\phi])$".
Now, we define the formula $\psi(y)$ to be $\forall xP(x,y)$. It has a single free variable $y$, so $\psi([\psi])$ tell us that every $x$ does not encode a proof of $\psi([\psi])$ - it is not provable.
$\psi([\psi])$ cannot be false as if it were then what it says would be false, so it is provable, but everything that is provable must be true: a contradiction. Thus, $\psi([\psi])$ is true, so what it says is true and so it is not provable.