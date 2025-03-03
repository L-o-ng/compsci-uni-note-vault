#notes 

In keeping with the [[Selection Sort]] example:

There are an infinite number of different inputs to selection sort; we should have a **worst-case upper bound** $b$, so that no matter what our input, the algorithm always exits in $b$ units of time.
	This is actually **not** possible! Consider, for example, that a list of $\frac{b}{c}+1$ numbers takes $c\left( \frac{b}{c}+1 \right)>b$ units of time to output.
So, to work around this, ==we group inputs by size: a natural number reflecting the natural size of the input.==
We can then express the *worst-case upper bound* as a function:$$
f:\Bbb{N}\to \Bbb{N}
$$So that any input of size $n$ is such that selection sort terminates in at most $f(n)$ units of time.
## Fundamental Assumption
>We assume:
>	The size of an input is the number of *basic* objects it contains.
>	The time taken by an algorithm is strongly influenced by and increases with input size.
## An Example
![[Selection Sort Worst Case Upper Bound Analysis.png]]
1) Fix the size of the input at $n$
	1) iteration of outer while loop: `pass -> pass + 1`
	2) iteration of inner while loop: `i -> i + 1`
	3) 1st iteration of outer while loop iterates $n-1$ times.
	4) 2nd iteration runs $n-2$ times.
2) So, 
	1) total number of iteration of the outer while loop is $n-1$.
	2) And for the inner while loop, $(n-1)+(n-2)+\dots+2+1=\frac{n(n-1)}{2}$
	3) The worst case scenario is the boolean condition evaluating to `true`.
So the total time taken on input $[n,n-1,n-2,\dots,2,1]$ is:
$$
\eqalign{\leq f_{s}(n)&=\left[ \frac{6cn(n-1)}{2}+c(n-1) \right]+[5c(n-1)+c]+cn+c \\ &=c(3n^2+4n-4)\text{ units of time}}
$$
## Usage
How can we use this time complexity?
Suppose we only had this one sorting algorithm:
	The main use of time complexity is to compare sorting algorithms.
	Suppose we now had another algorithm, say $X$, with time complexity $g_{X}(n)=c(n^3-4n^2+10)$.
	Suppose also we intend to run implementations of **both** algorithms on the same machine.
	Which should we use?
### Deciding Which Algorithm to Use
When $n \leq 7$, we have $g_{X}(n)<f_{s}(n)$, but when $n \geq 8$, we have $f_{s}(n)<g_{X}(n)$; so we use selection sort, as it grows better as input size increases.
The decision does not depend on actual function constants, nor $c$, but rather that the constant $n^3$ in $g_{X}$ eventually dominates $n^2$ in $f_{s}$.
