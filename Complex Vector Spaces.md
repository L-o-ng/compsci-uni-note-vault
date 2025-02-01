#notes 

Similarly to $\Bbb{R}^{n}$, the vector space $\Bbb{C}^{n}$ is defined to consist of all $n$-tuples $\{ v_{1},\dots,v_{n} \}$ where each $v_{i}\in \Bbb{C}$.
Each vector $\mathbf{v}=\{ v_{1},\dots,v_{n} \}\in \Bbb{C}^{n}$ where $v_{i}=a_{i}+b_{i}i$ can be represented as:
$$
\mathbf{v}=\{ v_{1},\dots,v_{n} \}=\{ a_{1}+b_{1}i, \dots,a_{n}+b_{n}i \}=\{ a_{1},\dots,a_{n} \}+i\{ b_{1},\dots,b_{n} \}=\mathbf{a}+i\mathbf{b}
$$
where $\mathbf{a},\mathbf{b}\in \Bbb{R}^{n}$. Then $\mathbf{a}=\mathrm{Re}(\mathbf{v})$ and $\mathbf{b}=\mathrm{Im}(\mathbf{v})$.
You can extend the complex conjugate to $\Bbb{C}^{n}$: if $\mathbf{v}=\mathbf{a}+i\mathbf{b}$ then $\bar{\mathbf{v}}=\mathbf{a}-i\mathbf{b}$.
We can consider complex matrices as matrices containing these.
## Properties of the Complex Conjugate
The facts that:
1) $\bar{\bar{z}}=z$;
2) $\bar{z_{1}+z_{2}}=\bar{z_{1}}+\bar{z_{2}}$;
3) $\bar{z_{1}z_{2}}=\bar{z_{1}}\bar{z_{2}}$.
immediately imply:
>For any vectors $\mathbf{u},\mathbf{v}\in \Bbb{C}^{n}$ and a scalar $k \in \Bbb{C}$, the following holds:
>	$\bar{\bar{\mathbf{u}}}=\mathbf{u}$
>	$\bar{k\mathbf{u}}=\bar{k}\bar{\mathbf{u}}$
>	$\bar{\mathbf{u}+\mathbf{v}}=\bar{\mathbf{u}}+\bar{\mathbf{v}}$
>	$\bar{\mathbf{u}-\mathbf{v}}=\bar{\mathbf{u}}-\bar{\mathbf{v}}$

>If $A$ is an $m\times k$ complex matrix and $B$ is a $k\times n$ complex matrix then:
>	$\bar{\bar{A}}=A$
>	$\bar{(A^{T})}=\bar{(A)}^{T}$
>	$\bar{AB}=\bar{A}\bar{B}$
## Complex Dot Product
The complex dot product in $\Bbb{C}^{n}$ is defined as follows: if $\mathbf{u}=\{ u_{1},\dots,u_{n} \}$ and $\mathbf{v}=\{ v_{1},\dots,v_{n} \}$ then:
$$
\mathbf{u}\cdot \mathbf{v}=u_{1}\bar{v_{1}}+\dots+u_{n}\bar{v_{n}}
$$
The [[Euclidean Norm]] in $\Bbb{C}^{n}$ is then defined as follows:
$$
||\mathbf{v}||=\sqrt{ \mathbf{v}\cdot \mathbf{v} }=\sqrt{ |v_{1}|^{2}+\dots+|v_{n}|^{2} }
$$
## Properties of the Complex Dot Product
For vectors $\mathbf{u},\mathbf{v}\in \Bbb{R}^{n}$ viewed as columns we have:
$$
\array{\mathbf{u}\cdot \mathbf{v}=\mathbf{u}^{T}\mathbf{v}=\mathbf{v}^{T}\mathbf{u} \\ ||\mathbf{u}||^{2}=\mathbf{u}\cdot \mathbf{u}=\mathbf{u}^{T}\mathbf{u}}
$$
For complex vectors $\mathbf{u},\mathbf{v}\in \Bbb{C}^{n}$ this becomes:
$$
\array{
\mathbf{u}\cdot\mathbf{v}=\mathbf{u}^{T}\bar{\mathbf{v}}=\bar{\mathbf{v}}^{T}\mathbf{u} \\
||\mathbf{u}||^{2}=\mathbf{u}\cdot \mathbf{u}=\mathbf{u}^{T}\bar{\mathbf{u}}
}
$$

>For *any* vectors $\mathbf{u},\mathbf{v},\mathbf{w}\in \Bbb{C}^{n}$ and a scalar $k \in \Bbb{C}$ the following holds: $$\array{\mathbf{u}\cdot \mathbf{v}=\overline{\mathbf{v}\cdot \mathbf{u}} \\ \mathbf{u}\cdot(\mathbf{v}+\mathbf{w})=\mathbf{u}\cdot \mathbf{v}+\mathbf{u}\cdot \mathbf{w} \\ (k\mathbf{u})\cdot \mathbf{v}=k(\mathbf{u}\cdot \mathbf{v}), \mathbf{u}\cdot(k\mathbf{v})=\bar{k}(\mathbf{u}\cdot \mathbf{v}) \\ \mathbf{v}\cdot\mathbf{v}\geq 0, \mathbf{v}\cdot \mathbf{v}=0 \iff \mathbf{v}=\mathbf{0}}$$

## Complex Eigenvalues and Eigenvectors
Let $A$ be an $n\times n$ matrix with complex entries.
As in the real case, $\lambda \in \Bbb{C}$ is an eigenvalue of $A$ if $A\mathbf{x}=\lambda \mathbf{x}$ for a non-zero $\mathbf{x} \in \Bbb{C}^{n}$. Then $\mathbf{x}$ is a complex eigenvector corresponding to $\lambda$.
As in the real case:
+ The eigenvalues of $A$ are the complex roots of $\det (\lambda I-A)=0$
+ The eigenspace of $A$ corresponding to an eigenvalue $\lambda_{0}$ is the solution space of the linear system $(\lambda_{0}I-A)\mathbf{x}=\mathbf{0}$ over $\Bbb{C}$.

>If $\lambda$ is an eigenvalue of a real $n\times n$ matrix $A$ and $\mathbf{x}$ is a corresponding eigenvector, then $\bar{\lambda}$ is also an eigenvalue of $A$ and $\bar{\mathbf{x}}$ is a corresponding eigenvector.
## Eigenvalues of Real Symmetric Matrices
>If $A$ is a real symmetric matrix then all complex eigenvalues of $A$ are real.

### Real $2\times 2$ Matrices with Complex Eigenvalues
>The complex eigenvalues of the real matrix $C=\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ are $\lambda=a\pm bi$.
>If $a,b$ are not both zero, then $C$ can be factored as:$$\begin{pmatrix}a & -b  \\
b & a \end{pmatrix}=\begin{pmatrix}|\lambda| & 0 \\ 0 & |\lambda|\end{pmatrix}\begin{pmatrix}\cos \theta & -\sin \theta  \\ \sin \theta & \cos \theta\end{pmatrix}$$
>where $\theta$ is the argument of $\lambda=a+bi$.

Geometrically, the operator $T_{C}$ is equal to rotation by $\theta$ followed by scaling by $|\lambda|$.

>Let $A$ be a real $2\times 2$ matrix with complex eigenvalues $\lambda=a\pm bi$ where $b\neq 0$. Then $A$ is similar to $\begin{pmatrix}a&-b \\ b&a\end{pmatrix}$
