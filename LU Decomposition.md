#notes #homework-needed 

>An **LU Decomposition** of a square matrix $A$ is a product representation $A=LU$ where $L$ is *lower triangular* and $U$ is *upper triangular*.

For example, $$A=\begin{pmatrix}2&6&2\\-3&-8&0\\4&9&2\end{pmatrix}=\begin{pmatrix}2 & 0 & 0 \\-3 & 1 & 0 \\4 & -3 & 7\end{pmatrix}\begin{pmatrix}1 & 3 & 1 \\0 & 1 & 3 \\0 & 0 & 1\end{pmatrix}=LU$$
## Applications
### Solving Linear Systems
Assume that we know an LU-decomposition $A=LU$.
Consider the following algorithm for solving the linear system $A\mathbf{x}=\mathbf{b}$:
1) Rewrite $A\mathbf{x}=\mathbf{b}$ as $LU\mathbf{x}=\mathbf{b}$.
2) Denote $U\mathbf{x}=\mathbf{y}$ and substitute it in $LU\mathbf{x}=\mathbf{b}$ to obtain $L\mathbf{y}=\mathbf{b}$.
3) Solve the **triangular** linear system $L\mathbf{y}=\mathbf{b}$ for $\mathbf{y}$.
4) Now we know $\mathbf{y}$ and can solve the **triangular** linear system $U\mathbf{x}=\mathbf{y}$ for $\mathbf{x}$.
#### Example
$$
\array{
Q:&\text{Solve the following linear system }A\mathbf{x}=\mathbf{b}:\\
&\begin{pmatrix}2 & 6 & 2 \\-3 & -8 & 0 \\4 & 9 & 2\end{pmatrix}\begin{pmatrix}x_{1} \\x_{2} \\x_{3}\end{pmatrix}=\begin{pmatrix}2 \\2 \\3\end{pmatrix} \\
A:&\text{First find its LU Decomposition - here:}\\
&A=\begin{pmatrix}2&6&2\\-3&-8&0\\4&9&2\end{pmatrix}=\begin{pmatrix}2 & 0 & 0 \\-3 & 1 & 0 \\4 & -3 & 7\end{pmatrix}\begin{pmatrix}1 & 3 & 1 \\0 & 1 & 3 \\0 & 0 & 1\end{pmatrix}=LU\\
1:&\text{Rewrite the system as: }\\
&\begin{pmatrix}2 & 0 & 0 \\-3 & 1 & 0 \\4 & -3 & 7\end{pmatrix}\begin{pmatrix}1 & 3 & 1  \\0 & 1 & 3 \\0 & 0 & 1\end{pmatrix}\begin{pmatrix}x_{1} \\x_{2} \\x_{3}\end{pmatrix}=\begin{pmatrix}2 \\2 \\3\end{pmatrix}\\
2:&\text{Now say }U\mathbf{x}=\mathbf{y}, L\mathbf{y}=\mathbf{b}\\
&\begin{pmatrix}2 & 0 & 0 \\-3 & 1 & 0 \\4 & -3 & 7\end{pmatrix}\begin{pmatrix}y_{1} \\y_{2} \\y_{3}\end{pmatrix}=\begin{pmatrix}2 \\2 \\3\end{pmatrix}\\3:&\text{Solve for }\mathbf{y}:\\ &\eqalign{y_{1}&=1\\ -3y_{1}+y_{2}&=2\\ y_{2}&=5\\ 4-15+7y_{3}&=3\\ 7y_{3}&=14\\ y_{3}&=2\\ }\\ \text{So}&\\&\begin{pmatrix}y_{1} \\ y_{2} \\ y_{3}\end{pmatrix}=\begin{pmatrix}1 \\5 \\2\end{pmatrix}\\4:&\text{Substitute back and solve for }\mathbf{x}:\\&\begin{pmatrix}1 & 3 & 1 \\0 & 1 & 3 \\0 & 0 & 1\end{pmatrix}\begin{pmatrix}x_{1} \\ x_{2}\\x_{3}\end{pmatrix}=\begin{pmatrix}1\\5\\2\end{pmatrix}\\&\eqalign{x_{3}&=2\\ x_{2}+6&=5\\x_{2}&=-1\\x_{1}+3x_{2}+x_{3}&=1\\x_{1}&=2}\\ \text{So}&\\&\begin{pmatrix}x_{1} \\x_{2} \\x_{3}\end{pmatrix}=\begin{pmatrix}2 \\-1 \\2\end{pmatrix}}$$
This method reduces solving a linear system into 2 triangular systems. It is widely used in scientific computing to solve mid-size linear systems.
## Finding an LU-Decomposition
Let $A$ be a square matrix and $U$ its non-reduced [[Augmented Matrices and Elementary Row Operations#Row Echelon Form|row echelon form]], obtained by [[Gaussian Elimination]]. $U$ here is **always** *upper triangular*.

>If $A$ and $U$ are as above and **no row exchanges** were performed while obtaining $U$ from $A$, then $A$ can be factored $A=LU$, where $L$ is lower triangular.

We exchange rows while computing $U$ only when 0 is in a pivot position - this can never happen due to the no row exchange condition.
### Process
1) Keep track of the row operations used to compute $U$.
2) Let $E_{1}\dots E_{k}$ be the corresponding elementary matrices, with $E_{1}$ corresponding to the first row operation and $E_{k}$ to the last.
3) Then the inverse elementary matrices $E_{1}^{-1},\dots,E_{k}^{-1}$ are easy to find.
4) Compute $L=E_{1}^{-1}\cdots E_{k}^{-1}$ by applying the corresponding row operations, starting from $E_{k}^{-1}$ to the identity matrix $I$.
#### Example
$$
A=\begin{pmatrix}
2 & -4 \\
3 & -2
\end{pmatrix}=\begin{pmatrix}
2 & 0 \\
3 & 4
\end{pmatrix}\begin{pmatrix}
1 & -2 \\
0 & 1
\end{pmatrix}=LU
$$
Note that entries in $L$ can be computed in parallel to computing $U$, in the same order as we create 1s and 0s in $U$.
$$
I=\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}\to \begin{pmatrix}
2 & 0 \\
0 & 1
\end{pmatrix}\to \begin{pmatrix}
2 & 0 \\
3 & 1
\end{pmatrix}\to \begin{pmatrix}
2 & 0 \\
3 & 4
\end{pmatrix}=L
$$
todo! Permutation matrices onwards
