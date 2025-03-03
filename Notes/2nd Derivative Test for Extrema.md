#notes 
## Theorem
>Suppose $f(x,y)\in C^2\text{ and }f_{x}(x_{0},y_{0})=0=f_{y}(x_{0},y_{0})$ then:
>	$(x_{0},y_{0})$ is a local minimum if $f_{xx}f_{yy}-f_{xy}^2>0\text{ and }f_{xx}<0\text{ at }(x_{0},y_{0})$
>	$(x_{0},y_{0})$ is a local maximum if $f_{xx}f_{yy}-f_{xy}^2>0\text{ and }f_{xx}>0\text{ at }(x_{0},y_{0})$
>	$(x_{0},y_{0})$ is a saddle point if $f_{xx}f_{yy}-f_{xy}^2<0\text{ at }(x_{0},y_{0})$
>	If $f_{xx}f_{yy}-f_{xy}^2=0$ then the test is **inconclusive** and higher-order derivatives must be analysed.

### Extra Note
$$f_{xx}f_{yy}-f_{xy}^2=f_{xx}f_{yy}-f_{xy}f_{yx}=\det(H_{f})\text{ for smooth functions}$$
See [[Determinants]], [[Hessian Matrices]]
## [[Linear Approximations]], [[Quadratic Approximations]]
Recall that for univariate functions, $$f(x_{0}+x)\approx f(x_{0})+f^\prime(x_{0})x+ \frac{1}{2}f{^\prime}{^\prime}(x_{0})x^2$$For multivariate functions, the linear approximation is: $$f:\mathbb{R}^n \to \mathbb{R},\quad f(\mathbf{x}_{0}+\mathbf{v})\approx f(\mathbf{x}_{0})+\nabla f(\mathbf{x}_{0})\cdot \mathbf{v}$$The second order partial derivatives give a quadratic approximation: $$f(\mathbf{x}_{0}+\mathbf{v})\approx f(\mathbf{x}_{0})+\nabla f(\mathbf{x}_{0})\cdot \mathbf{v}+ \frac{1}{2}\mathbf{v}^T\mathbf{H}_{f}(\mathbf{x}_{0})\mathbf{v}$$At a stationary point, the second term is 0, so: $$f(\mathbf{x}_{0}+\mathbf{v})\approx f(\mathbf{x}_{0})+ \frac{1}{2}\mathbf{v}^T\mathbf{H}_{f}(\mathbf{x}_{0})\mathbf{v}$$As $\mathbf{H}_{f}(\mathbf{x}_{0})$ is real and symmetric, it has **orthogonal eigenvectors** $\mathbf{e}_{1},\dots,\mathbf{e}_{n}$ with **eigenvalues** $\lambda_{1},\dots,\lambda_{n}$.
So, we can write $\mathbf{v}=c_{1}\mathbf{e}_{1}+\dots+c_{n}\mathbf{e}_{n}$ and by simplifying, $$\begin{align}f(\mathbf{x}_{0}+\mathbf{v})&\approx f(\mathbf{x}_{0})+ \frac{1}{2}\mathbf{v}^T\mathbf{H}_{f}(\mathbf{x}_{0})\mathbf{v} \\&=f(\mathbf{x}_{0})+ \frac{1}{2}(c_{1}\mathbf{e}_{1}+\dots+c_{n}\mathbf{e}_{n})^T\mathbf{H}_{f}(\mathbf{x}_{0})(c_{1}\mathbf{e}_{1}+\dots+c_{n}\mathbf{e}_{n}) \\&=f(\mathbf{x}_{0})+ \frac{\lambda_{1}}{2}c_{1}^2+\dots+ \frac{\lambda_{n}}{2}c_{n}^2\end{align}$$So this looks: 
+ Like a parabolic bowl open upwards if all $\lambda_{i}>0$,
+ Like a parabolic bowl open downwards if $\lambda_{i}<0$,
+ Like a saddle if there are $\lambda_{i},\lambda_{j}$ with opposite signs.
### Final Note
$$\text{For }n=2,\det(\mathbf{H}_{f})=\lambda_{1}\lambda_{2}$$
