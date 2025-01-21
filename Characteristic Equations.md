#notes 

>If $A$ is an $n\times n$ matrix then $\lambda$ is an eigenvalue of $A$ if and only if it satisfies $\det(\lambda I-A)=0$.

The equation $\det(\lambda I-A)=0$ is also called the **characteristic equation** of $A$.
## Proof
By definition, $\lambda$ is an eigenvalue of $A$ if and only if $A\mathbf{x}=\lambda \mathbf{x},\mathbf{x} \neq 0$. So, we have:
$$
A\mathbf{x}=\lambda \mathbf{x} \iff A\mathbf{x}=\frac{\lambda}{\mathbf{x}}\iff (\lambda I-A)\mathbf{x}=0
$$
By the theorem about invertible matrices, the last equation has a solution $\mathbf{x} \neq 0$ if and only if $\det(\lambda I-A)=0$.
## Characteristic Polynomial
In general, the expression $\det(\lambda I-A)$ is a polynomial of the form:
$$
p(\lambda)=\lambda^{n}+c_{1}\lambda^{n-1}+\dots+c_{n-1}\lambda+c_{n}
$$
where $n$ is the order of $A$. This is called the characteristic polynomial of $A$.
Solving $p(\lambda)=0$ is difficult in general - there is no closed formula or exact algorithm.
There are however approximate algorithms.
If all coefficients of $p(\lambda)$ are integers and the equation $p(\lambda)=0$ has an integer solution $\lambda=k$ then $k \parallel c_{n}$.
### Example
Find the eigenvalues of $A=\begin{pmatrix}0&1&0\\0&0&1\\4&-17&8\end{pmatrix}$.
$$
\array{
\det(\lambda I-A)\\
\det \begin{pmatrix}
\lambda & -1 & 0 \\
0 & \lambda & -1 \\
-4 & 17 & \lambda-8
\end{pmatrix} \\
\lambda^{3}-8\lambda^{2}+17\lambda-4=0\\
(\lambda-4)(\lambda^{2}-4\lambda+1)=0\\
\lambda_{1}=4,\lambda_{2,3}=2\pm \sqrt{ 3 }
}
$$
## Eigenspaces
Let $\lambda_{0}$ be an eigenvalue of $A$ and consider the equation $(\lambda_{0}I-A)\mathbf{x}=0$.
The **null space** of $\lambda_{0}I-A$ is called the **eigenspace** of $A$ corresponding to $\lambda_{0}$.
The non-0 vectors in this space are the eigenvectors of $A$ corresponding to $\lambda_{0}$.
To find a basis in this subspace, use the algorithm for finding a basis in the null space matrix. (todo! locate this and link)
### Example
Find (a basis of) the eigenspace of $A=\begin{pmatrix}2&-1\\10&-9\end{pmatrix}$ corresponding to $\lambda=-8$.

Form the equation $(-8I-A)\mathbf{x}=0$, so:
$$
\array{
\begin{pmatrix}
-10 & 1 \\
-10 & 1
\end{pmatrix}\begin{pmatrix}
x_{1} \\
x_{2}
\end{pmatrix}=\begin{pmatrix}
0 \\
0
\end{pmatrix} \\
\text{So }-10x_{1}+x_{2}=0
}
$$
The subspace consists of all vectors of the form $(x,10x)$. One basis is $\{ (1,10) \}$.
todo! WHAT 