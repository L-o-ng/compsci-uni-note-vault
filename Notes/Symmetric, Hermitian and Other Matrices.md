#notes 

Recall that the *transpose* of a matrix $A=a_{ij}$ is $A^{T}=(a_{ji})$ and that a matrix $A$ is **symmetric** if $A^{T}=A$.
## Skew-Symmetry
A matrix is called **skew-symmetric** or *anti-symmetric* if:
$$
A^{T}=-A
$$
For example, the matrix $A=\begin{pmatrix}0&2\\-2&0\end{pmatrix}$ is skew-symmetric.
Note that the diagonal entries of a skew-symmetric matrix **must** be 0 since $a_{ii}=-a_{ii}$, which is only satisfied by 0.
### Symmetry in Decomposition
We can write any square matrix as the sum of a symmetric and a skew-symmetric matrix:
$$
A=\frac{A+A^{T}}{2}+\frac{A-A^{T}}{2}
$$
## Hermitian Matrices
See [[Complex Numbers]], [[Functions of a Complex Variable]].

The **Hermitian conjugate** of a matrix $A=(a_{ij})\in \operatorname{Mat}_{n}(\mathbb{C})$ is:
$$
A^{\dagger}=\bar{A^{T}}=(\bar{A})^{T}=(\bar{a_{ji}})
$$
Hence a matrix $A$ is called **Hermitian** if $A^{\dagger}=A$ and **Anti-Hermitian** if $A^{\dagger}=-A$.

For **real** matrices, "symmetric" and "Hermitian" mean the same thing. Only for complex entries does something new happen.
## Unitary Matrices
A matrix $A=(a_{ij})\in \operatorname{Mat}_{n}(\mathbb{C})$ is called **unitary** if $A^{\dagger}A=AA^{\dagger}=I_{n}$, or equivalently, $A^{-1}=A^{\dagger}$.
This can be considered the complex version of [[Orthogonal Matrices]] - for real matrices, the definitions are the same. Similar to orthogonal matrices, products and inverses of unitary matrices are also unitary. As for the determinant:
$$
AA^{\dagger}=I \implies \det(A)\det(A^{\dagger})=1 \implies |\det(A)|^{2}=\det(A)\overline{\det(A)}=1
$$
so $\det(A)$ is a complex number with modulus 1 and hence of the form $e^{i\theta}$.
An example of a unitary matrix is $A=\begin{pmatrix}1&0\\0&e^{i\theta}\end{pmatrix}$ since $A^{\dagger}=\bar{A}=\begin{pmatrix}1&0\\0&-e^{i\theta}\end{pmatrix}$ so $A^{\dagger}A=I$.
## Normal Matrices
A matrix is called **normal** if $A^{\dagger}A=AA^{\dagger}$. Hermitian and unitary matrices are normal. The inverse of a normal matrix is also normal.