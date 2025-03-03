#notes 

Consider the infinite series:
$$
\sum_{n=0}^{\infty} \frac{1}{3^{n}} 
$$
This is a [[Convergence#Geometric Series]] with initial value 1 and ratio $\frac{1}{3}$.
So:
$$
\eqalign{
S_{n} &= \frac{1-\left( \frac{1}{3} \right)^{n+1}}{1-\frac{1}{3}} \\
&= \frac{3}{2}\left( 1-\left( \frac{1}{3} \right)^{n+1} \right) \\
&\implies \lim_{ n \to \infty } S_{n}=\lim_{ n \to \infty } \frac{3}{2}\left( 1-\left( \frac{1}{3} \right)^{n+1} \right)=\frac{3}{2}
}
$$
So this series converges to $\frac{3}{2}$.

We can then look at the remainder $R_{n}$ of the series to see how many terms we need to take a partial sum of to get a sufficiently accurate approximation.
For example, the sum of the **first five terms** is:
$$
1 + \frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \frac{1}{81} = 1.493827
$$
This is within 1% of the true value.
Observation of $R_{n}$ gives us the same conclusion:
$$
R_{4}=a_{5}+a_{6}+\dots=\frac{1}{2}\left( \frac{1}{3} \right)^{4}=\frac{1}{162}<0.01
$$