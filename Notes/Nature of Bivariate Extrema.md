#notes 

>Suppose $f(x,y)\in C^{2}$ and $f_{x}(x_{0},y_{0})=0=f_{y}(x_{0},y_{0})$, then:
>	$(x_{0},y_{0})$ is a local maximum if $f_{xx}f_{yy}-f^{2}_{xy}>0, f_{xx}<0$ at $(x_{0},y_{0})$;
>	$(x_{0},y_{0})$ is a local minimum if $f_{xx}f_{yy}-f^{2}_{xy}>0, f_{xx}>0$ at $(x_{0},y_{0})$;
>	$(x_{0},y_{0})$ is a saddle point if $f_{xx}f_{yy}-f^{2}_{xy}<0$ at $(x_{0},y_{0})$;
>	If $f_{x x}f_{yy}-f^{2}_{xy}=0$ then the test is inconclusive and higher order derivatives must be analysed.

Also notes that $f_{x x}f_{yy}-f^{2}_{xy}=f_{x x}f_{yy}-f_{xy}f_{yx}=\det(H_{f})$
## Eigenvalues
At a stationary point the [[Quadratic Approximations|quadratic approximation]] is:
$$
f(\mathbf{x}_{0}+\mathbf{v})\approx f(\mathbf{x}_{0})+\frac{1}{2}\mathbf{v}^{T}H_{f}(\mathbf{x}_{0})\mathbf{v}
$$
But $H_{f}$ is real and symmetric. This means it has [[Eigenvectors and Eigenvalues|orthogonal eigenvectors]] $\mathbf{e}_{1},\dots,\mathbf{e}_{n}$ with eigenvalues $\lambda_{1},\dots,\lambda_{n} \in \Bbb{R}$, so we can write $\mathbf{v}=c_{1}e_{1}+\dots+c_{n}e_{n}$ and so we obtain by substitution:
$$
f(\mathbf{x}_{0}+\mathbf{v})=f(\mathbf{x}_{0})+\frac{\lambda_{1}}{2}c_{1}^{2}+\dots+\frac{\lambda_{n}}{2}c_{n}^{2}
$$
![[Multivariate Extrema Eigenvalue test.png]]

