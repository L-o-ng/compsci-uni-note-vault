#notes

It is difficult to compute the **exact** number of operations.
Usually, we don't need it. It is sufficient to **estimate** this number, or **give bounds**.
For [[Worst Case Time Complexity]] analysis, we are more interested in *upper* bounds.
These bounds should give us the possibility to estimate **growth** of the number of operations when the input size increases - it is important to estimate this when the input is *large*.
## Definition
>Let $f,g :\mathbb{Z}\cup \mathbb{R}\to \mathbb{R}$. We say that $f$ is $O(g)$ if there are constants $C, k$ such that: $$|f(x)|\le C\cdot |g(x)|$$whenever $x \ge k$.
>This is read as $f\text{ is big-}O\text{ of }g$.

This definition is introduced for general functions. If we consider time complexity functions, all functions will have positive values and we do not have to be concerned about the absolute values.
## 'Real' Definition
>Let $f:\mathbb{N}\to \mathbb{N}$, then: $$O(f)=\{ g : \mathbb{N}\to \mathbb{N}|\exists C,k>0,g(x) \le C\cdot f(x) \text{ for }x \ge k\}$$

This will often read something like $T(n)=O(n^2)$, with equals sign.
+ Equals is an abuse of notation as a value and a set of functions is not equatable, but it is standard.
+ The correct way would be $T \in O(n^2)$, but this is hardly used.
You should **say** "is" ("is big-O of"), or "is (in the) order of".
You should **write** "=", or more informally "is (in)".
### Meaning
The definition says that after a certain point, $k$, $|f(z)|$ is bounded from above by $C\cdot |g(x)|$.
In terms of time complexities, $f(x)$ is no worse that $C\cdot g(x)$ for all relatively large input sizes $x$. 
$C$ is a fixed constant usually depending on the choice of $k$. We are not allowed to increase $C$ as $x$ increases.
## Witnesses
$C,k$ are called **witnesses** to the relationship $f(x)\text{ is }O(g(x))$.
If there is a *pair* of witnesses to that relationship, then there are infinitely many pairs.
+ If $C,k$ are one pair of witnesses, then any pair $C^\prime,k^\prime\text{ where } C \le C^\prime\text{ and }k \le k^\prime$ is also a pair of witnesses.
To establish that $f(x)$ is $O(g(x))$ we only need one pair: we can be 'generous', meaning we do not need to find the best values.
## Common Complexities

| Big-O form                           | Name        |
| ------------------------------------ | ----------- |
| $O(1)$                               | Constant    |
| $O(\log n)$                          | Logarithmic |
| $O(n)$                               | Linear      |
| $O(n\log n)$                         | $n\log n$   |
| $O(n^2)$                             | Quadratic   |
| $O(n^3)$                             | Cubic       |
| $O(n^k)\text{ for }k \in \mathbb{N}$ | Polynomial  |
| $O(c^n)\text{ for }c>1$              | Exponential |
| $O(n!)$                              | Factorial   |

```functionplot
---
title: Time Complexities
xLabel: 
yLabel: 
bounds: [0,20,0,40]
disableZoom: false
grid: true
---
a=1
b=log(x)
c = x
d = x * log(x)
e = x*2
f = x^3
g = 2^x
h=x!
```

## Examples
### Key Examples
#### Polynomial Evaluation
The polynomial $$f(x)=a_{n}x^n+a_{n-1}x^{n-1}+\dots+a_{2}x^2+a_{1}x+a_{0}$$at a fixed value $x_{0}$ can be evaluated as follows:
```
power <- 1
y <- a_0
for i <- 1 to n do
	power <- power * x_0
	y <- y + a_i * power
endfor
```
So, $$y=a_{n}x_{0}^n+a_{n-1}x_{0}^{n-1}+\dots+a_{2}x^2+a_{1}x_{0}+a_{0}$$If we use this procedure, then we will need $2n$ multiplications and $n$ additions to evaluate a polynomial of degree $n$ at $x=x_{0}$.
The algorithm is $O(n)$.
#### Insertion Sort
The real numbers $a_{1},\dots,a_{n}\ge 2$ can be *sorted*, or arranged in **ascending order**, by the insertion sort algorithm:
```
for j <- 2 to n do
	x <- a_j
	i <- j - 1
	while i > 0 and a_i > x do
		a_i+1 <- a_i
		i <- i - 1
	endwhile
	a_i+1 <- x
endfor
```
The **worst case** number of comparisons $a_{i}>x$ is: $$1+2+\dots+(n-1)=\sum_{i=1}^{n-1}i=\frac{n(n-1)}{2}$$If $a_{1} \le a_{2} \le\dots \le a_{n}$ then the number of comparisons $a_{i}>x$ is $n-1$.
The algorithm is $O(n^2)$.
### Other Examples
#### Example 1
Let $f(x)=x^2+2x+1$. Then $f(x)=O(x^2)$
#### Proof
>For $x \ge 1$, we have $1 \le x \le x^2$. That gives: $$f(x)=x^2 + 2x + 1 \le x^2 + 2x^2+x^2=4x$$for $x \ge 1$. Because the above inequality holds for every positive $x \ge 1$, using $k=1, C=4$ as witnesses, we get: $$f(x) \le C\cdot x^2$$for every $x \ge k$.
## Big-O vs Exact Time Complexity
Say we have time complexity $5n^2+3n$, and we say it is $O(n^2)$, we:
+ Lose information about the exact number of basic operations for a given $n$ value.
+ Gain a simple way of expressing that the time complexity grows with the square of the input size.

