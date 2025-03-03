#notes 

**Lagrange Multipliers** are a way to apply *constrained optimisation* to a function.
Consider the function $f(x,y)=x^{2}+y^{2}$:

![[Lagrange Multipliers 1.png]]

Now consider the function $g(x,y)=xy-3=0$:

![[Lagrange Multipliers 2.png]]

The yellow dots on these images represent the *minima*.
## Level Curves
![[Lagrange Multipliers 3.png]]
Consider drawing contours onto the graph, where height is constant.
Each value of $z$ produces a new curve, called a level curve: the set of points where a function $f(x,y)=z$.
![[Lagrange Multipliers 4.png]]
This level curve barely touches the restriction, so it is special.
## Constrained Optimisation
Recall [[Multivariate Extrema]].
Now consider that the variables are now *independent*.
>The goal of constrained optimisation is to minimise or maximise a function $f(\mathbf{x})$ where $x=(x_{1},\dots,x_{n})$ and $x_{1},\dots,x_{n}$ are not independent
>	relation $g(\mathbf{x})=0$ ; think of this as a constraint.

If the constraint is very simple, we can solve it for 1 variable and plug it back into $f$, giving a usual min/max problem:
$$
\eqalign{
f(x,y)&=x^{2}+y^{2}, x=2-y \\
h(y)&=(2-y)^{2}+y^{2}=2y^{2}-4y+4 \\
h^{\prime}(y)&=0 \iff 4y-4=0 \iff y=1 \\
&\therefore \text{ based on the constraint }x = 1 \\
&f\text{ is minimised at }(1,1)
}
$$
If the constraint is *not* simple, we need a new method. We cannot just look for critical points of $f$ as they will typically not satisfy the constraint, so will not be good solutions.
### Example
Let's find the point closest to the origin on a hyperbola $xy=3$.
This means we need to *minimise* the distance of a point of the hyperbola to the origin $(0,0)$.
This means we need to minimise the function $f(x,y)=\sqrt{ x^{2}+y^{2} }$ subject to the constraint $xy=3\implies xy-3=0$; we can call this $g(x,y)=xy-3=0$.
So:
$$
\array{
\operatorname{min} f(x,y)=x^{2}+y^{2} \\
\text{Subject to }g(x,y)=xy-3=0
}
$$
At the minimum, the level curve of $f$ is tangent to the hyperbola $xy=3$.
+ At the minimum, the level curve of $f$ is tangent to the level curve of $g$!

We can solve for points where this holds by considering that the level curves are tangent to each-other, so $f, g$ have the same tangent line, so the gradient vectors $\nabla f,\nabla g$ are parallel to each-other, so:
$$
\implies \exists \lambda \in \Bbb{R}:\nabla f=\lambda \nabla g
$$
The optimisation problem becomes a system of equations:
$$
\nabla f=\lambda \nabla g \implies \begin{cases}
f_{x}&=\lambda g_{x} \\
f_{y}&=\lambda g_{y}
\end{cases}
$$
And $g=0$.

Recall now that $f(x,y)=x^{2}+y^{2}$ and $g(x,y)=xy-3$, so we need to solve:
$$
\begin{Bmatrix}
f_{x}=\lambda g_{x} \\
f_{y}=\lambda g_{y} \\
g=0
\end{Bmatrix}\implies \begin{Bmatrix}
2x=\lambda y  \\
2y = \lambda x  \\
xy=3
\end{Bmatrix}\implies \begin{Bmatrix}
2x = \frac{3\lambda}{x} \\
2 \frac{3}{x}=\lambda x  \\
y = \frac{3}{x}
\end{Bmatrix}\implies \begin{Bmatrix}
x^{2}=\frac{3}{2}\lambda  \\
x^{2} = \frac{6}{\lambda} \\
y=\frac{3}{x}
\end{Bmatrix}
$$
Solving for lambda, $\lambda=\pm 2$
For $\lambda=2$ we get 2 solutions: $(x,y)=(\sqrt{ 3 },\sqrt{ 3 }),(-\sqrt{ 3 },-\sqrt{ 3 })$.
For $\lambda = -2$, we have no solutions.
You can check that at both these points, $\nabla f=2\nabla g$.
+ $\lambda$ is called the **Lagrange Multiplier** - it is what you multiply the gradient of $g$ by to get the gradient of $f$ at the constraint minimum.
## Lagrange Multipliers Method
**The Goal**: find the stationary points of an objective function $f(\mathbf{x})\in C^{1}$ subject to the constraint $g(\mathbf{x})=0$.
**The Method**:
1) Define a new objective function: the **Lagrangian**: $$\mathscr{L}(\mathbf{x},\lambda)=f(\mathbf{x})-\lambda g(\mathbf{x})$$
2) Find the stationary points of $\mathscr{L}$ with respect to both $\mathbf{x},\lambda$; so solve the system of equations $\nabla f(\mathbf{x})=\lambda \nabla g(\mathbf{x})$ and $g(\mathbf{x})=0$ for the unknowns $\mathbf{x},\lambda$.
3) Then, the constrained extrema are found amongst the solutions to these equations. Now identify their nature.
Observe that when trying to minimise $\mathscr{L}$ we need to set $\nabla \mathscr{L}=0$; ie: $\nabla f=\lambda \nabla g$ which is what we used in the above example: note the reasoning that ==at the minimum, the level curve of f is tangent to the level curve of g==.
## Validity
Why does $\nabla f=\lambda \nabla g$ hold at a constrained minimum?

