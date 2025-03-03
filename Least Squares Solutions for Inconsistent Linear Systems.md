#notes 
## Commands
$$
\text{Click for commands!}
\DeclareMathOperator{\cspace}{\mathcal{C}}
\DeclareMathOperator{\span}{\operatorname{span}}
\newcommand\proj[2]{\operatorname{proj}_{#1}({#2})}
$$
## Column Space
Let $A=\begin{bmatrix}\mathbf{u}_{1}|\mathbf{u}_{2}|\dots|\mathbf{u}_{n}\end{bmatrix}$ be an $m\times n$ matrix with column vectors $\mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n}$.
The **column space** of $A$ is a subspace of $\Bbb{R}^{m}$, denoted by $\mathcal{C}(A)$ and defined as:
$$
\cspace(A)=\span(\mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n})=\{ x_{1}\mathbf{u}_{1}+x_{2}\mathbf{u}_{2}+\dots+x_{n}\mathbf{u}_{n} | x_{1},\dots,x_{n}\in \Bbb{R}\}
$$
We can rewrite this in matrix notation as:
$$
\cspace(A)=\span(\mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n})=\left\{ \begin{bmatrix}\mathbf{u}_{1}|\mathbf{u}_{2}|\dots|\mathbf{u}_{n}\end{bmatrix}\begin{pmatrix}x_{1}\\x_{2}\\ \vdots\\ x_{n}\end{pmatrix} |\begin{pmatrix}x_{1}\\x_{2}\\ \vdots\\ x_{n}\end{pmatrix} \in \Bbb{R}^{n}\right\}
$$
We can hence write it as:
$$
\cspace(A)=\span(\mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n})=\{ A\mathbf{x}|\mathbf{x}\in \Bbb{R}^{n} \}
$$
## Solving Systems
Let us assume that we have an inconsistent linear system $A\mathbf{x}=\mathbf{b}$. Can we find a vector that comes **as close as possible** to being a solution?
### Least Squares Problem
>Given a linear system $A\mathbf{x}=\mathbf{b}$ with $m$ equations and $n$ variables, find a vector $\mathbf{x}$ that minimises $\|\mathbf{b}-A\mathbf{x}\|$ with respect to the [[Inner Product Spaces|Euclidean Inner Product]] on $\Bbb{R}^{m}$.

