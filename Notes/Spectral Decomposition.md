#notes 
## See Also
+ [[Orthonormality]]
+ [[Inner Product Spaces]]
+ [[Orthogonal Matrices]]
## The Spectral Theorem
For any $n\times n$ matrix $A$, the following are equivalent:
1) $A$ is orthogonally diagonalisable:
	1) This means $A=QDQ^{T}$ for some orthogonal matrix $Q$ and some diagonal matrix $D$.
2) $A$ has an orthonormal set of $n$ eigenvectors;
3) $A$ is symmetric.
### Proof
The proof of $(1)\iff(2)$ is the same as for general diagonalisation, in addition to the fact that a matrix is orthogonal if and only if it has orthonormal columns.
$(1)\implies(3)$ : If $A=QDQ^{T}$ then $A^{T}=(QDQ^{T})^{T}=(Q^{T})^{T}D^{T}Q^{T}=QDQ^{T}=A$.
$(3) \implies (1)$ is omitted.
## Eigenproperties of Symmetric Matrices
If $A$ is a symmetric matrix then:
1) All (complex) eigenvalues $A$ are real;
2) Eigenvectors from different eigenspaces are orthogonal.
### Proof
$(1)$ is proved in [[Complex Vector Spaces]].
To prove $(2)$, assume that $\lambda_{1},\lambda_{2}$ are two different eigenvalues of $A$, and take any two eigenvectors $\mathbf{u}_{1},\mathbf{u}_{2}$ corresponding to $\lambda_{1},\lambda_{2}$ respectively. We have:
$$
\eqalign{
\lambda_{1}\langle\mathbf{u}_{1},\mathbf{u}_{2}\rangle &= \langle \lambda_{1}\mathbf{u}_{1},\mathbf{u}_{2}\rangle \\ &= \langle A\mathbf{u}_{1},\mathbf{u}_{2}\rangle \\ &= (A\mathbf{u}_{1})^{T}\mathbf{u}_{2} \\ &= \mathbf{u}_{1}^{T}A^{T}\mathbf{u}_{2} \\ &= \mathbf{u}_{1}^{T}A\mathbf{u}_{2} \\ &= \langle\mathbf{u}_{1},A\mathbf{u}_{2}\rangle \\ &= \langle\mathbf{u}_{1},\lambda_{2}\mathbf{u}_{2}\rangle &=\lambda_{2}\langle\mathbf{u}_{1},\mathbf{u}_{2}\rangle
}
$$
Since $(\lambda_{1}-\lambda_{2})\langle\mathbf{u}_{1},\mathbf{u}_{2}\rangle=0$ and $\lambda_{1} \neq \lambda_{2}$, we have that $\langle\mathbf{u}_{1},\mathbf{u}_{2}\rangle=0$ as required.
## Orthogonally Diagonalising a Symmetric Matrix
Assuming $A$ is symmetric,
1) Find the eigenvalues and a basis in each eigenspace of $A$;
2) Apply [[The Gram-Schmidt Process]] to each basis to obtain an orthonormal basis for each eigenspace;
3) Form the matrix $Q$ whose columns are the vectors found in step 2. $Q$ will orthogonally diagonalise $A$ and the diagonal of $D=Q^{T}AQ$ contains the eigenvalues of $A$ in the same order as eigenvectors in $Q$.
### Remarks
+ Steps 1 and 3 were also part of the [[Eigendecomposition#Diagonalisation|general diagonalisation algorithm]].
+ The columns of $Q$ will form an orthonormal set because eigenvectors from different eigenspaces are orthogonal (and the rest is guaranteed by step 2).
+ This algorithm applies only to symmetric matrices and **always** returns a diagonalisation, unlike the general algorithm.


---
