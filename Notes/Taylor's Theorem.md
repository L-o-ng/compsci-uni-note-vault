#notes 

We can obtain a bound on the error in the approximation given by a [[Taylor Series]] $f(x)=p_{N,a}(x)$. This error bound is obtained by a careful analysis of a *remainder term*. The precise statement reads as follows:

>If $f(x)$ is differentiable $N+1$ times in a neighbourhood of $a$, $x$ is a point in this neighbourhood, and $f^{(N+1)}$ is continuous between $a$ and $x$, then: $$f(x)=p_{N,a}(x)+R_{N+1,a}(x)$$where$P_{N,a}(x)$ is the $N$-th Taylor polynomial for $f(x)$ around $a$ and $R_{N+1,a}(x)$ is the $N$-th **remainder term**.
## Lagrange Form of a Remainder
The $N$-th remainder term is given by:
$$
R_{N+1,a}(x)=\frac{f^{(N+1)}(\xi)}{(N+1)!}(x-a)^{N+1}
$$
for some value $\xi$ in the interval between $a$ and $x$.
+ This is called the **Lagrange Form** of the remainder.
+ It is reasonable that the remainder term $R_{n+1,a}(x)$ involves $f^{(n+1)}$; if it happened that the function $f(x)$ was a polynomial of degree $n$, $p_{n}(x)$ would be precisely equal to $f(x)$, so $f^{(n+1)}$ and the remainder term would vanish.
+ Since the remainder term involves $(x-a)^{n+1}$, it is smaller for $x$ near $a$, and typically smaller for larger $n$, as long as $|x-a|<1$.
+ We cannot explicitly calculate the remainder term, as it involve some point $\xi \in (a,x)$, and the theorem does not tell us which point to use - $\xi$ depends on $f,n,a,x$. But we may be able to *bound* it: if $|f^{n+1}(\xi)|\leq M$ for all $\xi \in(a,x)$ then: $$R_{n+1,a}(x)\leq \frac{M}{(n+1)!}(x-a)^{n+1}$$
Taylor's theorem lets use use bounds like this to bound the error in a given polynomial approximation to a function, and so allows us to find an approximation of a given accuracy.
## Example
Q: Find a Taylor polynomial approximation to $\cos(0.5)$ accurate to $\pm0.01$.
A:
We take $f(x)=\cos x, f'(x)=\sin x,f''(x)=-\cos x,f'''(x)=-\sin x,f^{(4)}(x)=\cos x$ and so on. Consider an expansion around $x=0$, since we can evaluate the derivatives there: $f(0)=1, f'(0)=0, f''(0)=-1,f'''(0)=0$ and so on. The simplest approximation is $$p_{1}(x)=f(0)+xf'(0)=1$$ This will not meet the accuracy target. We can check this with the remainder term:
$$
R_{2}(x)=\frac{1}{2}f''(\xi)x^{2},R_{2}(0.5)=-\frac{1}{8}\cos \xi
$$
All we can say about $\cos \xi$ is that it takes values in $[-1,1]$, so we know that $|R_{2}(0.5)|\leq \frac{1}{8}$, so we need a smaller error.
The next Taylor polynomials are $p_{2}(x)=p_{3}(x)=1-\frac{1}{2}x^{2}$, leading to an error:
$$
R_{4}(0.5)=\frac{f^{(4)}(\xi)}{4!}(0.5)^{4}=0.0026\cos \xi
$$
for some $\xi \in(0,0.5)$, so $|R_{4}(0.5)|\leq 0.0026$, so $p_{3}$ is a good enough approximation:
$$
\cos(0.5)\approx p_{3}(0.5)=1-\frac{1}{2}(0.5)^{2}=0.875
$$