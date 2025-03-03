#definition 

A linear system: 
$$
\begin{matrix}
a_{11}x_{1} &+ &a_{12}x_{2} &+ &\dots &+ &a_{1n}x_{n} &= &b_{1} \\
a_{21}x_{1} &+ &a_{22}x_{2} &+ &\dots &+ &a_{2n}x_{n} &= &b_{2} \\
&&&&&&\vdots&=&\vdots \\
a_{m1}x_{1} &+ &a_{m2}x_{2} &+ &\dots &+ &a_{mn}x_{n} &= &b_{m} \\
\end{matrix}
$$Can also be written in a matrix form as $A\mathbf{x}=\mathbf{b}$ where: 
$$
A=
\begin{pmatrix}
a_{11}&a_{12}&\dots&a_{1n} \\
a_{21}&a_{22}&\dots&a_{2n} \\
\vdots&\vdots&\ddots&\vdots \\
a_{m 1}&a_{m 2}&\dots&a_{mn}
\end{pmatrix},
\mathbf{x}=\begin{pmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{pmatrix}\text{ and }
\mathbf{b}=\begin{pmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{m}
\end{pmatrix}
$$The matrix $A$ is called the **coefficient matrix** of the system.
If $A$ is (square and) invertible then the solution can be found as $\mathbf{x}=A^{-1}\mathbf{b}$.
