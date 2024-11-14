#notes 

The **augmented matrix** of a linear system is the matrix: 
$$
(A|\mathbf{b})=\left(\begin{array}{cccc|c}
a_{11}&a_{12}&\dots&a_{1n}&b_{1} \\
a_{21}&a_{22}&\dots&a_{2n}&b_{2} \\
\vdots&\vdots&\ddots&\vdots&\vdots \\
a_{m 1}&a_{m 2}&\dots&a_{mn}&b_{m}
\end{array}\right)
$$
---

The basic method for solving a *linear system* is to perform algebraic operations on the system that: 
1) *Do not alter* the solution set.
2) Produce *increasingly simpler* systems.
Typically, the operations are:
+ Multiply an equation through by a non-zero constant.
+ Interchange two equations.
+ Add a constant times one equation to another.
This corresponds to **elementary row operations** on the augmented matrix:
+ Multiply a *row* though by a non-zero constant.
+ Interchange two *rows*.
+ Add a constant times one *row* to another.
## Row Echelon Form
Assume that we transform the augmented matrix of a linear system in variables $x,y,z$ to the form: 
$$
\left(
\begin{array}{ccc|c}
1&0&0&1 \\
0&1&0&2 \\
0&0&1&3
\end{array}
\right)
$$Then we know the solution: $x=1,y=2,z=3$.
A matrix is in its **row echelon form**, or **ref** if it has the following properties:
+ If a row is not all 0s then the first non-zero number in it is 1 (the **leading 1**).
+ The rows that are all 0s, if any, are grouped together at the bottom.
+ If two successive rows are not all 0s, then the leading 1 of the higher row occurs further to the left than the leading 1 of the lower row.
Additionally, a matrix is in **reduced ref**, or **rref** if:
+ It is already in ref.
+ Each column that contains a leading 1 has 0s everywhere else.
>So, to solve linear systems, use **elementary row operations** to *transform* the augmented matrix to (r)ref.
### Extracting Solutions
Assume that we have transformed the augmented matrix of a linear system to a (r)ref. For examples, 
$$
\left(
\begin{array}{ccc|c}
1&0&0&2 \\
0&1&0&5 \\
0&0&0&1 \\
0&0&0&0
\end{array}
\right)\quad
\left(
\begin{array}{ccc|c}
1&0&0&2 \\
0&1&0&5 \\
0&0&1&1 \\
0&0&0&0
\end{array}
\right)\quad
\left(
\begin{array}{ccc|c}
1&-1&0&2 \\
0&0&1&5 \\
0&0&0&0 \\
0&0&0&0
\end{array}
\right)
$$
We have the following possibilities:
+ Some row has a leading 1 in the last column.
  Then the system includes equation $0\cdot x_{1}+\dots+0\cdot x_{n}=1$.
  Then we know the system has no solutions.
+ The number of leading 1s is equal to the number of variables, and there is no leading 1 in the last column.
  Then the system has a unique solution.
+ The number of leading 1s is smaller than the number of variables, and there is no leading 1 in the last column.
  Then the system has infinitely many solutions.
### General Solution
Assume a matrix in rref is as follows:
$$
\left(
\begin{array}{cccc|c}
1&-1&0&2&2 \\
0&0&1&-1&5 \\
0&0&0&0&0 \\
0&0&0&0&0
\end{array}
\right)
$$
In equations, this is $$\begin{align}
x_{1}-x_{2}+2x_{4}&=2 \\
x_{3}-x_{4}&=5
\end{align}$$
+ The variables corresponding to the leading 1s, here $x_{1}$ and $x_{3}$ are the **leading variables**.
+ The other 3 are **free variables**.
+ Generally, the solution is the leading variables expressed by the free variables.
+ For the above system, $x_{1}=x_{2}-2x_{4}+2,x_{3}=x_{4}+5$, $x_{2},x_{4}$ are arbitrary numbers.

