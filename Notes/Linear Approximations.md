#notes 

## Univariate Functions
For a univariate function, the derivative gives details of the tangent line: $$f^\prime(x)=\lim_{ h \to 0 }\frac{f(x+h)-f(x)}{h}$$
So for small $h$, $$hf^\prime(x)\approx f(x+h)-f(x)$$
## Multivariate Functions
For a surface we have seen that $\mathbf{v}\cdot\nabla f(\mathbf{x}_{0})$ is the slope in the direction $\mathbf{v}$.
$$\array{f(\mathbf{x}_{0}+h\mathbf{v})\approx f(\mathbf{x}_{0})+h\mathbf{v}\cdot \nabla f(\mathbf{x_{0}}),\\ \text{ which is }\\ f(x_{0}+h\cdot v_{x},y_{0}+h\cdot v_{y})\approx f(x_{0},y_{0})+h\cdot v_{x} \frac{\partial f}{\partial x}+h\cdot v_{y}\frac{\partial f}{\partial y}}$$
### Example
Consider the following function: $$f(x,y)=\begin{dcases}
\frac{x^2y}{x^2+y^2} &: (x,y)\ne(0,0)\\
0 &:(x,y)=(0,0)
\end{dcases}$$
![[Linear approximation for a multivariate function not working example.png]]
Now $f$ is continuous at all points.
It has partial derivatives as follows:
$$\frac{\partial f}{\partial x}=\frac{2xy^3}{(x^2+y^2)^2}$$$$\frac{\partial f}{\partial y}=\frac{x^4-x^2y^2}{(x^2+y^2)^2}$$
Even at $(0,0)$ these exist and are both 0.
However, the directional derivatives at $(0,0)$ do not agree with partial derivatives: there is no plane approximation.
