#notes 

We can consider **2 variants** of the knapsack problem.
## Variants
### Variant 1 - The 0-1 Knapsack
This is the classic variant of the knapsack problem. 
>A thief robs a store and finds $n$ items. Item $i$ is worth $v_{i}$ euros and weighs $w_{i}$ kilos. The thief can carry at most $W$ kilos in their knapsack. Which items can he take to maximise his profit?
### Variant 2 - The Fractional Knapsack
We have the same setup as before, but now the thief can take *fractional* items.

We can assume without loss of generality that the knapsack is not big enough to carry all items:
$$
W < w_{1}+\dots+w_{n}
$$
otherwise the thief can just take everything.
## Solving the Fractional Knapsack with a Greedy Algorithm
We can solve variant 2 with a *greedy* algorithm:
1. Compute the value per kilo $r_{i}=v_{i} \div w_{i}$ for each item;
2. **Sort** items by $r_{i}$ in a non-increasing order;
3. Take as much as possible of the items with the greatest $r_{i}$ then take the items with the next highest $r_{i}$ until the total weight equals $W$.
### Runtime Analysis
1. Step 1 can be done $\Theta(n)$;
2. Step 2 can be done $\Theta(n\log n)$;
3. Step 3 can be done in $\Theta(n)$.
Therefore we have the worst-case runtime $\Theta(n\log n)$.

This algorithm does not work for the 0-1 knapsack problem. For instance, if $W=6$ and we have:
$$
\begin{matrix}
v_{1}=3\texteuro & w_{1}=4kg & \implies r_{1}=\frac{3}{4} \\
v_{2}=2\texteuro & w_{2}=3kg & \implies r_{2}=\frac{2}{3} \\
v_{3}=2\texteuro & w_{3}=3kg & \implies r_{3}=\frac{2}{3}
\end{matrix}
$$
The **optimal** solution is to steam objects 2 and 3 for a total of 4 euros, but the **greedy** strategy will steal object 1 for a total of 3.
## Greedy Algorithm Correctness over Fractional Knapsack
Consider the following:
$n$ items are sorted by $r_{i}=v_{i}\div w_{i}$ in non-increasing order:
$$
r_{1}\geq r_{2}\geq\dots\geq r_{n}
$$
2 items $p,q$ with $r_{p}=r_{q}$ are considered to be equivalent. Hence, we can assume:
$$
r_{1}>r_{2}>\dots>r_{n}
$$
The total available amount of item $i$ is $w_{i}$. Let $k$ be such that:
$$
w_{1}+\dots+w_{k}\leq W,\space w_{1}+\dots+w_{k+1}>W
$$
As we assumed, the knapsack is not big enough to carry all items, so we know such a $k$ exists.
Let $x=(x_{1},\dots,x_{n})$ denote a solution $0\leq x_{i}\leq w_{i}$ which is the amount the thief takes of item $i$ for $i=1,\dots,n$.
The total value stolen is then $\sum_{i=1}^{n}r_{i}x_{i}$.
The **greedy** solution $x$ is given by:
$$
\begin{matrix}
x_{i}=w_{i} & \text{for }1\leq i\leq k \\
x_{k+1}=W-(w_{1}+\dots+w_{k}) \\
x_{i}=0 & \text{for }k+2\leq i\leq n
\end{matrix}
$$
Let $x^{*}=(x_{1}^{*},\dots,x_{n}^{*})$ be an **optimal** solution. Note that we must have $x_{1}^{*}+\dots+x_{n}^{*}=W$. We will show that $x=x^{*}$.

Suppose that $x^{*}\neq x$. Then:
+ $x_{i}^{*}<x_{i}$ for some $i\leq k+1$; let $j=\operatorname{min}(i:x_{i}^{*}<x_{i})$.
+ Also, $x_ℓ^{*}>x_{ℓ}$ for some $ℓ>j$.

Let us now add more of item $j$ to the optimal choice. Let $y$ be another solution, defined by:
$$
\begin{cases}
y_{j} & = & \operatorname{min}(w_{j},x_{j}^{*}+(x_{ℓ}^{*}-x_{ℓ})) \\
y_{ℓ} & = & x_{ℓ}^{*}-(y_{j}-x_{j}^{*}) \\
y_{i} & = & x_{i}^{*}\text{ otherwise}
\end{cases}
$$
We check that:
+ $y$ is a valid solution: that $0\leq y_{i}\leq w_{i}$ for all $1\leq i\leq n$ and that $y_{1}+\dots+y_{n}=W$;
+ $y$ is a better solution that $x^{*}$: that $\sum_{i=1}^{n}r_{i}y_{i}>\sum_{i=1}^{n}r_{i}x_{i}^{*}$. This is a contradiction, so $x=x^{*}$.
## 0-1 Knapsack Special Case
Suppose that in an instance of 0-1 knapsack, the orders of the items when
1. sorted by **decreasing** value $v_{i}$;
2. sorted by **increasing** wight $w_{i}$;

are the same: ie, $v_{1} \geq v_{2} \geq \dots\geq v_{n}$ and $w_{1}\leq w_{2}\leq\dots\leq w_{n}$. A similar greedy algorithm can solve 0-1 knapsack in this instance.