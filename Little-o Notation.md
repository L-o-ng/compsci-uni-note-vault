#definition 

Little-o Notation is a tool for disregarding small-order terms.
## Definition
>Let $f,g:\mathbb{R}\to \mathbb{R}$.
>We say $f(x)$ is $o(g(x))$ when: $$\lim_{ x \to \infty } \frac{f(x)}{g(x)}=0$$

Or, the fraction $\frac{f(x)}{g(x)}$ gets arbitrarily close to 0 when $x$ gets larger.
### Alternate Definition
>$$o(g)=\{ f:\mathbb{N}\to \mathbb{N}|\forall C>0\exists k>0:C\cdot f(n)<g(n)\forall n \ge k \}$$

This clearly shows $f(g)\text{ is }o(g(x))\implies f(x)\text{ is }O(g(x))$.
### Proof
If we suppose $f(x)$ is *not* $O(g(x))$ then for all positive constants $C,k \exists x>k$ such that $$|f(x)|>C\cdot |g(x)|$$and so either $\lim_{ x \to \infty } \frac{f(x)}{g(x)}$ does not exist or it is not 0. Then $f(x)$ is **not** $o(g(x))$.

