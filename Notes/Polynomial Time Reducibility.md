#notes 

We can show a problem is in [[P]] by **reduction**.
>[!definition]
>Language $\cal L_{1}$ is **polynomially reducible** to $\cal L_{2}$, denoted $\cal L_{1} \leq \cal L_{2}$, if a *polynomially-bounded* and *polynomial-time* computable function $f$ exists such that:
>$$x \in \cal L_{1} \iff f(x) \in \cal L_{2}$$

>[!theorem] Lemma
>The composition of polynomials is a polynomial
>$$\cal L_{1} \leq \cal L_{2} \text{ and } \cal L_{2} \in \mathbf{P} \implies \cal L_{1} \in \mathbf{P}$$

---

So, problem $X$ **polynomially reduces** to problem $Y$ if an arbitrary instance of problem $X$ can be:
1. Transformed to an instance of $Y$ in a polynomial number of steps;
2. Solved using a polynomial number of calls to an [[t-Reducibility|Oracle]] that solves problem $Y$.

We write $X\leq Y$ if $X$ is polynomial-time reducible to $Y$.
If $X\leq Y$ and $Y\leq X$ then $X,Y$ are **equivalent**.