#notes 
## See Also
+ [[Taylor Series]]
+ [[Series and Power Series]]
+ [Visualisation](http://www.jezzamon.com/fourier/)
## Fourier Series
Recall the [[Taylor Series]] definition. We can approximate any function centred at $x_{0}$ so long as it is **infinitely differentiable**. This means we will not be able to approximate irregular functions like:
![[Fourier Series Example 1.png]]
We can propose a new series expansion that uses [[Trigonometry|Trigonometric Functions]] so that the series value converges to the function value at *almost* any point, even for irregular functions.
Even when it does not converge exactly, it converges to a sensible value.

>For a function $f(x),-\pi<x<\pi$, the **Fourier Series** is: 
>$$f(x)\approx \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n}\cos nx+b_{n}\sin nx$$
>where:
>$$\eqalign{a_{n}&=\frac{1}{\pi}\int _{-\pi}^{\pi}f(x)\cos nx \, dx \\ b_{n} &= \frac{1}{\pi}\int _{-\pi}^{\pi}f(x)\sin nx \, dx }$$
>If $f$ is piecewise continuous and $\int _{-\pi}^{\pi}[f(x)]^{2} \, dx$ exists, then the Fourier series converges.
>For all points $x$ at which $f$ is continuous, the series converges to $f(x)$.
>For points $y$ at which there is a jump discontinuity, the series converges to:
>$$\frac{1}{2}\left(\lim_{ x \to y^{-} } f(x)+\lim_{ x \to y^{+} }f(x) \right)$$
## Creating the Fourier Series
### Key Facts
+ Note that: $$\int _{-\pi}^{\pi}\cos mx \, dx =\int _{-\pi}^{\pi}\sin nx \, dx =0\quad \forall m,n \in \Bbb{Z},\quad m \neq 0$$
+ By the trigonometric identities, we can derive the following identities: $$\eqalign{\sin A\cos B&=\frac{1}{2}(\sin(A-B)+\sin(A+B))\\ \sin A\sin B&= \frac{1}{2}(\cos(A-B)-\cos(A+B))\\ \cos A\cos B&=\frac{1}{2}(\cos(A-B)+\cos(A+B))}$$
+ This means we have: $$\int _{-\pi}^{\pi}\sin nx\cos mx \, dx =\frac{1}{2} \int _{-\pi}^{\pi}\sin(n-m)x \, dx +\frac{1}{2} \int _{-\pi}^{\pi}\sin(n+m)x \, dx =0 \forall n,m$$$$\eqalign{\int _{-\pi}^{\pi}\sin nx\sin mx \, dx &=\frac{1}{2}\int _{-\pi}^{\pi}\cos((n-m)x) \, dx -\frac{1}{2}\int _{-\pi}^{\pi}\cos((n+m)x) \, dx \\ &=0,\quad \forall m\neq\pm n\text{ or }m=n=0\\ &=\pi,\quad \text{if }m=n=0\\ &=-\pi,\quad \text{if }m=-n \neq 0}$$$$\eqalign{ \int _{-\pi}^{\pi}\cos nx\cos mx \, dx &= \frac{1}{2}\int _{-\pi}^{\pi}\cos((n-m)x) \, dx +\frac{1}{2}\int _{-\pi}^{\pi}\cos((n+m)x) \, dx \\ &=0,\quad \forall m\neq\pm n \\ &=\pi,\quad \text{if }m=\pm n\neq 0\\ &=2\pi,\quad \text{if }m=n=0 } $$
### Series Proposal
For a function $f(x),-\pi<x<\pi$, we will construct a series for $f$ of the form:
$$
f(x)\approx \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n}\cos nx+b_{n}\sin nx
$$
The range is no real restriction - we can always scale an arbitrary function $f$ on a range $(a,b)$ by setting:
$$
d(x)=g\left( \left( x- \frac{b+a}{2} \right) \frac{2\pi}{b-a} \right)
$$
where $g$ is a function on $(-\pi,\pi)$.
### Fourier Coefficients
Suppose that such a series exists.
Integrating $f(x)\approx \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n}\cos nx+b_{n}\sin nx$ over the range $(-\pi,\pi)$, we get:
$$
\eqalign{
\int _{-\pi}^{\pi}f(x) \, dx &= \int _{-\pi}^{\pi}\left( \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n}\cos nx+b_{n}\sin nx \right) \, dx \\
&= \frac{a_{0}}{2}\int _{-\pi}^{\pi}1 \, dx +\sum_{n=1}^{\infty}a_{n}\int _{-\pi}^{\pi}\cos nx \, dx +\sum_{n=1}^{\infty} b_{n}\int _{-\pi}^{\pi}\sin nx \, dx \\ &= \pi a_{0} 
}
$$
Suppose still that the series exists. Multiplying by $\cos mx,m>0$ and integrating again, we get:
$$
\small
\eqalign{
\int _{-\pi}^{\pi}f(x)\cos mx \, dx &= \int _{-\pi}^{\pi}\left( \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n}\cos nx +b_{n}\sin nx \right)\cos mx \, dx \\
&= \frac{a_{0}}{2}\int _{-\pi}^{\pi}\cos mx \, dx +\sum_{n=1}^{\infty} a_{n}\int _{-\pi}^{\pi}\cos nx\cos mx \, dx +\sum_{n=1}^{\infty} b_{n}\int _{-\pi }^{\pi}\sin nx\cos mx \, dx \\
&=\pi a_{m}
}
$$
Again, assuming the series exists, multiplying by $\sin mx$ and integrating again:
$$
\small
\eqalign{
\int _{-\pi}^{\pi}f(x)\sin mx \, dx &= \int _{-\pi}^{\pi}\left( \frac{a_{0}}{2}+\sum_{n=1}^{\infty}a_{n}\cos nx +b_{n}\sin nx \right)\sin mx \, dx \\
&= \frac{a_{0}}{2}\int _{-\pi}^{\pi}\sin mx \, dx +\sum_{n=1}^{\infty} a_{n}\int _{-\pi}^{\pi}\cos nx\sin mx \, dx +\sum_{n=1}^{\infty} b_{n}\int _{-\pi}^{\pi}\sin nx\sin mx \, dx \\
&=\pi b_{m}
}
$$


---
