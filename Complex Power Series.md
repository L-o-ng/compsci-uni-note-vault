#notes 

For the [[Convergence#Geometric Series]], we see that the function $\frac{1}{1-x}$ diverges at one end of the interval of convergence. For real series, this connection is not universal, but it is if we generalise to a complex argument. This means that we must consider the **complex power series**:
$$
P(z)=\sum_{n=0}^{\infty} b_{n}z^{n}
$$
If $\lim_{ n \to \infty } \left|\frac{b_{n+1}}{b_{n}}\right|=c>0$ this converges absolutely for $|z| < \frac{1}{c}$ - that is, within a circle in the complex plane. We thus call $\frac{1}{c}$ the **radius of convergence**. This gives the following general fact, which **always** holds:

>Any real-or-complex-valued power series $P(z)=\sum b_{n}z^{n}$ has a radius of convergence; that is, a value $r \in [0, \infty]$ such that $P(z)$ converges absolutely for all $|z|<r$ and diverges for all $|z|>r$. The convergence/divergence behaviour of $P(z)$ in the circle $|z|=r$ is not clear and needs to be investigated separately. Note that the radius of convergence $r$ cannot always be derived via the ratio test - there are power series for which the ratio test is inconclusive.

In this context, it is another general fact that $P(z)$ can be extended continuously beyond the domain $|z|<r$, but there will always be at least one point on the circle of radius $r$, at which point this extension is not well defined - it has a singularity. 
For example, in the case of the function $f(z)= \frac{1}{1-z}=\sum z^{n}$, this singularity has a real value and lies at the point $z=1 \in \Bbb{C}$.
## Example
If we take the geometric series and set $z=-w^{2}$ we get:
$$
P(w)=\sum_{n=0}^{\infty} (-w^{2})^{n}=\sum_{n=0}^{\infty} (-1)^{n}w^{2n}= \frac{1}{1+w^{2}}
$$
This complex-valued series converges for $|w|<1$, since it is a geometric series in $-w^{2}$ and converges therefore for $|w|^{2}=|-w^{2}|<1$ and has singularities at $w=\pm i$ on the circle $|w|=1$