We call such a vector $\mathbf{x}$ a **least squares solution** to the system; the vector $\mathbf{b}-A\mathbf{x}$ the **least squares error vector**, and the number $\|\mathbf{b}-A\mathbf{x}\|$ the **least squares error**.
We call these "least squares" because the norm is the square root of the sum of squares:
$$
\text{If }A\mathbf{x}=\mathbf{a}\text{ then }\|\mathbf{b}-A\mathbf{x}\|=\|\mathbf{b}-\mathbf{a}\|=\sqrt{ (b_{1}-a_{1})^{2}+\dots+(b_{m}-a_{m})^{2} }
$$
If we trust different measurements/equations differently, we can use the [[Weighted Euclidean Inner Product]] to compute the norm and get the weighted least squares.
### Best Approximation Theorem
>If $W$ is a finite-dimensional subspace in an inner product space $V$ and $\mathbf{b} \in V$ *then* $\proj{W}{\mathbf{b}}$ is the **best approximation** to $\mathbf{b}$ from $W$ in the sense that:$$\|\mathbf{b}-\proj{W}{\mathbf{b}}\|\leq \|\mathbf{b}-\mathbf{w}\|$$for each vector $\mathbf{w} \in W$ and the inequality is strict for all $\mathbf{w} \neq \proj{W}{\mathbf{b}}$.
#### Proof
>For any vector $\mathbf{w}\in W$, write $\mathbf{b}-\mathbf{w}=\underbrace{ (\mathbf{b}-\proj{W}{\mathbf{b}}) }_{ \text{in }W^{\bot} }+\underbrace{ (\proj{W}{\mathbf{b}}-\mathbf{w}) }_{ \text{in }W }$
>By [[Pythagoras' Theorem]] we have $$\|\mathbf{b}-\mathbf{w}\|^{2}=\|\mathbf{b}-\proj{W}{\mathbf{b}}\|^{2}+\|\proj{W}{\mathbf{b}}-\mathbf{w}\|^{2}\geq \|\mathbf{b}-\proj{W}{\mathbf{b}}\|^{2}$$Moreover, the inequality is strict whenever $\mathbf{w}\neq\proj{W}{\mathbf{b}}$.
## Finding a Solution
Let $W=\{ A\mathbf{x}|\mathbf{x}\in \Bbb{R}^{n} \}$ be the column space of $A$.
Since $\proj{W}{\mathbf{b}}$ is the best approximation to $\mathbf{b}$ from $W$, the least squares solutions to $A\mathbf{x}=\mathbf{b}$; meaning vectors $\mathbf{x}$ minimising $\|\mathbf{b}-A\mathbf{x}\|$; are exactly solutions to:
$$
A\mathbf{x}=\proj{W}{\mathbf{b}}
$$
We can compute this and solve the system, but there is a more useful way.
### Normal Equation
The representation $\mathbf{b}=\mathbf{w}_{1}+\mathbf{w}_{2}$ where $\mathbf{w}_{1}\in W,\mathbf{w}_{2}\in W^{\bot}$ is unique, so the equation $A\mathbf{x}=\proj{W}{\mathbf{b}}$ is equivalent to the condition $\mathbf{b}-A\mathbf{x} \in W^{\bot}$.
The columns of $A$ are the rows of $A^{T}$ so the condition above is equivalent to $A^{T}(\mathbf{b}-A\mathbf{x})=0$ which we can rewrite as:
$$
A^{T}A\mathbf{x}=A^{T}\mathbf{b}
$$
This is called the **normal equation** or **normal system** associated with $A\mathbf{x}=\mathbf{b}$.
So:

>For every linear system $A\mathbf{x}=\mathbf{b}$, the associated normal system $A^{T}A\mathbf{x}=A^{T}\mathbf{b}$ is consistent, and its solutions are exactly least square solutions of $A\mathbf{x}=\mathbf{b}$.
>Moreover, if $W$ is the column space of $A$ and $\mathbf{x}_{0}$ is any least squares solution of $A\mathbf{x}=\mathbf{b}$ then $A\mathbf{x}_{0}=\proj{W}{\mathbf{b}}$.
## Example
Q: Find least squares solutions for the following linear system, using the Euclidean dot product.
$$
\eqalign{
x_{1}-x_{2}&=4\\
3x_{1}+2x_{2}&=1\\
-2x_{1}+4x_{2}&=3
}\quad
A\mathbf{x}=\begin{pmatrix}
1 & -1 \\
3 & 2 \\
-2 & 4
\end{pmatrix}\begin{pmatrix}
x_{1} \\
x_{2}
\end{pmatrix}=\begin{pmatrix}
4 \\
1 \\
3
\end{pmatrix}=\mathbf{b}
$$
A:
The associated normal system $A^{T}A\mathbf{x}=A^{T}\mathbf{b}$ is:
$$
\begin{pmatrix}
1 & 3 & -2 \\
-1 & 2 & 4
\end{pmatrix}
\begin{pmatrix}
1 & -1 \\
3 & 2 \\
-2 & 4
\end{pmatrix}
\begin{pmatrix}
x_{1} \\
x_{2}
\end{pmatrix}=
\begin{pmatrix}
1 & 3 & -2 \\
-1 & 2 & 4
\end{pmatrix}
\begin{pmatrix}
4 \\
1 \\
3
\end{pmatrix}
$$
Computing the matrix products, we get:
$$
\begin{pmatrix}
14 & -3 \\
-3 & 21
\end{pmatrix}
\begin{pmatrix}
x_{1} \\
x_{2}
\end{pmatrix}=
\begin{pmatrix}
1 \\
10
\end{pmatrix}
$$
Solving this yields a unique least squares solution: $x_{1}=\frac{17}{95},\quad x_{2}=\frac{143}{285}$. Computing the error and error vector is now trivial.

