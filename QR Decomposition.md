#notes 

Let $A$ be an $m\times n$ matrix with linearly dependent columns $\mathbf{u}_{1},\dots,\mathbf{u}_{n}$.
Let $\{ \mathbf{q}_{1},\dots,\mathbf{q}_{n} \}$ be the orthonormal set obtained by applying [[The Gram-Schmidt Process]] to $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{n} \}$.
How does $A=\begin{bmatrix}\mathbf{u}_{1}|\dots|\mathbf{u}_{n}\end{bmatrix}$ relate to the matrix $Q=\begin{bmatrix}\mathbf{q}_{1}|\dots|\mathbf{q}_{n}\end{bmatrix}$?

Since $\{ \mathbf{q}_{1},\dots,\mathbf{q}_{n} \}$ is an orthonormal basis for $\operatorname{span}(\mathbf{u}_{1},\dots,\mathbf{u}_{n})$ we have:
$$
\begin{matrix}
\mathbf{u}_{1} & = & \langle\mathbf{u}_{1},\mathbf{q}_{1}\rangle\mathbf{q}_{1} & + & \langle\mathbf{u}_{1},\mathbf{q}_{2}\rangle\mathbf{q}_{2} & + & \dots & + & \langle\mathbf{u}_{1},\mathbf{q}_{n}\rangle\mathbf{q}_{n} \\
\mathbf{u}_{2} & = & \langle\mathbf{u}_{2},\mathbf{q}_{1}\rangle\mathbf{q}_{1} & + & \langle\mathbf{u}_{2},\mathbf{q}_{2}\rangle\mathbf{q}_{2} & + & \dots & + & \langle\mathbf{u}_{2},\mathbf{q}_{n}\rangle\mathbf{q}_{n} \\
 & \vdots \\
\mathbf{u}_{n} & = & \langle\mathbf{u}_{n},\mathbf{q}_{1}\rangle\mathbf{q}_{1} & + & \langle\mathbf{u}_{n},\mathbf{q}_{2}\rangle\mathbf{q}_{2} & + & \dots & + & \langle\mathbf{u}_{n},\mathbf{q}_{n}\rangle\mathbf{q}_{n}
\end{matrix}
$$
or in matrix form:
$$
A=\begin{bmatrix}
\mathbf{u}_{1}|\dots|\mathbf{u}_{n}
\end{bmatrix}=\begin{bmatrix}
\mathbf{q}_{1}|\dots|\mathbf{q}_{n}
\end{bmatrix}
\begin{pmatrix}
\langle\mathbf{u}_{1},\mathbf{q}_{1}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{1}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{1}\rangle \\
\langle\mathbf{u}_{1},\mathbf{q}_{2}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{2}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{2}\rangle \\
\vdots & \vdots & \ddots & \vdots \\
\langle\mathbf{u}_{1},\mathbf{q}_{n}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{n}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{n}\rangle
\end{pmatrix}
$$
However, we know that from the Gram-Schmidt Process, for each $j\geq 2$, $\mathbf{q}_{j}$ is orthogonal to $\mathbf{u}_{1},\dots,\mathbf{u}_{j-1}$, and so we know $R$ is upper triangular, so we instead write:
$$
\begin{pmatrix}
\langle\mathbf{u}_{1},\mathbf{q}_{1}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{1}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{1}\rangle \\
\langle\mathbf{u}_{1},\mathbf{q}_{2}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{2}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{2}\rangle \\
\vdots & \vdots & \ddots & \vdots \\
\langle\mathbf{u}_{1},\mathbf{q}_{n}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{n}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{n}\rangle
\end{pmatrix} =
\begin{pmatrix}
\langle\mathbf{u}_{1},\mathbf{q}_{1}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{1}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{1}\rangle \\
0 & \langle\mathbf{u}_{2},\mathbf{q}_{2}\rangle & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{2}\rangle \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \langle\mathbf{u}_{n},\mathbf{q}_{n}\rangle
\end{pmatrix}
$$
From Gram-Schmidt, $\langle\mathbf{u}_{i},\mathbf{q}_{i}\rangle=\left\langle \mathbf{u}_{i}, \frac{1}{\|\mathbf{v}_{i}\|}\mathbf{v}_{i} \right\rangle= \frac{1}{\|\mathbf{v}_{i}\|}\langle\mathbf{u}_{i},\mathbf{v}_{i}\rangle= \frac{1}{\|\mathbf{v}_{i}\|}\langle\mathbf{v}_{i},\mathbf{v}_{i}\rangle>0$
## Theorem
>If $A$ is an $m\times n$ matrix with linearly independent column vectors, then it can be factored as:$$A=QR$$where $Q$ has orthonormal columns and $R$ is an invertible upper-triangular matrix.

Note that for $m=n$, this theorem says that every invertible matrix has a $QR$-decomposition.

Now see [[Least Squares Solutions for Inconsistent Linear Systems]].
## Example
Q: Find a $QR$-decomposition of $A=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$.
A:
1) From the Gram-Schmidt Process we find:$$\eqalign{\mathbf{q}_{1}&=\left( \frac{1}{\sqrt{ 3 }}, \frac{1}{\sqrt{ 3 }}, \frac{1}{\sqrt{ 3 }} \right)\\ \mathbf{q}_{2} &= \left( -\frac{2}{\sqrt{ 6 }}, \frac{1}{\sqrt{ 6 }}, \frac{1}{\sqrt{ 6 }} \right)\\ \mathbf{q}_{3}&= \left( 0, -\frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }} \right)}$$
2) Now compute $$\begin{pmatrix}\langle\mathbf{u}_{1},\mathbf{q}_{1}\rangle & \langle\mathbf{u}_{2},\mathbf{q}_{1}\rangle & \langle\mathbf{u}_{3},\mathbf{q}_{1}\rangle\\ 0 & \langle\mathbf{u}_{2},\mathbf{q}_{2}\rangle & \langle \mathbf{u}_{3},\mathbf{q}_{2}\rangle\\ 0 & 0 & \langle\mathbf{u}_{3},\mathbf{q}_{3}\rangle\end{pmatrix}=\begin{pmatrix}\sqrt{ 3 } & \frac{2}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 3 }}\\ 0 & \sqrt{ \frac{2}{3} } & \frac{1}{\sqrt{ 6 }}\\ 0 & 0 & \frac{1}{\sqrt{ 2 }}\end{pmatrix}$$
3) So we find:$$\begin{pmatrix} \frac{1}{\sqrt{ 3 }} & -\frac{2}{\sqrt{ 6 }} & 0\\ \frac{1}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 6 }} & -\frac{1}{\sqrt{ 2 }}\\ \frac{1}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 6 }} & \frac{1}{\sqrt{ 2 }}\end{pmatrix}\begin{pmatrix}\sqrt{ 3 } & \frac{2}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 3 }}\\ 0 & \sqrt{ \frac{2}{3} } & \frac{1}{\sqrt{ 6 }}\\ 0 & 0 & \frac{1}{\sqrt{ 2 }}\end{pmatrix}$$

