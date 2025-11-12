#notes 

Eigendecomposition involves decomposing matrix $A$ into $PDP^{-1}$ form., where:
+ $P$ - eigenvectors;
+ $D$ - diagonal matrix eigenvalues.
For example:$$
\begin{pmatrix}
\lambda_{1} & 0 & 0 \\
0 & \lambda_{2} & 0 \\
0 & 0 & \lambda_{3}
\end{pmatrix}
$$
Eigendecomposition allows for faster self-matrix multiplication.
So $A^{k}$ becomes:
$$
\begin{pmatrix}
\lambda_{1}^{k} & 0 & 0 \\
0 & \lambda_{2}^{k} & 0 \\
0 & 0 & \lambda_{3}^{k}
\end{pmatrix}
$$
It also makes [[Principal Component Analysis]] easier.

---

See [[Similarity of Matrices]], [[Similarity in Linear Maps]]
## Diagonalisation
>A matrix $A$ is called **diagonalisable** if it is similar to a diagonal matrix - if there exists an invertible matrix $P$ such that $P^{-1}AP$ is diagonal, then $P$ is said to diagonalise $A$.

$A$ is diagonalisable if it decomposes as $A=PDP^{-1}$ where $P$ is invertible and $D=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$ is diagonal.

>$D=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$ is shorthand for: $$\begin{pmatrix}\lambda_{1} & 0 & \cdots & 0 & 0 \\ 0 & \lambda_{2} & \cdots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & \lambda_{n-1} & 0 \\ 0 & 0 & \cdots & 0 & \lambda_{n}\end{pmatrix}$$
### Properties
>An $n\times n$ matrix is diagonalisable if it has $n$ linearly independent eigenvectors.
### Algorithm
Assume we have a matrix $A$: this algorithm diagonalises it or reports that it is impossible.
1) Find the eigenvalues of $A$ by solving its [[Characteristic Equations|Characteristic Equation]].
2) Find a basis in each eigenspace of $A$ and merge these bases into one set $S$.
3) If $S$ has fewer than $n$ vectors then $A$ is not diagonalisable.
4) Otherwise, form the matrix $P=[\mathbf{p}_{1}|\dots|\mathbf{p}_{n}]$ where $S=\{ \mathbf{p}_{1},\dots,\mathbf{p}_{n} \}$
	1) The set $S$ contains $n$ vectors and is linearly independent;
	2) So, $S$ is a basis for $\Bbb{R}^{n}$, so $P$ is invertible.
5) The matrix $D=P^{-1}AP$ is diagonal, $D=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$ where for each $i$, $\lambda_{i}$ is the eigenvalue corresponding to $\mathbf{p}_{i}$.
So if an $n\times n$ matrix has $n$ distinct eigenvalues then it is diagonalisable.
## Eigendecomposition
Let $A$ be a diagonalisable matrix.
We have $AP=PD$, where $P$ is invertible and its columns $\mathbf{p}_{1},\dots,\mathbf{p}_{n}$ are eigenvectors of $A$ and $D=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$ and each $\lambda_{i}$ is the eigenvalue of $A$ corresponding to $\mathbf{p}_{i}$.
Then we have a decomposition $A=PDP^{-1}$.
Eigendecomposition of matrix $A$ of size $n\times n$ exists if and only if $A$ can be diagonalised, and if and only if $A$ has $n$ linearly independent eigenvectors.
## Algebraic Multiplicity of Eigenvalues
See [[Eigenvectors and Eigenvalues#Linear (In)Dependency]]. From this theorem, we know that an $n\times n$ matrix is diagonalisable if and only if it has $n$ linearly independent eigenvectors.
A matrix's eigendecomposition exists if and only if it is diagonalisable.
### Implications
If we have a matrix of size $n\times n$ that has $n$ distinct eigenvalues, then we know that it has an eigendecomposition. Recall that $n$ distinct eigenvalues means that algebraic multiplicity of all eigenvalues is $1$.
NB: This does **not** mean that a matrix that doesn't have $n$ distinct eigenvalue doesn't have an eigendecomposition.