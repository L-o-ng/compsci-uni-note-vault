#notes 

For both finite and infinite series, simple algebraic manipulations are valid:
+ If $\sum a_{n}=S,\sum ka_{n}=k\sum a_{n}=kS$.
+ If $\sum a_{n}=S, \sum b_{n}=T, \sum(a_{n}+b_{n})=S+T$.
## Example
Suppose $a_{n}=an+b$. Using the formula for the [[Convergence#Arithmetic Series]], we have:
$$
S=\sum_{n=1}^{N}a_{n}=\sum_{n=1}^{N}(an+b)=a\sum_{n=1}^{N}n+b\sum_{n=1}^{N}1=a \frac{1}{2}N(N+1)+bN
$$
## The Difference Method
Let $S=\sum_{k=1}^{N}a_{k}$ be a finite *or* infinite series. Assume we can find a sequence $b_{k}$ such that $a_{k}=b_{k+1}-b_{k}$ for all $k$. Then we obtain for the partial sums $S_{n}=\sum_{k=1}^{n}a_{k},n \in \Bbb{N}, n \leq N$ the following, via an index shift:
$$
\eqalign{
S_{n}&=\sum_{k=1}^{n}(b_{k+1}-b_{k}) \\
&= \left( \sum_{k=1}^{n}b_{k+1} \right)-\left( \sum_{k=1}^{n}b_{k} \right) \\
&= \left( \sum_{\ell=2}^{n+1}b_{\ell} \right)-\left( \sum_{k=1}^{n}b_{k} \right) \quad \text{very important step!} \\
&= \left( \sum_{k=2}^{n+1}b_{k} \right)-\left( \sum_{k=1}^{n}b_{k} \right)=b_{n+1}-b_{1}
}
$$
In the case of an infinite series, we have the following:
+ If we have $\lim_{ n \to \infty }b_{n}=b$ then the series $S$ converges and its sum is given by: $$S=\lim_{ n \to \infty }S_{n}=\lim_{ n \to \infty } b_{n+1}-b_{1}=b-b_{1} $$
+ The same works with a slight generalisation: if we can find a sequence $b_{k}$ with $a_{k}=b_{k+m}-b_{k}$ for all $k$, we obtain: $$S_{n}=b_{n+m}+\dots+b_{n+1}-(b_{m}+\dots+b_{1})$$
+ And, for the sum of an infinite series: $$S=\lim_{ n \to \infty } S_{n}=mb-b_{m}+\dots+b_{1}$$
### Example
Consider the series:
$$
S=\sum_{k=1}^{\infty} \frac{1}{k(k+m)}
$$
We can apply the difference method here, since we have:
$$
\frac{1}{k(k+m)}=\frac{1}{m}\left( \frac{1}{k}-\frac{1}{k+m} \right)
$$
Therefore, we have:
$$
m\sum_{k=1}^{n} \frac{1}{k(k+m)}=-\sum_{k=1}^{n}\left( \frac{1}{k+m}-\frac{1}{k} \right)=-\sum_{k=1}^{n}(b_{k+m}-b_{k})
$$
with $b_{k}=\frac{1}{k}$. Using the fact that $\lim_{ k \to \infty }b_{k}=0$, and the formula for the difference method, we obtain:
$$
mS=b_{m}+\dots+b_{1}=1+ \frac{1}{2}+\dots+\frac{1}{m}
$$
So, 
$$
S= \frac{1}{m}\left( 1+\frac{1}{2}+\dots+\frac{1}{m} \right)
$$
