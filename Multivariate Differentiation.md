**#notes 

See also: [[Linear Approximations]]
See also: [[Multivariate Calculus]]

A function $f:\mathbb{R}\times \mathbb{R}\to \mathbb{R}$ can be viewed as a 2D surface.
For example,
$$f(x,y)=\sin x+\cos y+1.5$$
![[Multivariate Function Example.png]]
We may be interested in: 
+ The gradient of the surface in a certain direction.
+ The limit of $f$ as we approach a given $(x,y)$ value.
+ The direction of steepest ascent from a given point.
+ A linear approximation to the surface at a given point.
## Continuity vs Partial Derivatives
Consider the following function:
$$f(x,y)=\begin{dcases}
1 & xy=0\\
0 & xy \ne 0
\end{dcases}$$
This has partial derivatives at $(0,0)$, for example:
$$f_{y}(0,0)=\lim_{ y \to 0 } \frac{f(0,y)-f(0,0)}{y-0}=\lim_{ y \to 0 } \frac{1-1}{y}=0$$
However, $f$ is *not* continuous at $(0,0)$:
+ $f(0,\epsilon)=1$ for arbitrarily small $\epsilon$.
+ $f(\epsilon,\epsilon)=0$ for arbitrarily small $\epsilon$.
So we can get arbitrarily close to $(0,0)$ with $f$ taking value 1 or 0, hence $\lim_{(x,y) \to (0,0) }f(x,y)$ does not exist and $f$ is not continuous.
Hence in the multivariate case, existence of partial derivatives with respect to $x$ and $y$ does not imply continuity or that the function [[Limits of functions#Niceness|behaves nicely]].
## Directional Derivatives
Consider a point $\mathbf{x}_{0}=(x_{0},y_{0})$ and a direction given by a unit vector $\mathbf{v}=(^{\mathbf{v}_{x}}_{\mathbf{v}_{y}})$:
The directional derivative of $f(x,y)$ in the direction $\mathbf{v}$ is defined to be: $$\nabla_{v}f(x_{0},y_{0})=\lim_{ h \to 0 }\frac{f(x_{0}+h\cdot \mathbf{v}_{x},y_{0}+h\cdot \mathbf{v}_{y})-f(x_{0},y_{0})}{h}=\lim_{ h \to 0 }\frac{f(\mathbf{x}_{0}+h\mathbf{v})-f(\mathbf{x}_{0})}{h}$$
This gives the gradient of the slope of $f$ if you were to move in the $\mathbf{v}$ direction through point $\mathbf{x}_{0}=(x_{0},y_{0})$.
### An Easier Way?
If the surface is 'well behaved', or approximately flat at a small scale, then we can determine the slope in any direction from the slope in the $x$ and $y$ directions:

The slope in direction $\mathbf{v}=(^{\mathbf{v}_{x}}_{\mathbf{v}_{y}})$ will be $v_{x}f_{x}+v_{y}f_{y}$
I.e. $$\nabla_vf=\mathbf{v}\cdot(^{f_{x}}_{f_{y}})=\mathbf{v}\cdot \begin{pmatrix}
\frac{\partial f}{\partial x} \\
\frac{\partial f}{\partial y}
\end{pmatrix}$$
![[Directional Derivative Example.png]]
### In General
We say $f$ is **differentiable** if for all unit vectors $\mathbf{v}$ we have: $$\nabla_{v}f=v_{x}\frac{\partial f}{\partial x}+v_{y}\frac{\partial f}{\partial y}=\mathbf{v}\begin{pmatrix}
f_{x} \\
f_{y}
\end{pmatrix}$$
Geometrically, this means that close to the point $(x,y)$ the function $f$ is like a plane.
The vector of partial derivatives $\begin{pmatrix}f_{x}\\f_{y}\end{pmatrix}$ is denoted $\nabla f$.
#### $\mathbf{\nabla}$ 
This symbol is called a nabla.
It is pronounced 'del' as an operator, or 'grad' when it is the result, just like 'derivative of' and 'gradient of'.
>$\nabla f$ is a vector pointing in the direction of the greatest rate of increase of $f$ and having magnitude the rate of increase of $f$ in that direction.
## Functions of Multiple Real Variables
We can consider functions of many more than 2 variables; for example, a 3D function $h(x,y,z)$ can represent heat at a point in 3D space.
![[3D function heatmap.png]]
### In General
Generally, we write:
$\mathbb{R}\times \mathbb{R}\times \mathbb{R}\times\dots \times \mathbb{R}$ as $\mathbb{R}^n$ and consider real valued functions of $n$ independent variables $x_{1},x_{2},\dots,x_{n}$, so: $$f:\mathbb{R}^n \to \mathbb{R}, f(x_{1},x_{2},\dots,x_{n})$$
This gives an $n$-dimensional surface floating in $(n+1)$-dimensional space.
