#notes 
## Commands
$$
\text{Click here for command definitions!}
$$
## See Also
+ [[QR Decomposition]]
+ [[Least Squares Solutions for Inconsistent Linear Systems]]
+ [[Projection Matrices]]
## Least Squares Fitting to Data
Assume that you want to determine, possibly approximately, the quantitative dependency between two parameters $x,y$ in some process.
You perform some experiments and get data: $\{ (x_{1},y_{1}),(x_{2},y_{2}),\dots,(x_{n},y_{n}) \}$.
You now want to fit a curve $y=f(x)$ in the plane to this data to some accuracy.
### Method
The simpler the curve, the better; try a straight line $y=mx+c$ first.
This can then be written as a series of equations:
$$
\array{
c+mx_{1}=y_{1} \\
\vdots \\
c+mx_{n}=y_{n}
}
$$
Or, as a matrix:
$$
\begin{pmatrix}
1 & x_{1} \\
\vdots & \vdots \\
1 & x_{n}
\end{pmatrix}\begin{pmatrix}
a  \\
b
\end{pmatrix}
=\begin{pmatrix}
y_{1} \\
\vdots \\
y_{n}
\end{pmatrix}
$$
See [[#Example 1]].
## Examples
### Example 1
Q:
$$
\begin{pmatrix}
1 & 0 \\
1 & 1 \\
1 & 2 \\
1 & 3
\end{pmatrix}
\begin{pmatrix}
a \\
b
\end{pmatrix}
=\begin{pmatrix}
1 \\
3 \\
4 \\
4
\end{pmatrix}
$$
Given this equation, we want to find a least-squares solution to the system $A\mathbf{v}=\mathbf{y}$.
Matrix $A$ has linearly independent columns, so the least-squares solution is unique.

A:
From the associated normal system $A^{T}A\mathbf{v}=A^{T}\mathbf{y}$, we get:
$$
\begin{pmatrix}
a  \\
b 
\end{pmatrix}
=
\begin{pmatrix}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & 2 & 3
\end{pmatrix} &
\begin{pmatrix}
1 & 0 \\
1 & 1 \\
1 & 2 \\
1 & 3
\end{pmatrix}
\end{pmatrix}^{-1}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & 2 & 3
\end{pmatrix}
\begin{pmatrix}
1 \\
3 \\
4 \\
4
\end{pmatrix}
$$
From this, $\begin{pmatrix}a\\ b\end{pmatrix}=\begin{pmatrix}1.5\\ 1\end{pmatrix}$ so $y=1.5+x$ is the **least squares straight line fit**.
### Example 2
Q: 
Given:
+ The data points: $$\{ (1,-1),(2,2),(0,-6),(3,6),(1,0),(2,3) \}$$
+ The weights: $$\{ 4,4,3,3,1,1 \}$$
Fit the data to a curve of the form $y=a+bx+cx^{2}$.

A:
This is equivalent to finding the least squares solution to the system $A\mathbf{x}=\mathbf{y}$:
$$
\begin{pmatrix}
1 & 1 & 1 \\
1 & 2 & 4 \\
1 & 0 & 0 \\
1 & 3 & 9 \\
1 & 1 & 1 \\
1 & 2 & 4
\end{pmatrix}
\begin{pmatrix}
a  \\
b  \\
c 
\end{pmatrix}
=
\begin{pmatrix}
-1 \\
2 \\
-6 \\
6 \\
0 \\
3
\end{pmatrix}
$$
Using the [[Weighted Euclidean Inner Product]]:
$$
\eqalign{
\mathbf{v}_{1}&=(1,1,1,1,1,1) \\
\mathbf{v}_{2}&=\frac{1}{2}(-1,1,-3,3,-1,1) \\
\mathbf{v}_{3}&=\frac{1}{4}(-3,-3,5,5,3,-3) \\
\text{Normalising to:} \\
\mathbf{q}_{1}&=\frac{1}{4}(1,1,1,1,1,1) \\
\mathbf{q}_{2}&=\frac{1}{8}(-1,1,-3,3,-1,1) \\
\mathbf{q}_{3}&=\frac{1}{4\sqrt{ 15 }}(-3,-3,5,5,-3,-3)
}
$$
So we have:
$$
\array{
Q=\begin{pmatrix}
\frac{1}{4} & -\frac{1}{8} & -\frac{3}{4\sqrt{ 15 }} \\
\frac{1}{4} & \frac{1}{8} & -\frac{3}{4\sqrt{ 15 }} \\
\frac{1}{4} & -\frac{3}{8} & \frac{5}{4\sqrt{ 15 }} \\
\frac{1}{4} & \frac{3}{8} & \frac{5}{4\sqrt{ 15 }} \\
\frac{1}{4} & -\frac{1}{8} & -\frac{3}{4\sqrt{ 15 }} \\
\frac{1}{4} & \frac{1}{8} & -\frac{3}{4\sqrt{ 15 }}
\end{pmatrix}\quad
R=\begin{pmatrix}
4 & 6 & 13 \\
0 & 4 & 12 \\
0 & 0 & \sqrt{ 15 }
\end{pmatrix} \\ \\
\mathbf{x}=R^{-1}Q^{T},\quad \mathbf{y}=\frac{1}{160}\begin{pmatrix}
-315 \\
306 \\
-32
\end{pmatrix} \approx \begin{pmatrix}
1.97 \\
1.91 \\
-0.2
\end{pmatrix}
}
$$

