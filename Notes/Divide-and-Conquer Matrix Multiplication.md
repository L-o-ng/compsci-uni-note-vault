#notes 

We are interested in the following problem:
+ We have input: 2 square matrices $A,B \in \mathbb{R}^{n\times n}$;
+ We want output: their product $C \in \mathbb{R}^{n\times n}$.

We can do this in time $\Theta(n^{3})$ by using this definition: 
$$c_{ij}=\sum_{k=1}^{n} a_{ik}b_{kj}$$
## Simple Divide-And-Conquer Approach
We partition $A,B,C$ into 4 parts called **block matrices**:
$$
A=\begin{pmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{pmatrix},\quad
B=\begin{pmatrix}
B_{11} & B_{12} \\
B_{21} & B_{22}
\end{pmatrix},\quad
C=\begin{pmatrix}
C_{11} & C_{12} \\
C_{21} & C_{22}
\end{pmatrix}
$$
Now we have:
$$
\begin{align}
C_{11}&=A_{11}B_{11}+A_{12}B_{21} \\
C_{12}&=A_{11}B_{12}+A_{12}B_{22} \\
C_{21}&=A_{21}B_{11}+A_{22}B_{21} \\
C_{22}&=A_{21}B_{12}+A_{22}B_{22}
\end{align}
$$
```
fn mult 
in matrices A, B
op matrix C
	let C be a new n*n matrix
	if n = 1 then
		C11 <- A11 * B11
	else
		partition A,B,C into block matrices
		C11 ← MULT(A11, B11) + MULT(A12, B21)  
		C12 ← MULT(A11, B12) + MULT(A12, B22)  
		C21 ← MULT(A21, B11) + MULT(A22, B21)  
		C22 ← MULT(A21, B12) + MULT(A22, B22)
	endif
	return C
```

We have 8 multiplication of $\frac{n}{2}\times \frac{n}{2}$ matrices and 4 matrix additions each taking time $\Theta\left( \frac{n}{2}\times \frac{n}{2} \right)=\Theta(n^{2})$. This gives us a recurrence:
$$
T(n)=8T\left( \frac{n}{2} \right)+\Theta(n^{2})
$$
The [[Master Theorem]] implies $T(n)=\Theta(n^{3})$.
## Strassen's Algorithm
In 1969, Strassen introduced a sophisticated divide-and-conquer approach. It has 4 steps:
1. Divide $A,B,C$ into 4 parts as before, with runtime $\Theta(1)$;
2. Create 10 auxiliary matrices $S_{1},\dots,S_{10}\in \mathbb{R}^{n/2\times n/2}$, obtained by sums or differences of $A_{11},\dots,A_{22}$, with runtime $\Theta(n^{2})$;
3. Using all available matrices, recursively compute 7 product matrices $P_{1},\dots,P_{7}\in \mathbb{R}^{n/2\times n/2}$, with runtime $7T\left( \frac{n}{2} \right)$;
4. Compute $C_{11},\dots,C_{22}$ by adding/subtracting combinations of $P_{1},\dots,P_{7}$, with runtime $\Theta(n^{2})$.

Thus, we have a recurrence:
$$
T(n) \leq 7T\left( \frac{n}{2} \right)+\Theta(n^{2})
$$
By the [[Master Theorem]], we obtain:
$$
T(n)=\Theta(n^{\log_{2}7})=\Theta(n^{2.8074})
$$
![[Strassens Algorithm.png]]
