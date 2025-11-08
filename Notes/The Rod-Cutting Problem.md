#notes 

You work for a company that buys steel rods and cuts them into shorter rods, which it then sells. You are asked to determine the best way to cut the rods to maximise profit.
You know for $i=1,\dots,n$, the price $p_{i}$ in euros that the company charges for a rod of length $i$ centimetres. For example:
![[Rod Cutting 1.png]]
## Formal Definition
Given a rod of length $n$ and a table of prices $p_{i}$ for $i=1,\dots,n$ determine the maximum revenue $r_{n}$ obtained by cutting up the rod and selling the pieces. For example with $n=4,p_{1}=1,p_{2}=5,p_{3}=8,p_{4}=9$, by brute force we have:
![[Rod Cutting 2.png]]
So our maximum revenue is 10.
### Integer Partitions
An **integer partition** of a positive number $n$ is a list of positive integers $\langle a_{1},\dots,a_{k}\rangle$ such that $a_{1}\leq a_{2}\leq\dots\leq a_{k}$ and 
$$\sum_{i=1}^{k} a_{i}=n$$
Let $p(n)$ denote the number of integer partitions of $n$. Then:
$$
p(1)=1,p(2)=2,p(3)=3,p(4)=5,\dots
$$
Hardy and Ramanujan proved that:
$$
p(n)\approx \frac{1}{4n\sqrt{ 3 }}\exp\left( \pi \sqrt{ \frac{2n}{3} } \right)
$$
Therefore, our brute-force approach has an *exponential* runtime!
## Optimal Substructure
More generally, we have for all $n \geq 1$:
$$
r_{n}=\max \{ p_{i}+r_{n-i}:1\leq i\leq n \}
$$
An idea arises: $p_{n}$ corresponds to no cuts and $p_{i}+r_{n-i}$ to cutting a rod of length $i$ and another rod of length $n-i$.
To solve the original problem of size $n$, we can solve *independent* problems of the same type, but of smaller sizes.
>**Optimal Substructure** refers to when optimal solutions to a problem incorporate optimal solutions to related sub-problems, which we may solve independently.
## Recursive Top-Down Implementation
```
fn rod
in array p[1..n] of prices, integer n
op the maximum revenue possible for a rod of length n
	if n = 0 then
		return 0
	endif
	q <- -1
	for i <- 1 to n do
		q <- MAX(q, p[i] + rod(p, n - i))
	endfor
	return q
```
We still however have exponential runtime, as there are $2^{n}$ calls of the form `rod(p, k)` for $n\geq 1$.
## Dynamic Programming
The naive solution is slow because it repeatedly solves the **same** sub-problems. We can arrange the sub-problems in order to solve them only **once**, saving the solution. If we need that solution, we can just look it up instead of recomputing.
>**Dynamic Programming** refers to programs that use additional memory to save computation time; this is an example of a time-memory tradeoff.

A dynamic programming algorithm runs in polynomial time, when both:
+ The number of *distinct* sub-problems involved is polynomial;
+ We can solve *each* sub-problem in polynomial time.

Note that for every algorithm that uses sub-problems, the sub-problems must be **independent**. Two problems are independent if they do not share resources - if the solution to one does not affect the solution to another. In our rod-cutting, when you cut at point $i$, what happens to the left of $i$ does not affect how to cut at the *right* of $i$.
Dynamic programming works well because it combines optimal substructure with **overlapping sub-problems**. In the naive top-down method, we revisit the same problems repeatedly. We can use memoization to prevent this.
## Implementations
### Top-Down with Memoization
```
fn memoized_rod
in p, n
	let r[0..n] be a new array
	for i <- 0 to n do
		r[i] <- -1
	endfor
	return memoized_rod_aux(p, n, r)
```
```
fn memoized_rod_aux
in p, n, r
op q
	if r[n] >= 0 then
		return r[n]
	endif
	if n = 0 then
		q <- 0
	else
		q <- -1
		for i <- 1 to n do
			q <- MAX(q, p[i] + memoized_rod_aux(p, n - i, r))
		endfor
	endif
	r[n] <- q
	return q
```
### Bottom-Up
```
fn bottom_up_rod
in p, n
op r[n]
	let r[0..n] be a new array
	r[0] <- 0
	for j <- 1 to n do
		q <- -1
		for i <- 1 to j do
			q <- MAX(q, p[i] + r[j - i])
		endfor
		r[j] <- q
	endfor
	return r[n]
```
### Runtime
For rod-cutting, both approaches have a worst-case runtime of $\Theta(n^{2})$.