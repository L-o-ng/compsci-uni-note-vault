#notes 

See also: [[The Identity Matrix]].
See also: [[Matrix Multiplication]]

A **matrix** tells you how to manipulate the basis vectors of a vector field to transform it.
For example, rotation by 90 degrees anticlockwise in $\mathbb{R}^2$:
$$\begin{bmatrix}
0 & -1\\1 & 0
\end{bmatrix}$$
## In General
We can write *basis vector images* as columns under $f$ as a *matrix*:
$$A=\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m 2} & \cdots & a_{mn} 
\end{bmatrix}$$
And, where $a_{ij}$ is the $i$th component of the $j$th basis vector:
$$f(\mathbf{e}_{j})=\sum_{i=1}^ma_{ij}\mathbf{e}_{i}$$
The image of the vector $A\space\mathbf{x}=A(x_{1},\dots,x_{n})$ is
$$\small{\begin{aligned} f(\sum_{j=1}^n x_j\mathbf{e}_j) &= \sum_{j=1}^n x_j f(\mathbf{e}_j) \\ &= \sum_{j=1}^n x_j \sum_{i=1}^m a_{ij} \mathbf{e}_i \\ &= \sum_{j=1}^n \sum_{i=1}^m a_{ij} x_j \mathbf{e}_i \\ \end{aligned}}$$
So the $i$th component of the image of $\mathbf{x}$ is $\sum_{j=1}^ma_{ij}\mathbf{x}_{j}$.
