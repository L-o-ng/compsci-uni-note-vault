#notes 

To find the range of $x$ for which a power series converges absolutely, known as the **interval of convergence**, we should use the ratio test:
$$
\rho=\lim_{ n \to \infty } \left|\frac{b_{n+1}x^{n+1}}{b_{n}x^{n}}\right|=|x|\lim_{ n \to \infty } \left|\frac{b_{n+1}}{b_{n}}\right|
$$
So if $\lim_{ n \to \infty } \left|\frac{b_{n+1}}{b_{n}}\right|=0$ then the sum converges absolutely for all $x \in \Bbb{R}$, while if $\lim_{ n \to \infty } \left|\frac{b_{n+1}}{b_{n}}\right|=c>0$ then it converges absolutely for $|x|< \frac{1}{c}$ and diverges for $|x|> \frac{1}{c}$.

Note that convergence at the endpoints $|x|= \frac{1}{c}$ **must** be considered **separately**.
## Examples
### Example 1 - The Geometric Series
$P(x)=\sum_{n=0}^{\infty}x^{n}= \frac{1}{1-x}$. Here $b_{n}=1$ so $\frac{b_{n+1}}{b_{n}}=1$ and the series converges for $|x|<1$.
### Example 2
$P(x)=e^{ x }=\sum_{n=0}^{\infty} \frac{1}{n!}x^{n}$. Here $b_{n}= \frac{1}{n!}$, so $\lim_{ n \to \infty } \left|\frac{b_{n+1}}{b_{n}}\right|=\lim_{ n \to \infty } \frac{n!}{(n+1)!}=\lim_{ n \to \infty } \frac{1}{n+1}=0$, so $P(x)$ converges for all $x$.
