#notes 

Standard rules for the dot product work the same for general inner products, and the proofs are the same:
## Pythagoras' Theorem
>If $\mathbf{u},\mathbf{v}$ are orthogonal vectors in an inner product space then $\|\mathbf{u}+\mathbf{v}\|^{2}=\|\mathbf{u}\|^{2}+\|\mathbf{v}\|^{2}$.
## Cauchy-Schwarz Inequality
>If $\mathbf{u},\mathbf{v}$ are vectors in an inner product space then $|\langle\mathbf{u},\mathbf{v}\rangle|\leq\|\mathbf{u}\|\|\mathbf{v}\|$.
### Example
For a Cauchy-Schwarz Inequality in $C[a,b]$:
$$
\left| \int _{a}^{b}f(x)g(x) \, dx  \right|\leq \sqrt{ \int _{a}^{b}f^{2}(x) \, dx  }\sqrt{ \int _{a}^{b}g^{2}(x) \, dx  }
$$
## Triangle Inequality
>If $\mathbf{u},\mathbf{v}$ are vectors in an inner product space then $\|\mathbf{u}+\mathbf{v}\|\leq\|\mathbf{u}\|+\|\mathbf{v}\|$

