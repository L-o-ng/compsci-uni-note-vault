#notes 
## Normal Matrix Multiplication
Let $A$ be a $p\times q$ matrix, and $B$ a $q'\times r$ matrix:
$$
A=\begin{pmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,q} \\
a_{2,1} & a_{2,2} & \cdots & a_{2,q} \\
\vdots & \vdots & \ddots & \vdots \\
a_{p,1} & a_{p,2} & \cdots & a_{p,q}
\end{pmatrix},\,
B=\begin{pmatrix}
b_{1,1} & b_{1,2} & \cdots & b_{1,r} \\
b_{2,1} & b_{2,2} & \cdots & b_{2,r} \\
\vdots & \vdots & \ddots & \vdots \\
b_{q',1} & b_{q',2} & \cdots & b_{q',r}
\end{pmatrix}
$$
Their product $C=AB$ is:
+ *Not* defined if $q\neq q'$;
+ Is the $p\times r$ matrix if $q=q'$, where: $$c_{i,j}=\sum_{k=1}^{q} a_{i,k}b_{k,j}$$
### Algorithm
```
fn multiply
in p*q matrix a, q'*r matrix b
op matrix c = ab, if q=q'
	if q != q' then
		return error
	else
		let c <- new p*r matrix
		for i <- 1 to p do
			for j <- 1 to r do
				c_ij <- 0
				for k <- 1 to q do
					c_ij = c_ij + a_ik * b_kj
				endfor
			endfor
		endfor
		return c
	endif
```
We have $pq'r$ scalar multiplications with this algorithm.
### Parenthesising Optimisation
Matrix multiplication is associative. If we have matrices $A_{1}A_{2}A_{3}$ with dimensions: $A_{1}:10\times 100,A_{2}:100\times 5,A_{3}:5\times 30$ then we have 2 ways of parenthesising:
1. $((A_{1}A_{2})A_{3})$ requires $(10\times 100\times 5)+(10\times 5 \times 50)=7500$ multiplications;
2. $(A_{1}(A_{2}A_{3}))$ requires $(100\times 5\times 50)+(10\times 100\times 50)=75000$ multiplications.

This is the crux of the problem.
## Matrix Chain Multiplication
We are given a chain $\langle A_{1},\dots,A_{n}\rangle$ of $n$ compatible matrices to be multiplied. We wish to compute $A_{1}A_{2}\dots A_{n}$, where $A_{i}$ is a $P_{i-1}\times p_{i}$ matrix with the smallest number of operations. ==Where should we place the parentheses to achieve this==?

A product of matrices is fully parenthesised if it is:
+ Either a single matrix, where $n=1$;
+ Or the product of 2 fully parenthesised matrix products surrounded by parentheses.
### Ways to Parenthesise
Let $P(n)$ denote the number of ways to parenthesise $n$ chained matrices. A fully parenthesised product is the product of 2 fully parenthesised sub-products. The **split** occurs between the $k$th and $(k+1)$th matrices, where $1\leq k\leq n-1$.
For example:
$$
\eqalign {
P(4)&=P(1)P(3)&+P(2)P(2)&+P(3)P(1)& \\
&=1\times 2&+1\times 1&+2\times 1&=5
}
$$
This gives the recurrence:
$$
P(n)=\begin{dcases}
1,\quad&\text{if }n=1 \\
\sum_{k=1}^{n-1} P(k)P(n-k),\quad&\text{if }n\geq 2
\end{dcases}
$$
We have $P(n)=C_{n-1}$ where $C_{n}$ is the $n$th Catalan number:
$$
C_{n}=\frac{1}{n+1}(^{2n}_{n})\sim \frac{4^{n}}{n^{3/2}}
$$
Brute force hence has exponential runtime.
### Applying Dynamic Programming
We apply dynamic programming via a 4-step sequence:
1. Characterise the structure of an optimal solution;
2. Recursively define the value of an optimal solution;
3. Compute the value of an optimal solution;
4. Construct an optimal solution from computed information.
#### Step 1 - Optimal Structure
For $i\leq j$ we denote $A_{i..j}=A_{i}A_{i+1}\dots A_{j}$.
To parenthesise $A_{i..j}$ we must split the product between $A_{k}$ and $A_{k+1}$ for some $i\leq k\leq j$.
Our **optimal substructure**: 
+ To optimally parenthesise $A_{i..j}$ suppose we *split* the product between $A_{k}$ and $A_{k+1}$;
+ Both parenthesisations of $A_{i..k}$ and $A_{k+1..j}$ must be **optimal**.

The cost of the optimal solution for $A_{i..j}$ is therefore:
+ The cost to optimally parenthesise $A_{i..k}$;
+ Plus the cost to optimally parenthesise $A_{k+1..j}$;
+ Plus the cost of **multiplying** them together.
#### Step 2 - Recursive Solution
Let $m[i,j]$ be the minimum number of multiplications required to compute $A_{i..j}$. Our goal is to compute $m[1,n]$. We compute $m[i,j]$ for $i\leq j$ recursively:
$$
m[i,j]=\begin{dcases}
0,\quad&\text{if }i=j \\
\min_{i\leq k<j}\{ m[i,k]+m[k+1,j],p_{i-1}p_{k}p_{j} \}
\end{dcases}
$$
If $i=j$, we have one matrix $A_{i}$, so $m[i,i]=0$.
If $i<j$:
+ Check all possible indices $k$ where to cut;
+ Recall that $A_{k}$ is a $p_{k-1}\times p_{k}$ matrix.
#### Step 3 - Computing the Optimal Costs
There are only a few distinct sub-problems:
+ One for every pair of $i,j \implies \Theta(n^{2})$ sub-problems;
+ Overlapping sub-problems: use the same ones repeatedly.

Let us use the **bottom-up** approach:
+ **Input**: A sequence $p=\langle p_{0},p_{1},\dots,p_{n}\rangle$;
+ **Output**: The minimum number of multiplications required to compute the chain multiplication;
+ **Idea**: Computing $m[i,j]$ for a product of $j-i+1$ matrices only uses values for products of **fewer** than $j-i+1$ matrices;
	+ We can order the sub-problems by their **chain length** $\mathscr{l}=j-i+1$.

```
fn matrix_chain_order
in sequence p
op table m
	let m[1..n, 1..n] be a new table
	for i <- 1 to n do
		m[i,i] <- 0
	endfor
	for l <- 2 to n do
		for i <- 1 to n-l+1 do
			j <- i + l - 1
			m[i,j] <- INFTY
			for k <- i to j-1 do
				m[i,j] <- MIN(m[i,j], m[i,k]+m[k+1,j]+p[i-1]*p[k]*p[j])
			endfor
		endfor
	endfor
	return m
```
We have determined the minimum number of multiplications. Now we want to know *how* to parenthesise. It is easy to modify this function to track *where* we place parentheses.
+ For every $i,j$ we can store the cut point $k$;
+ We have an additional array $s[i,j]$ which tracks $k$ values.

```
fn matrix_chain_order
in sequence p
op table m and table s
	for i <- 1 to n do
		m[i,i] <- 0
	endfor
	for l <- 2 to n do
		for i <- 1 to n-l+1 do
			j <- i + l - 1
			m[i,j] <- INFTY
			for k <- i to j-1 do
				q <- m[i,k] + m[k+1,j] + p[i-1]*p[k]*p[j]
				if q < m[i,j] then
					m[i,j] <- q
					s[i,j] <- k
				endif
			endfor
		endfor
	endfor
	return m, s
```
We have 3 nested loops giving a runtime of $O(n^{3})$. This can be proved to be tight: $\Theta(n^{3})$.
#### Step 4 - Optimal Solution
The table `s` gives us the information to print out the correct parenthesisation.
```
fn print_par
in s, i, j
op parenthesised sequence
	if i = j then
		print A_i
	else
		print "("
		print_par(s, i, s[i,j])
		print_par(s, s[i,j] + 1, j)
		print ")"
	endif
```
This has runtime $O(n)$.
##### Top-Down Memoised Version
```
fn memo_matrix
in m, p, i, j
op m[i, j]
	if m[i,j] < INFTY then // ie if it is previously computed
		return m[i,j]
	endif
	if i = j then
		m[i,j] <- 0
	else
		for k <- i to j-1 do
			m[i,j] <- MIN(m[i,j], memo_matrix(m,p,i,k)+memo_matrix(m,p,k+1,j)+p[i-1]*p[k]*p[j])
		endfor
	endif
	return m[i,j]
```
This has runtime $O(n^{3})$
