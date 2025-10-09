#notes 

Probability is built upon the theory of sets and the theory of counting.
It appears in many areas of computer science:
+ Complexity of algorithms;
+ IP address supply and demand;
+ Complexity of passwords and phrases;
+ Storage space for enumerated objects;
+ etc..
## Principles of Counting
### The Product Rule
#### Simplified
If a procedure can be broken into a sequence of two tasks:
+ $n_{1}$ ways to do the first task;
+ $n_{2}$ ways to do the second task;
+ There are $n_{1}n_{2}$ ways to complete the procedure.
#### Generalised
>If a sequence of tasks $T_{1},T_{2},\dots,T_{m}$ can be done in $n_{1},n_{2},\dots,n_{m}$ ways, respectively, and every task arrives after the occurrence of the previous task, then there are $\Pi^{m}_{i=1}n_{i}$ ways to perform the task.
### The Sum Rule
#### Simplified
Consider two independent sub-tasks where we only need to do one of the two. If the first task can be done in $n_{1}$ ways and the second task can be done in $n_{2}$ ways then there are $n_{1}+n_{2}$ ways to finish the task.
#### Generalised
>If a sequence of tasks $T_{1},T_{2},\dots,T_{m}$ can be done in $n_{1},n_{2},\dots,n_{m}$ ways respectively under the condition that no tasks can be performed simultaneously, then the number of ways to do one of these tasks is $\sum_{i=1}^{m}n_{i}$
### Inclusion-Exclusion Principle
If two tasks can be done at the same time (unlike the sum rule where they are independent) then there is a possibility of over-counting since some ways may be counted twice. We add up the number of ways to do each task, then subtract the number of ways to do both tasks.
$$
|A \cup B|=|A|+|B|-|A\cap B|
$$
### Permutation and Combination
#### Permutations
A permutation is a counting of distinct objects in an ordered arrangement. An ordered arrangement of $r$ elements is called $r$-permutation.
The number of $r$-permutations of a set with $n$ distinct elements is:
$$
P(n,r)=n\times(n-1)\times(n-2)\times\dots \times(n-r-1)
$$
Here, we have $n$ elements: we want to choose $r$ elements and order is important, so $a,b \not \equiv b,a$.
More simply, we have:
$$
P(n,r)=\frac{n!}{(n-r)!}
$$
##### Indistinguishable Elements
Suppose a set consists of $n$ objects, of which $n_{1}$ are of one type, $n_{2}$ are of a second type, and so on to $n_{k}$ being of a $k$th type. Here, $n=n_{1}+n_{2}+\dots+n_{k}$.
The number of different permutations of the objects is:
$$
P(n,n_{1},n_{2},\dots,n_{k})=\frac{n!}{n_{1}!n_{2}!\cdots n_{k}!}
$$
#### Combinations
A combination is a counting of distinct objects in an unordered arrangement; an unordered arrangement of $r$ elements is an $r$-combination.
The number of $r$-combinations of a set with $n$ distinct elements is:
$$
C(n,r)=(^n_{r})=\frac{n!}{(n-r)!\times r!}
$$
Here, we have $n$ elements and we want to choose $r$ elements with no order. Unordered here means $a,b \equiv b,a$.

