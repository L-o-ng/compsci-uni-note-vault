#notes 

First, see [[Quick Sort]].
## Solving the Recurrence
$$
T(n)=\begin{cases}
d&\text{if }n\leq c,\text{ constants }c,d>0\\
T(q)+T(n-q-1)+a\cdot n&\text{for some }0\leq q\lt n
\end{cases}
$$
Notice that we cannot use expansion, nor the [[Master Theorem]], or at least not easily.
### Worst-Case Performance
Let $T_{w}(n)$ be the worst-case running time of [[Quick Sort]] on input of size $n$. Then,$$
T_{w}(n)=\underset{0\leq q<n}{\operatorname{max}}\{ T_{w}(q)+T_{w}(n-q-1) \}+an
$$So we **maximise** over all possible partitionings ($q$ and $n-q-1$). We guess $T_{w}(n)\leq \alpha n^2$ for some constant $\alpha>0$. We then substitute the guess into the recurrence:$$
\eqalign{
T_{w}(n)&=\underset{0\leq q<n}{\operatorname{max}}\{ T_{w}(q)+T_{w}(n-q-1) \}+an \\
&\leq\underset{0\leq q<n}{\operatorname{max}}\{ \alpha q^2+\alpha(n-q-1)^2 \}+an \\
&= \alpha \cdot \underset{0\leq q < n}{\operatorname{max}}\{ q^2+(n-q-1)^2 \}+an
}
$$
Consider the expression $q^2+(n-q-1)^2$ for $0\leq q<n$:
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10, 10, -10, 10]
disableZoom: false
grid: true
---
f(x)=(x-1)^2
g(x)=(x-1)^2
```
Its easy to see the expression is maximal for $q=0, n-1$.
This implies choosing $n-1$, giving $$
q^2+(n-q-1)^2 \leq (n-1)^2+(n-(n-1)-1)^2=(n-1)^2
$$And so,$$
\eqalign{
T_{w}(n)&\leq \alpha \cdot\underset{0\leq q<n}{\operatorname{max}}\{ q^2+(n-q-1)^2 \}+an \\
&=\alpha \cdot(n-1)^2+an \\
&=\alpha \cdot(n^2-2n+1)+an \\
&=\alpha n^2-2\alpha n+\alpha+an \\
&=\alpha n^2-(2\alpha n-an-\alpha) \\
&\leq \alpha n^2
}
$$for $\alpha$ large enough; that is, whenever:$$
2\alpha n-an-\alpha\geq 0 \iff \alpha \geq \frac{an}{2n-1}=\Theta 1
$$Thus, the worst-case runtime of our quicksort is $O(n^2)$.
We can run essentially the same argument for lower-bounding worst case, to get $\Theta(n^2)$.
