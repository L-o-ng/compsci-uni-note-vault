#notes #homework-needed 
## Orthogonal Projections
>If $W$ is a subspace in a finite-dimensional [[Inner Product Spaces|inner product space]] $V$ then every vector $\mathbf{u} \in V$ can be uniquely expressed as $\mathbf{u}=\mathbf{w}_{1}+\mathbf{w}_{2}$ where $\mathbf{w}_{1} \in W,\mathbf{w}_{2}\in W^{\bot}$.

If $\mathbf{u},\mathbf{w}_{1},\mathbf{w}_{2}$ are as above then $\mathbf{w}_{1}$ is the orthogonal projection of $\mathbf{u}$ onto $W$.
We write: $\mathbf{w}_{1}=\operatorname{proj}_{W}\mathbf{u},\space\mathbf{w}_{2}=\operatorname{proj}_{W^{\bot}}\mathbf{u}$
### Computing Orthogonal Projections
If $\{ \mathbf{v}_{1},\dots,\mathbf{v}_{r} \}$ is an orthogonal basis for $W$ and $\mathbf{w}_{1}=c_{1}\mathbf{v}_{1}+c_{2}\mathbf{v}_{2}+\dots+c_{r}\mathbf{v}_{r}$, use $$\langle\mathbf{u},\mathbf{v}_{i}\rangle=\langle\mathbf{w}_{1}+\mathbf{w}_{2},\mathbf{v}_{i}\rangle=\langle\mathbf{w}_{1},\mathbf{v}_{i}\rangle+\langle \mathbf{w}_{2},\mathbf{v}_{i}\rangle=\langle\mathbf{w}_{1},\mathbf{v}_{i}\rangle=c_{i}\langle\mathbf{v}_{i},\mathbf{v}_{i}\rangle$$
to find the $c_{i}$ terms:
$$
\mathbf{u}= \frac{\langle\mathbf{u},\mathbf{v}_{1}\rangle}{\|v_{1}\|^{2}}\mathbf{v}_{1}+\frac{\langle\mathbf{u},\mathbf{v}_{2}\rangle}{\|v_{2}\|^{2}}\mathbf{v}_{2}+\dots+\frac{\langle\mathbf{u},\mathbf{v}_{r}\rangle}{\|v_{r}\|^{2}}\mathbf{v}_{r}
$$
Moreover, if $\{ \mathbf{v}_{1},\dots,\mathbf{v}_{r} \}$ is an orthonormal basis in $W$, then: 
$$
\operatorname{proj}_{W}\mathbf{u}=\langle\mathbf{u},\mathbf{v}_{1}\rangle\mathbf{v}_{1}+\langle\mathbf{u},\mathbf{v}_{2}\rangle\mathbf{v}_{2}+\dots+\langle\mathbf{u},\mathbf{v}_{r}\rangle\mathbf{v}_{r}
$$
## The Gram-Schmidt Orthogonalisation Process
>Every *non-zero*, *finite-dimensional* inner product space $V$ has an orthonormal basis.

Let $W$ be a subspace of $V$ and let $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{n} \}$ be a basis of $W$.
Consider the subspaces $W_{r}=\operatorname{span}(\mathbf{u}_{1},\dots,\mathbf{u}_{r}),r=1,\dots,n$ in $W$. Note that $W_{1} \subseteq W_{2}\subseteq\dots \subseteq W_{n}=W$.

The **Gram-Schmidt Process** inductively constructs orthogonal bases for the subspaces $W_{i}$, eventually constructing an orthogonal basis for $W_{n}=W$.
Once we have an orthogonal basis for $W$, we can normalise all vectors within.
### Algorithm
To convert a linearly independent set $S=\{ \mathbf{u}_{1},\dots,\mathbf{u}_{n} \}$ into an orthogonal basis for $\operatorname{span}(S)$ you can perform the following algorithm:
1) $\mathbf{v}_{1}=\mathbf{u}_{1}$
2) todo! finish this :( 

