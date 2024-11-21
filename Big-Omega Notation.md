#definition 

[[Big-O Notation]] is useful for finding reasonable **upper** bounds. It is less useful if we are interested in the best function that *matches the growth rate*. **Big-Omega Notation** measures this.
## Definition
>Let $f,g:\mathbb{R} \to \mathbb{R}$.
>We say $f(x)\text{ is }\Omega(g(x))$ if there are positive constant $C$ and $k$ such that: $$|f(x)|\ge C\cdot |g(x)|$$
>whenever $x > k$. Note that this implies that $f(x)\text{ is }\Omega(g(x))$ if and only if $g(x)\text{ is }O(f(x))$.

