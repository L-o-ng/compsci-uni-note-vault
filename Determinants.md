#notes 

See also: [[The Identity Matrix]], [[Matrix Multiplication]], [[Basis Images]]
## [[Pythagoras' Theorem]]
![Graphical proof of Pythagoras theorem](Pictures/Pythagoras-proof-anim.svg)
## What is a Determinant?
The determinant is the signed area of the image of the unit square.
It is **undefined** for non-square matrices.
### Determinant of a $\mathbf{2\times2}$ Matrix
The **determinant** of matrix $A$ is written as $\det(A)\text{ or }|A|$
So, for a $2\times 2$ matrix: $$\det(\begin{bmatrix}
a&b  \\
c&d
\end{bmatrix})=\begin{vmatrix}
a & b  \\
c & d
\end{vmatrix}=ad-bc$$
#### Examples
$$\begin{vmatrix}
1 & -2 \\
3 & -4
\end{vmatrix}=1\cdot(-4)-(-2)\cdot3=2
$$$$\begin{vmatrix}
1 & -2 \\
-2 & 4
\end{vmatrix}=1\cdot4-(-2)\cdot(-2)=0$$
As you can see, [[Linear Combinations#Linear (In)dependence|linearly dependent]] columns have determinant 0.
### Determinant of an $\mathbf{n \times n}$ Matrix
We define the determinant in terms of its properties.
If a matrix $A$ is made out of column vectors $\mathbf{c}_{1},\dots,\mathbf{c}_{n}$ we can define the function on the columns to be: $$\det(A)=\det(\mathbf{c}_{1},\dots,\mathbf{c}_{n})$$
## Definitions
### 1: Linearity
There is linearity in each column so that:
$$\array{\det(a\mathbf{c}_{1},\dots,\mathbf{c}_{n})=a \det(\mathbf{c}_{1},\dots,\mathbf{c}_{n})\\ \det(\mathbf{c}_{1},\dots,a\mathbf{c}_{n})=a\det(\mathbf{c}_{1},\dots,\mathbf{c}_{n})\\ \det(\mathbf{c}_{1}+\mathbf{c}^\prime_{1},\dots,\mathbf{c_{n}})=\det(\mathbf{c}_{1},\dots,\mathbf{c}_{n})+\det(\mathbf{c}_{1},\dots,\mathbf{c}_{n})}$$
etc: This applies to all columns.
### 2: Alternating
$$\text{If }\mathbf{c}_{i}=\mathbf{c}_{j}\text{ for some }i \ne j\text{ then }\det(A)=0$$
### 3: Identity
The determinant of [[The Identity Matrix]] is 1.
## Rationale based on Area & Volume
+ Doubling one of the vectors doubles the area/volume.
+ We can add together the area/volumes of rectangles/cuboids/hypercuboids.
+ If the image of two vectors is the same then the image space has collapsed.
	+ For example, from 3D to 2D.
+ The unit square/cuboid/hypercuboid has area/volume 1.
## Properties of Determinants
If a matrix $B$ is like $A$ but with two columns swapped then $\det(B)=-\det(A)$.
+ Consider $\det(\mathbf{c}_{1}+\mathbf{c}_{2},\mathbf{c}_{1}+\mathbf{c}_{2},\mathbf{c}_{3},\dots,\mathbf{c}_{n})$
+ Repeated columns have determinant 0.
+ If a matrix $A$ has a column made up of zeroes then $\det(A)=0$.
+ If a scalar multiple of one column is added to another column then the determinant is unchanged.
+ If a matrix $A$ has columns that are linearly dependent then $\det(A)=0$.
### Determinant of a Diagonal Matrix
$$\begin{align}
\array{\begin{vmatrix}
2 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & -3
\end{vmatrix}&=2\cdot \begin{vmatrix}
1 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & -3
\end{vmatrix}\\&=2\cdot 4 \cdot \begin{vmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -3
\end{vmatrix}\\&=2\cdot 4\cdot -3\cdot \begin{vmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{vmatrix}\\&=-24}
\end{align}$$
## Alternative Derivation of $\mathbf{2 \times 2}$ Determinant
- Use linearity on the first column to expand out
- Then expand out the second column
- Determinants of repeated columns are 0
- Determinants of others are $\pm1$
## Determinant of $\mathbf{3\times 3}$
- Expand out first column: three terms
- Expand out second column: each one has two non-zero terms
- Expand out third column: each one has one non-zero term
## Determinant of $\mathbf{n\times n}$
Expanding out indefinitely to matrices whose columns are _permutations_ of the identity
Based on this we can use the _Laplace expansion_ 
$$det(C) = \\sum_{j=1}^n (-1)^{i+j}c_{ij}M_{ij}$$
Where $M_{ij}$ is the minor: the determinant of the matrix $C$ with row $i$ and column $j$ removed
This works for any $i$: usually people use $i=1$

### $\mathbf{3\times 3}$ Example
$$\begin{vmatrix}
1&2&3 \\
3&1&2 \\
0&0&1
\end{vmatrix}=1\begin{vmatrix}
1&2 \\
0&1
\end{vmatrix}-2\begin{vmatrix}
3&2 \\
0&1
\end{vmatrix}+3\begin{vmatrix}
3&1 \\
0&0
\end{vmatrix}$$
## Combining Matrices
$$\det(AB)=\det(A)\cdot \det(B)$$
$$\det(A^{-1})=\frac{1}{\det(A)}$$
## Uses
+ Finding the area or volume of **images**.
+ Finding out whether a set of vectors is **linearly dependent**.
+ Finding out whether a matrix has an inverse: $\det(A) \ne 0$.
+ Finding the inverse of a matrix.
+ Solving equations involving matrices.


