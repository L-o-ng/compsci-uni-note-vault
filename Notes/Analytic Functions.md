#notes 

See [[Taylor Series]].
We can say that a Taylor series is defined if $f(x)$ is infinitely differentiable at $x=a$. In most cases, but not always, $P_{a}(x)$ agrees with $f(x)$ within the interval of convergence of the power series.
When this is the case, we say that $f(x)$ is an **analytic function** near $a$. 

For an analytic function $f(x)$, we can therefore write:
$$
f(x)=\sum_{n=0}^{\infty} \frac{1}{n!}(x-a)^{n}f^{(n)}(a)
$$
This holds for all $x$ in the interval of convergence. A Taylor series about $a=0$ is also called a **McLaurin Series**.
## Examples
+ $e^{ x }=\sum_{n=0}^{\infty} \frac{x^{n}}{n!}$
+ $\sin x=\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{2n+1}$
## Convergence
These power series converge absolutely for all $x \in \Bbb{R}$. By contrast, the Taylor series for $\ln(1+x)$ does not converge everywhere:
$$
\ln(1+x)=\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}x^{n}
$$
For convergence, the ratio test yields:
$$
\left| \frac{\frac{(-1)^{n+2}}{(n+1)}x^{n+1}}{\frac{(-1)^{n+1}}{n}x^{n}} \right|=|x|\cdot \frac{n}{n+1} \to |x|
$$
So this power series converges absolutely for $|x|<1$, and diverges for $|x|>1$ and its polynomial partial sums are no longer a good approximation for $|x|>1$.

