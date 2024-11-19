#notes #homework-needed 

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

## Examples
### Key Examples
todo! polynomials and insertion sort
### Other Examples
#### Example 1
Let $f(x)=x^2+2x+1$. Then $f(x)=O(x^2)$
#### Proof
>For $x \ge 1$, we have $1 \le x \le x^2$. That gives: $$f(x)=x^2 + 2x + 1 \le x^2 + 2x^2+x^2=4x$$for $x \ge 1$. Because the above inequality holds for every positive $x \ge 1$, using $k=1, C=4$ as witnesses, we get: $$f(x) \le C\cdot x^2$$for every $x \ge k$.
#### Example 2
todo!

