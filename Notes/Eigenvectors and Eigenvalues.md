#notes 
## Simply Put,
Consider the [[Markov Chains and Processes#An Example Weather|weather example]].
The long range forecast is $\mathbf{w}_{\infty}$.
We can write $T\mathbf{w}_{\infty}=\mathbf{w}_{\infty}$
>$\mathbf{w}_{\infty}$ is an **eigenvector** with **eigenvalue** 1.
>In general, if $A\mathbf{x}=\lambda \mathbf{x}$ then $\mathbf{x}$ is an *eigenvector* of $A$ with *eigenvalue* $\lambda$.
### Basis of Eigenvectors
If we can find a basis of eigenvectors, then:
+ The matrix representation for that basis is *diagonal*.
+ The change of basis matrix $P$ is *invertible*.
+ We can write $A=PDP^{-1}$ where $D$ is diagonal.
### Advantages of Diagonalisation
+ Diagonal matrices are easy to store, as they are sparse.
+ Diagonal matrix multiplication is $O(n)$.
	+ $A^n=(P DP^{-1})^n=P D^nP^{-1}$
+ It is much quicker to find powers of matrices.
## In Depth

>Let $A$ be an $n\times n$ matrix. A **non-zero** vector $\mathbf{x}\in \Bbb{R}^{n}$ is called an *eigenvector* of $A$ (or equivalently of the operator $T_{A}:\Bbb{R}^{n}\to \Bbb{R}^{n}$) if, for some scalar $\lambda$: $$A\mathbf{x}=\lambda \mathbf{x}\equiv T_{A}(\mathbf{x})=\lambda \mathbf{x}$$
>In this case, $\lambda$ is called an **eigenvalue** of $A$ and of $T_{A}$ and $\mathbf{x}$ is an **eigenvector corresponding to** $\lambda$.

Note that:
+ The assumption $\mathbf{x}\neq 0$ is necessary to avoid the case $A0=\lambda 0$ which always holds.
+ The meaning of the notion is that $T_{A}$ does not change the direction of $\mathbf{x}$ (up to reversal) - it only scales $\mathbf{x}$ by $\lambda$.
### Intuitively
Consider a [[Linear Maps|linear mapping]] $A$.
When applied to a vector $\mathbf{v}$ it might cause rotation and scaling.
All vectors $\mathbf{v}$ that are only scaled are called the eigenvectors, with their eigenvalues being how much that vector $\mathbf{v}$ is scaled by.
### Example
Say:
$$
\mathbf{x}=\begin{pmatrix}
1 \\
2
\end{pmatrix}\text{ is an eigenvector of }A=\begin{pmatrix}
3 & 0 \\
8 & -1
\end{pmatrix}\text{ corresponding to eigenvalue 3}
$$
Indeed, 
$$
A\mathbf{x}=\begin{pmatrix}
3 & 0 \\
8 & -1
\end{pmatrix}\begin{pmatrix}
1 \\
2
\end{pmatrix}=\begin{pmatrix}
3 \\
6
\end{pmatrix}=3\mathbf{x}
$$
## Linear (In)Dependency
>If vectors $\mathbf{v}_{1},\dots,\mathbf{v}_{n}$ are eigenvectors of a matrix $A$ corresponding to pairwise distinct eigenvalues $\lambda_{1},\dots,\lambda_{n}$ then the set $\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \}$ is linearly independent.