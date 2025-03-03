#notes 

+ For finite series, if the terms are functions of some variable, we can integrate and differentiate term by term. That is, if: $$\sum_{n=1}^{N}a_{n}(x)=S_{N}(x),\sum_{n=1}^{N}a^{\prime}_{n}(x)=S^{\prime}_{N}(x)$$ and similarly for integrals.
+ For infinite series, calculus can affect convergence.
## Example - the Logarithmic Series
We know that $\frac{1}{1-t}=\sum_{n=0}^{\infty}t^{n},|t|<1$, so:
$$
\eqalign{
\ln(1-x)&=-\int_{0}^{x} \frac{dt}{1-t}\\&=-\int_{0}^{x}\left( \sum_{n=0}^{\infty}t^{n} \right)dt\\& \overset{(*)}{=}\sum_{n=0}^{\infty}-\left( \int_{0}^{x} t^{n}dt\right)\\
&=-\left( \sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1} \right)=-\sum_{k=1}^\infty \frac{x^{k}}{k}
}
$$
Which shows for $|x|<1$ that:
$$
-\sum_{k=1}^{\infty} \frac{x^{k}}{k}=\ln(1-x)
$$
The step marked with a star interchanges an integral with a summation. This is fine for finite sums, but not always for infinite sums. There are arguments that confirm the starred step in this case.
## Example - the Arithmetico-geometric Series
Consider the series: 
$$
\sum_{n=0}^{\infty}nr^{n}=\sum_{n=1}^{\infty}nr^{n}
$$
Using the closed formula for finite [[Convergence#Geometric Series|geometric series]], we have for the partial sums:
$$
\eqalign{
S_{N}(r)&=\sum_{n=1}^{n}nr^{n} \\
&= r\sum_{n=1}^{N}nr^{n-1} \\
&= r\sum_{n=1}^{N}(r^{n})^{\prime} \\
&= r\left( \sum_{n=1}^{N}r^{n} \right)^{\prime} \\
&= r\left( r\sum_{n=1}^{N}r^{n-1} \right)^{\prime} \\
&= r\left( r\sum_{m=0}^{N-1}r^{m} \right)^{\prime} \\
&= r\left( r \frac{1-r^{N}}{(1-r)^{2}} \right)^{\prime} \\
&= r\left( \frac{1-r^{N}}{1-r}+r\frac{-Nr^{N-1}}{1-r}+r \frac{1-r^{N}}{(1-r)^{2}} \right) \\
&= r\left( \frac{1-r^{N}}{(1-r)^{2}}(1-r)+r \frac{1-r^{N}}{(1-r)^{2}}- \frac{Nr^{N}}{1-r} \right) \\
&= r\left(  \frac{1-r^{N}}{(1-r)^{2}}- \frac{Nr^{N}}{1-r} \right)
}
$$
Since we have for $|r|<1$ the following:
$$
\lim_{ N \to \infty } r^{N}=0=\lim_{ N \to \infty } Nr^{N}
$$
we obtain in the case $|r|<1$:
$$
S(r)=\lim_{ N \to \infty } S_{N}(r)=r\left( \frac{1}{(1-r)^{2}}-0 \right)= \frac{r}{(1-r)^{2}}
$$
