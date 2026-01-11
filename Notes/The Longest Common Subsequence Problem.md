#notes 

A strand of DNA consists of a string of molecules, each one of four **bases**. For us, this is a string over a finite set $\{ A,C,G,T \}$. Take for example, two strings from *different* organisms:
+ $S_{1}=\text{ACCGGTCGAGTGCGCGGAAGCCGGCCGAA}$;
+ $S_{2}=\text{GTCGTTCGGAATGCCGTTGCTCTGTAAA}$.

We want to know how **similar** these strings are, to see how related the organisms are. There are many ways to measure this similarity:
+ If one is a **substring** of the other - an instance of the **string matching** problem;
+ The bounded **number of changes** to turn one into the other - an instance of the **edit distance** problem.

Our measure will be the length of the **longest common subsequence**. Here, on $S_{1},S_{2}$, we have: 
$$
S_{3} = \text{GTCGTCGGAAGCCGGCCGAA}
$$
## Formal Definition
Given sequence $X=\langle x_{1},\dots,x_{m}\rangle$, sequence $Z=\langle z_{1},\dots,z_{k}\rangle$ is a subsequence of $X$ if for some $i_{1}<i_{2}<\dots<i_{k}$ we have $z_{1}=x_{i_{1}},\dots,z_{k}=x_{i_{k}}$.
Items in the subsequence are not necessarily consecutive!
A **common** subsequence of $X,Y$ is a subsequence of both $X$ and $Y$.
### Example
We have $X=\langle A,B,C,B,D,A,B \rangle$, $Y=\langle B,D,C,A,B,A \rangle$, then some of their common subsequences are:
+ $\langle B,C,A \rangle$;
+ $\langle B,C,B,A \rangle$;
+ $\langle B,D,A,B \rangle$.

In the longest common subsequence problem, we have:
+ **Input**: two sequences $X,Y$;
+ **Goal**: find a longest common subsequence $Z$ of $X,Y$.
## Naive Implementation
We can use a brute force approach:
1. Enumerate all subsequences $Z$ of $X$;
2. Check whether $Z$ is also a subsequence of $Y$.

If $X$ has $m$ indices, we have $2^{m}$ subsets of $\{ 1,2,\dots,m \}$, and so exponential time.
This is **terrible**!
## Dynamic Programming for the Optimal Solution
### Step 1: Characterising an LCS
Let $Z=\langle z_{1},\dots,z_{k} \rangle$ be an LCS of $X=\langle x_{1},\dots,x_{m}\rangle$, and $Y=\langle y_{1},\dots,y_{n} \rangle$.
1. If $x_{m}=y_{n}$ then:
	1. $z_{k}=x_{m}=y_{n}$;
	2. $Z_{k-1}$ is an LCS of $X_{m-1}$ and $Y_{n-1}$.
2. If $x_{m}\neq y_{n}$ then:
	1. $z_{k}\neq x_{m}$ implies that $Z$ is an LCS of $X_{m-1}$ and $y$.
3. If $x_{m}\neq y_{n}$ then:
	1. $z_{k}\neq y_{n}$ implies that $Z$ is an LCS of $X$ and $U_{n-1}$.

One of the above is **always** true.
#### Optimal Substructure and Overlapping Sub-problems
The way the theorem characterises an LCS shows that an LCS of $X,Y$ contains within it an LCS of some prefixes of $X,Y$: an *optimal substructure*!
We always have to examine *one* or *two* sub-problems:
1. If $x_{m}=y_{n}$ we must find an LCS of $X_{m-1}$ and $Y_{n-1}$;
2. If $x_{m}\neq y_{n}$ we must find:
	1. An LCS of $X_{m-1}$ and $Y$;
	2. An LCS of $X$ and $Y_{n-1}$;
	3. We keep whichever is longer.

We may need to find LCSs of $\{ X_{m-1},Y \}$ and of $\{ X,Y_{n-1} \}$. Each of these sub-problems has the sub-problem of finding an LCS of $\{ X_{m-1},Y_{n-1} \}$. ==Many other sub-problems share common sub-problems==.
### Step 2: A Recursive Solution
Let $c[i,j]$ be the length of an LCS of the prefixes $X_{i}$, $Y_{j}$:
The theorem implies:
$$
c[i,j]=\begin{dcases}
0&\text{if }i=0\text{ or }j=0 \\
c[i-1,j-1]+1&\text{if }i,j>0\text{ and }x_{i}=y_{j} \\
\max\{ c[i,j-1],c[i-1,j] \}&\text{if }i,j>0\text{ and }x_{i}\neq y_{j}
\end{dcases}
$$
Unlike [[The Rod-Cutting Problem]] and [[The Matrix Chain-Multiplication Problem]], here we rule out some sub-problems based on the conditions of the problem.
This recursive equation gives an **exponential-time** algorithm, but there are $\Theta(mn)$ distinct sub-problems. This gives rise to dynamic programming.
### Step 3: Computing the length of an LCS 
We shall use a bottom-up approach. We have input sequences $X,Y$.
The algorithm:
1. Stores the values $c[0..m, 0..n]$: the lengths of the various LCSs;
2. Maintains the table $b[1..m,1..n]$ where $b[i,j]$ points to the next pair $(i,j)$ whilst reconstructing the LCS;
3. The optimum solution is $c(m,n)$.

In our bottom-up approach, table $c$ is computed in a row-major order, so we first fill in the first row from left-to-right, then the second one, and so on.
```
fn LCS 
in sequences X, Y
op LCS 
	Let b[1..m, 1..n] and c[0..m, 0..n] be new tables
	for i <- 1 to m do
		c[i, 0] <- 0
	endfor
	for j <- 1 to n do
		c[0, j] <- 0
	endfor
	for i <- 1 to m do
		for j <- 1 to n do
			if x_i = y_j then
				c[i, j] <- c[i-1, j-1] + 1
				b[i, j] <- upper-left subproblem
			else if c[i-1, j] >= c[i, j-1] then
				c[i,j] <- c[i-1, j]
				b[i,j] <- upper subproblem
			else
				c[i,j] <- c[i, j-1]
				b[i,j] <- left subproblem
			endif
		endfor
	endfor
	return c, b
```

![[LCS table.png]]
It is fairly easy to print out the LCS from this table. We now have runtime $O(m+n)$.