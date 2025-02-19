#notes 

>A *set* of vectors in an [[Inner Product Spaces|inner product space]] is called **orthogonal** if all pairs of distinct vectors in it are orthogonal. An orthogonal set consisting of unit vectors is called **orthonormal**.
## Linear Independence
Orthogonal sets are linearly independent.

>If $S=\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \}$ is an orthogonal set of **non-zero** vectors in an inner product space then $S$ is linearly independent.

>If $S=\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \}$ is an orthogonal basis in inner product space $V$, then for any $\mathbf{u} \in V$:$$\mathbf{u}= \frac{\langle\mathbf{u},\mathbf{v}_{1}\rangle}{\|v_{1}\|^{2}}\mathbf{v}_{1}+\frac{\langle\mathbf{u},\mathbf{v}_{2}\rangle}{\|v_{2}\|^{2}}\mathbf{v}_{2}+\dots+\frac{\langle\mathbf{u},\mathbf{v}_{n}\rangle}{\|v_{n}\|^{2}}\mathbf{v}_{n}$$
>Moreover, if $S$ is an **orthonormal** basis in $V$, then:$$\mathbf{u}=\langle\mathbf{u},\mathbf{v}_{1}\rangle\mathbf{v}_{1}+\langle\mathbf{u},\mathbf{v}_{2}\rangle\mathbf{v}_{2}+\dots+\langle\mathbf{u},\mathbf{v}_{n}\rangle\mathbf{v}_{n}$$
## Extending an Orthogonal Set to an Orthogonal Basis
### Theorem
If $V$ is a finite-dimensional inner product space then:
+ Any orthogonal set of vectors in $V$ can be extended to an orthogonal basis.
+ Any orthonormal set of vectors in $V$ can be extended to an orthonormal basis.
### Proof
Let $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ be an orthogonal set in $V$ and $\{ \mathbf{u}_{k+1},\dots,\mathbf{u}_{k+n} \}$ some basis in $V$:
1) Apply [[The Gram-Schmidt Process]] to the set $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k},\mathbf{u}_{k+1},\dots,\mathbf{u}_{k+n} \}$;
2) Since $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ is an orthogonal set, we will have $\mathbf{v}_{i}=\mathbf{u}_{i}$ for $1 \leq i\leq k$;
3) If $\mathbf{v}_{r}=\mathbf{0}$ at any step $r$ with $r>k$, do not add it to the output set;
	1) This happens if and only if $\mathbf{u}_{r}\in \operatorname{span}(\mathbf{u}_{1},\dots,\mathbf{u}_{r-1})$: that is, if $W_{r-1}=W_{r}$.
4) The final set will extend $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$, and so it will be orthogonal, and hence linearly independent, and its span will be $\operatorname{span}(\mathbf{u}_{1},\dots,\mathbf{u}_{k},\mathbf{u}_{k+1},\dots,u_{k+n})=V$.
5) To obtain an orthonormal basis, normalise all vectors in the set.


