#notes 

Consider $I_{n,m}=\int \cos^nx\sin^mxdx$:
+ If $n$ is odd: 
	+ Use $u=\sin x, du=\cos xdx$
	+ So $\cos^2x=1-\sin^2x=1-u^2$
	+ Gives $\int (1-u^2)^{(n-1)/2}u^mdu$, the integral of a **polynomial**.
+ If $m$ is odd, use $u=\cos x$.
## Otherwise
+ If $n,m$ are both even, or for most other trig functions, use complex exponentials to reduce to single trig functions - no powers or products!
### Example
$$
\array{
\text{Q: }&I=\int \cos^4xdx \\
\text{A: }&\eqalign{
\cos^4x&=\left( \frac{e^{ix}+e^{-ix}}{2} \right)^4 \\
&= \frac{1}{16}(e^{4ix}+4e^{2ix}+6+4e^{-2ix}+e^{-4ix}) \\
&= \frac{1}{16} (2\cos 4x+8\cos 2x + 6) \\
\text{So }\quad I&=\int \left( \frac{1}{8}\cos 4x + \frac{1}{2}\cos 2x + \frac{3}{8} \right)dx \\
&=\frac{1}{32}\sin 4x + \frac{1}{4}\sin 2x +\frac{3}{8}x + c 
}}$$
