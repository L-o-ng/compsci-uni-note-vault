#notes

The median-of-medians algorithms allows for **worst-case linear-time** deterministic selection in **unsorted** data.
+ It is similar to [[Quick Select]] but with a good, deterministic pivot selection strategy.
+ It is *doubly* recursive.
+ It has a guaranteed time complexity of $O(n)$ for finding the $i$-th smallest element in a sequence of $n$ unsorted items.
## Algorithm
1) Divide the $n$ elements into groups of 5. Find the median of each 5-element group by rote.
2) Recursively `Select` the median $x$ of the $\left\lfloor  \frac{n}{5}  \right\rfloor$ group medians to be the pivot.
3) Partition around the pivot $x$. Let $k=\operatorname{rank}(x)$.
4) 
```
if i = k then
	return x
else if i < k then
	recursively Select the i-th smallest element in the lower part
else
	recursively Select the (i-k)-th smallest element in the upper part
endif
```

## Analysis
1) Divide the $n$ elements into groups of 5. Find the median of each group.
2) Recursively select the median $x$ of the $\left\lfloor  \frac{n}{5}  \right\rfloor$ group medians to be the pivot.
3) At least half the group medians are $\leq x$ which is at least $\left\lfloor  \left\lfloor  \frac{n}{5}  \right\rfloor /2  \right\rfloor=\left\lfloor  \frac{n}{10}  \right\rfloor$ group medians.
   So, at least $3\left\lfloor  \frac{n}{10}  \right\rfloor$ elements are $\leq x$, assuming all elements are distinct. Similarly, at least $3\left\lfloor  \frac{n}{10}  \right\rfloor$ elements are $\geq x$.
So, since $\left\lfloor  \frac{a}{b}  \right\rfloor> \frac{a}{b}-1$:
$$
n-3\left\lfloor  \frac{n}{10}  \right\rfloor < n-3\left( \frac{n}{10}-1 \right) \leq \frac{7n}{10}+3 \leq \frac{3n}{4} \text{ if }n\geq 60
$$
The recursive call in step 4 is executed recursively on at most $\frac{7n}{10}+3$ elements.

So we have a relation:
$$
T(n)=T\left( \frac{1}{5}n \right)+T\left( \frac{7}{10}n+3 \right)+n
$$
To show $T(k)\leq ck \forall k<n,n>0$, obtain by substitution the following:
$$
\eqalign{
T(n)&\leq c\left( \frac{n}{5} \right)+c\left( \frac{7n}{10}+3 \right)+3\\
&\leq \frac{cn}{5}+ \frac{3cn}{4} + n ,\quad n\geq 60\\
&= \frac{19cn}{20}+n \\
&\leq cn-\left( \frac{cn}{20}-n \right) \\
&\leq cn, \quad c\geq 20, n\geq 60
}
$$
