#notes 

## Definition
>Let $f,g:\mathbb{R} \to \mathbb{R}$.
>We say $f(x)$ is $\Theta(g(x))$ if $f(x)$ is $O(g(x))$ and $f(x)$ is $\Omega(g(x))$.

This is equivalent to saying that $f(x)\text{ is }\Theta(g(x))\text{ if }f(x)\text{ is }O(g(x))\text{ and }f(x)\text{ is }\Omega(g(x))$.
And *this* is equivalent to saying that there are constants $C_{1},C_{2},k:|f(x)|\le C_{1}\cdot |g(x)|\text{ and }|g(x)|\le C_{2}\cdot |f(x)|\text{ whenever }x \ge k$.
### Example
All polynomials $a_{n}x^n+\dots+a_{1}x+a_{0}$ with $a_{n} \ne 0$ are $\Theta(x^n)$.

