#definition 

Vectors are *orthogonal* (at right angles) if their dot product is 0.
Vectors are *normal* if their [[Euclidean Norm]], or $\ell_{2}$ norm, is 1.
A set of vectors is *orthonormal* if they are all orthogonal and normal.

It is often useful to have an **orthonormal basis** for a [[Vector Spaces|Vector Space]].
## Orthogonality
>Vectors $\mathbf{u},\mathbf{v}$ in an inner product space $V$ are called **orthogonal** if $\langle\mathbf{u},\mathbf{v}\rangle=0$.

>Let $W$ be a subspace in an inner product space $V$. Then the set:$$W^{\perp}=\{ \mathbf{x}\in V|\langle\mathbf{u},\mathbf{x}\rangle=0\forall \mathbf{u}\in W \}$$is called the **orthogonal complement** of $W$.
### Example
Take $\mathbf{u}=(2,-3,5,4)$ and $\mathbf{v}=(0,1,-4,7)$ in $\Bbb{R}^{4}$ with the dot product, and let $W=\operatorname{span}(\mathbf{u},\mathbf{v})$. Then, $W^{\perp}$ is the solution space of the linear system:
$$
\array{
\eqalign{
2x_{1}-3x_{2}+5x_{3}+4x_{4}&=0 \\
x_{2}-4x_{3}+7x_{4}&=0
} \qquad
\eqalign{
(\langle\mathbf{u},\mathbf{x}\rangle=0) \\
(\langle\mathbf{v},\mathbf{x}\rangle=0)
}
}
$$

## Working with the Orthogonal Complement
>For any subspace $W$ in an inner product space $V$, the set $W^{\perp}$ is also a subspace.

Finding a basis for $W^{\perp}$ is the same as finding a basis in the solution space of the linear system.
