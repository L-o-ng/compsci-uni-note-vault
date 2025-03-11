#notes 
$$
\newcommand\free[1]{\operatorname{free}(#1)}
\newcommand{\ismorph}{\overset{\sim}{=}}
\DeclareMathOperator{\cspace}{\mathcal{C}}
\DeclareMathOperator{\span}{\operatorname{span}}
\newcommand\proj[2]{\operatorname{proj}_{#1}({#2})}
\newcommand{\leaves}{ℓ}
$$
## See Also
+ [[Least Squares Solutions for Inconsistent Linear Systems]]
+ [[QR Decomposition]]
+ [[Linear Regression]]
## Projection Matrices
We showed before that for any column vector $\mathbf{b}$, if $W=\cspace(A)$ is the column space of a matrix $A$ and $\mathbf{x}$ is the least squares solution to $A\mathbf{x}=\mathbf{b}$, then $\proj{W}{\mathbf{b}}=A\mathbf{x}$.
If $A$ has linearly independent column vectors, then we can use [[Least Squares Solutions for Inconsistent Linear Systems#Finding a Unique Least Squares Solution|a formula]]:
$$
\proj{W}{\mathbf{b}}=A\mathbf{x}=A(A^{T}A)^{-1}A^{T}\mathbf{b}
$$
+ A matrix of the form $P=A(A^{T}A)^{-1}A^{T}$ is called a **projection matrix**.
+ For any column vector $\mathbf{b}$, the vector $P\mathbf{b}$ is the orthogonal [[Projection]] of $\mathbf{b}$ onto $W=\cspace(A)$ - the column space of $A$.
+ Projection matrices are used in machine learning and data science to map vectors $\mathbf{b}$ from a higher-dimensional space to a suitably-chosen small-dimensional space $W$.
--- 
