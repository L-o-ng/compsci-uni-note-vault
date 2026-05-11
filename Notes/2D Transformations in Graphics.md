#notes 

>[!abstract]
>So far, we can render **static** objects.
> + To create dynamic scenes, we need to *move*, *rotate*, and *resize* objects;
> + These operations are known as *transformations*.

A **transformation** is an operation that changes the position, rotation, or scale of geometric data.
## 2D Transforms
![[Fundamental 2D transforms.png]]
Currently, three different operations are performed. This is inefficient for a graphics pipeline as they cannot be easily chained together. We can represent these operations as [[Linear Algebra|Matrices]].
## Simple 2D Matrices
We can represent a 2D point $P$ as a vector $\begin{pmatrix}x\\ y\end{pmatrix}$.
Under this system, there is no transformation matrix, as that is an affine transformation.
### Scaling
$$
\begin{pmatrix}
x' \\
y'
\end{pmatrix}
=
\underbrace{\begin{pmatrix}
s_{x} & 0 \\
0 & s_{y}
\end{pmatrix}}_{M_{\text{scale}}}
\begin{pmatrix}
x  \\
y
\end{pmatrix}
$$
### Rotation
$$
\begin{pmatrix}
x' \\
y'
\end{pmatrix}
=
\underbrace{\begin{pmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{pmatrix}}_{M_{\text{rotate}}}
\begin{pmatrix}
x \\
y
\end{pmatrix}
$$
## Homogenous Coordinates
![[Homogenous Coordinates.png]]
In homogeneous coordinates, $w$ acts as a scale factor. The "real world" is the slice where $w=1$. *Changing* $w$ scales the coordinate values, but represents the same location in space after normalisation. Any point $(x,y,w)$ is equivalent to $\left( \frac{x}{w}, \frac{y}{w},1 \right)$. They lie on the same **projective ray**.
### New Matrices
Our 2D point becomes a 3D vector: $\begin{pmatrix}x\\ y\\ 1\end{pmatrix}$
Our transformation matrices become 3D.
We can use the extra column to encode translation.
#### Scaling
$$
M_{\text{scale}} = \begin{pmatrix}
s_{x} & 0 & 0 \\
0 & s_{y} & 0 \\
0 & 0 & 1
\end{pmatrix}
$$
#### Rotation
$$
M_{\text{rotate}} = \begin{pmatrix}
\cos \theta & -\sin \theta & 0 \\
\sin \theta & \cos \theta & 0 \\
0 & 0 & 1
\end{pmatrix}
$$
#### Translation
$$
M_{\text{translate}}=\begin{pmatrix}
1 & 0 & t_{x} \\
0 & 1 & t_{y} \\
0 & 0 & 1
\end{pmatrix}
$$

