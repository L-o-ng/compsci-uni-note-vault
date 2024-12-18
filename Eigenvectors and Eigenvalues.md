#notes 

Consider the [[Markov Chains and Processes#An Example Weather|weather example]].
The long range forecast is $\mathbf{w}_{\infty}$.
We can write $T\mathbf{w}_{\infty}=\mathbf{w}_{\infty}$
>$\mathbf{w}_{\infty}$ is an **eigenvector** with **eigenvalue** 1.
>In general, if $A\mathbf{x}=\lambda \mathbf{x}$ then $\mathbf{x}$ is an *eigenvector* of $A$ with *eigenvalue* $\lambda$.
## Basis of Eigenvectors
If we can find a basis of eigenvectors, then:
+ The matrix representation for that basis is *diagonal*.
+ The change of basis matrix $P$ is *invertible*.
+ We can write $A=PDP^{-1}$ where $D$ is diagonal.
## Advantages of Diagonalisation
+ Diagonal matrices are easy to store, as they are sparse.
+ Diagonal matrix multiplication is $O(n)$.
	+ $A^n=(P DP^{-1})^n=P D^nP^{-1}$
+ It is much quicker to find powers of matrices.
