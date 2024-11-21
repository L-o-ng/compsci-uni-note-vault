#notes

The inverse of a *function* $f$ undoes the operation of $f$ and is written $f^{-1}$.
The inverse must be **unique** for $f^{-1}$ to be a function. Otherwise, it is a relation.
Formally, $$\array{\text{When }f:X \to Y\text{ then }g\text{ is an inverse function of }f \text{ if}\\ \forall x \in X.g(f(x))=x\text{ and }\forall y \in Y.f(g(y))=y}$$
## Inverse of a $2\times 2$ Matrix
Suppose we want to find the inverse of: $$\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}$$Then we want $$\begin{pmatrix}
w & x  \\
y & z 
\end{pmatrix}\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}=\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}$$This gives the equations:
$$\eqalign{w+3x&=1\\ 2w+4x&=0\\ y+3z&=0\\ 2y+4z&=1}$$
So solving for $w,x,y,z$:
$$\begin{pmatrix}
-2 & 1 \\
\frac{3}{2} & -\frac{1}{2}
\end{pmatrix}$$
### General Form
Using the same approach for the general matrix $A$, $$\begin{pmatrix}
w & x  \\
y & z 
\end{pmatrix}\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}=\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}$$
We get $$A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}
d & -b  \\
-c & a
\end{pmatrix}$$The inverse **does not exist** if the [[Determinants|determinant]] is 0.
## Inverse Commutes
In general, matrix multiplication is not commutative.
But, if $AB=I$ then:
$$A=IA=(AB)A=A(BA)$$
So $BA$ is also the identity and hence $AA^{-1}=A^{-1}A=I$.
## Inverse by [[Gaussian Elimination]]
+ Given $A$, we want to find $B$ such that $BA=I\text{, or }AB=I$.
+ We could write down a series of equations and solve to find elements of $B$.
+ However, we have a better way of solving systems of linear equations: we can use Gaussian elimination on the augmented matrix $A|I$.
$$\array{
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix} \\
\eqalign{
\begin{pmatrix}
1 & 2 & 1 & 0 \\
3 & 4 & 0 & 1
\end{pmatrix}&\rightsquigarrow \begin{pmatrix}
1 & 2 & 1 & 0 \\
0 & -2 & -3 & 1
\end{pmatrix}\\
&\rightsquigarrow \begin{pmatrix}
1 & 2 & 1 & 0 \\
0 & 1 & \frac{3}{2} & -\frac{1}{2}
\end{pmatrix} \\
&\rightsquigarrow \begin{pmatrix}
1 & 0 & -2 & 1 \\
0 & 1 & \frac{3}{2} & -\frac{1}{2}
\end{pmatrix}
}}$$
## Existence of Inverse of Non-Square Matrices
Assume $f:X \to Y$ is a linear map.
Can an inverse exist if $\operatorname{dim}(x)<\operatorname{dim}(y)$?
+ $\operatorname{dim}(f(X)) \le \operatorname{dim}(X)\text{, so }\operatorname{dim}(f(X)) < \operatorname{dim}(Y)$
+ Some elements of $Y$ are hence not in $f(X)$, so the inverse does not exist.
Conversely, can an inverse exist if $\operatorname{dim}(X) > \operatorname{dim}(Y)$?
+ The columns of the matrix cannot be linearly independent.
+ This means there is a non-zero vector that maps to zero - the [[Kernel of a Linear Map|kernel]] is non-trivial.
+ So, any inverse cannot be unique because $f(\mathbf{x}+\mathbf{k})=f(\mathbf{x})$ if $\mathbf{k}$ is in the kernel.
+ Hence, the inverse does not exist.