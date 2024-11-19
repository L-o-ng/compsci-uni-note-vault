#notes 

![[Animated_illustration_of_inflection_point.gif]]

See also: [[Finding Extrema]] for univariate extrema.
## Notes
+ [[Quadratic Approximations]]
+ [[Smoothness and Higher Order Derivatives]]
## Smoothness for Multivariate Functions
For a function $f(x_{1},x_{2},\dots,x_{n})$, a $k^{\text{th}}$ partial derivative is a function obtained by differentiating $k$ times with respect to members of $(x_{1},x_{2},\dots,x_{n})$.
$$\large \array{\begin{align}
\text{If }&f(x_{1},\dots,x_{8})=x_{7}x_{2}^2x_{1}+x_{6}^4+x_{8}^3x_{1}^7+5x_{2} \\
\text{A third derivative is: }&\frac{\partial}{\partial x_{1}}\left( \frac{\partial}{\partial x_{7}}\left( \frac{\partial f}{\partial x_{2}} \right) \right)=\frac{\partial^3f}{\partial x_{1}\partial x_{7}\partial x_{2}}=f_{x_{2}x_{7}x_{1}} \\
\end{align}
\\
\begin{matrix}
f_{x_{2}}=2x_{7}x_{2}x_{1}+5 & f_{x_{2}x_{7}}=2x_{2}x_{1} & f_{x_{2}x_{7}x_{1}}=2x_{2}
\end{matrix}}
$$
A function $f$ such that partial derivatives of all orders exist and are continuous is called **smooth**.
Multivariate polynomials are all *smooth* functions.
![[Bivariate Extrema about requiring further checks.png]]
![[Bivariate Extrema further checking 2.png]]
![[Bivariate Extrema requiring further checking 3.png]]
### Examples
See [[Bivariate Extrema Examples]]