At the constrained minimum/maximum, in any direction along the level curve of $g=0$, the rate of change of $f$ must be 0. So, at the constrained minimum/maximum, for any unit vector $u$ tangent to $g=0$, we must have that the [[Multivariate Differentiation#Directional Derivatives|directional derivative]] of $f$ in the direction of $u$ is 0: 
$$
\nabla_{u}f(\mathbf{x}_{0})=0\iff \nabla f.u=0
$$
This means that any such vector $u$ is perpendicular to the gradient $\nabla f$: $\nabla f \perp \text{level set of }g$.
However, we know that $\nabla g\perp\text{level set of }g$. So, we must have:
$$
\nabla f \parallel \nabla g 
$$
## Another Example
Q: Optimise $f(x,y)=xy+1$ subject to the constraint $g(\mathbf{x})=x^{2}+y^{2}-1=0$.
A:
1) Define the Lagrangian $\mathscr{L}(x,y,\lambda)=xy+1-\lambda x^{2}-\lambda y^{2}-\lambda$.
2) Solve:$$\begin{Bmatrix} f_{x}=\lambda g_{x} \\ f_{y}=\lambda g_{y} \\ g=0 \end{Bmatrix}\implies \begin{Bmatrix} y=2\lambda x  \\ x=2\lambda y  \\ x^{2}+y^{2}=1 \\ \end{Bmatrix}\implies \begin{Bmatrix} y=2\lambda x  \\ x=4\lambda^{2}x  \\ x^{2}+y^{2}=1 \end{Bmatrix}\implies \begin{Bmatrix} y=2\lambda x  \\ x(1-4\lambda^2)=0 \\ x^{2}+y^{2}=1\end{Bmatrix}$$
3) So
	1) For $x=0$ we get from the first equation that $y=0$, contradicting the 3rd equation, so $x$ cannot be 0.
	2) $4\lambda^{2}=1$ gives $\lambda=\pm \frac{1}{2}$
		1) For $\lambda= \frac{1}{2}$ we get from equation 1 that $y=x$ so from equation 3 we get $x=\pm \frac{1}{\sqrt{ 2 }}$ and the extrema are found at $\left( \frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }} \right)$ and $\left( -\frac{1}{\sqrt{ 2 }}, -\frac{1}{\sqrt{ 2 }} \right)$, maxima.
		2) For $\lambda=-\frac{1}{2}$ we get from equation 1 that $y=-x$ so from equation 3 we get $x=\pm \frac{1}{\sqrt{ 2 }}$ and the extrema are found at $\left( \frac{1}{\sqrt{ 2 }}, -\frac{1}{\sqrt{ 2 }} \right)$ and $\left( -\frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }} \right)$, minima.

$$
H = 
\begin{bmatrix}
\frac{\partial^2 \mathscr{L}}{\partial x^2} & \frac{\partial^2 \mathscr{L}}{\partial x \partial y} & \frac{\partial^2 \mathscr{L}}{\partial x \partial \lambda} \\
\frac{\partial^2 \mathscr{L}}{\partial y \partial x} & \frac{\partial^2 \mathscr{L}}{\partial y^2} & \frac{\partial^2 \mathscr{L}}{\partial y \partial \lambda} \\
\frac{\partial^2 \mathscr{L}}{\partial \lambda \partial x} & \frac{\partial^2 \mathscr{L}}{\partial \lambda \partial y} & \frac{\partial^2 \mathscr{L}}{\partial \lambda^2}
\end{bmatrix}
$$
