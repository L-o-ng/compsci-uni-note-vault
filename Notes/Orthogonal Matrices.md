#notes 
## See Also
+ [[Orthonormality]]
+ [[Inner Product Spaces]]
+ [[Eigendecomposition#Diagonalisation]]
## Orthogonal Matrices
>A square matrix $Q$ is called **orthogonal** if $Q^{T}=Q^{-1}$ or equivalently, $Q^{T}Q=I$.
### Example
Rotation and reflection matrices in $\mathbb{R}^{2}$ are orthogonal:
$$
\eqalign{
\begin{pmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{pmatrix}^{-1}
&=
\begin{pmatrix}
\cos \theta & \sin \theta \\
-\sin \theta & \cos \theta
\end{pmatrix} \\
\begin{pmatrix}
-1 & 0 \\
0 & 1
\end{pmatrix}^{-1}
&=
\begin{pmatrix}
-1 & 0 \\
0 & 1
\end{pmatrix} \\
\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}^{-1}
&=
\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}
}
$$
### Rows and Columns
>For any $n\times n$ matrix $Q$, the following are equivalent:
>1: $Q$ is orthogonal;
>2: The rows of $Q$ form an orthonormal basis in $\mathbb{R}^{n}$ with the Euclidean Inner Product;
>3: The columns of $Q$ form an orthonormal basis in $\mathbb{R}^{n}$ with the Euclidean Inner Product.
#### Proof
We prove $(1)\iff (3)$; the proof of $(1)\iff(2)$ is similar.
If $Q=[\mathbf{u}_{1}|\dots|\mathbf{u}_{n}]$ then each entry $(i,j)$ in the product $Q^{T}Q$ is $\langle\mathbf{u}_{i},\mathbf{u}_{j}\rangle$.
Hence, $Q^{T}Q=I$ if and only if we have $\langle\mathbf{u}_{i},\mathbf{u}_{j}\rangle=0$ for all $i \ne j$ and $\langle\mathbf{u}_{i},\mathbf{u}_{j}\rangle=1$ for all $i=j$, which holds if and only if the set $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{n} \}$ is orthonormal.
Any orthonormal set with $n$ vectors in $\mathbb{R}^{n}$ is a basis.
### Properties of Orthogonal Matrices
1) The transpose of an orthogonal matrix is also orthogonal;
2) The inverse of an orthogonal matrix is also orthogonal;
3) A product of orthogonal matrices is also orthogonal;
4) If $Q$ is orthogonal then $\det Q=1$ or $\det Q=-1$.
### Linear Operators
For any $n\times n$ matrix $Q$, the following are equivalent:
1) $Q$ is orthogonal;
2) $\|Q\mathbf{x}\|=\|\mathbf{x}\|\forall \mathbf{x}\in \mathbb{R}^{n}$;
3) $\langle Q\mathbf{x},Q\mathbf{y}\rangle=\langle\mathbf{x},\mathbf{y}\rangle\forall \mathbf{x},\mathbf{y}\in \mathbb{R}^{n}$.
## Orthogonal Diagonalisation
Let $A,B$ be $n\times n$ matrices. Recall from [[Eigendecomposition#Diagonalisation]] that:
+ $A,B$ are similar if there is an invertible matrix $P$ such that $P^{-1}AP=B$;
+ If $B$ above can be chosen to be diagonal then we say that $A$ is diagonalisable and that $P$ diagonalises $A$;
+ A is diagonalisable if and only if it has $n$ linearly independent eigenvectors.
If, in addition, $P$ **can be chosen to be orthogonal**, then we say, respectively, that:
+ $A,B$ are **orthogonally similar**;
+ $A$ is **orthogonally diagonalisable** and that $P$ **orthogonally diagonalises** $A$ (and then $P^{T}AP=B$ since $P^{T}=P^{-1}$).


