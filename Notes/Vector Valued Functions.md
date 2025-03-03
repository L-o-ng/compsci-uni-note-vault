#notes 

So far, we have considered a vector input and a real-valued output.

Say we have a camera sensor, and we wanted to adjust the brightness. We could map each pixel $i$ with a function. 
Rather than writing out separate functions for each pixel, we can think of the output as a vector: $$(f_{1}(\mathbf{x}),f_{2}(\mathbf{x}),\dots,f_{n}(\mathbf{x}))$$Now we have a **vector valued** function $\mathbf{f}:\Bbb{R}^n \to \Bbb{R}^n$.
The derivative of the $i^\text{th}$ component of the output with respect to the $j^\text{th}$ input is $$\frac{\partial f_{i}}{\partial x_{j}}$$Now see [[Jacobian Matrix|Jacobian Matrices]].
## Notation
For a function $\mathbf{f}: \Bbb{R}^n \to \Bbb{R}^m$, the matrix of derivatives can be denoted any of the following ways: $$\LARGE\array{\mathbf{J}&\mathbf{J_{f}}&D\mathbf{f}&\mathbf{\nabla f}&\frac{\partial(f_{1},f_{2},\dots,f_{m})}{\partial(x_{1},x_{2},\dots,x_{n})}}$$Occasionally, the Jacobian is defined as the transpose of this matrix.
## Example
$$\array{
\eqalign{\mathbf{f}:\Bbb{R}^3 \to \Bbb{R}^2&=(2x_{1}+x_{2}-x_{3},x_{1}+3x_{2}-4x_{3})& \\
\mathbf{g}:\Bbb{R}^2 \to \Bbb{R}^2&=(\sin(x_{1}+x_{2}),\cos(x_{1}-x_{2}))& \\
} \\
\mathbf{J_{f}}=\begin{pmatrix}
2 & 1 & -1 \\
1 & 3 & -4
\end{pmatrix}\quad \quad \mathbf{J_{g}}=\begin{pmatrix}
\cos(x_{1}+x_{2}) & \cos(x_{1}+x_{2}) \\
-\sin(x_{1}-x_{2})&\sin(x_{1}-x_{2})
\end{pmatrix} \\
\mathbf{J_{g}}=\begin{pmatrix}
\frac{3\pi}{4}, \frac{\pi}{4}
\end{pmatrix}=\begin{pmatrix}
\cos \pi & \cos \pi \\
-\sin \frac{\pi}{2} & \sin \frac{\pi}{2}
\end{pmatrix}=\begin{pmatrix}
-1 & -1 \\
-1 & 1
\end{pmatrix}\\ \\
\text{What about }\mathbf{g}\circ \mathbf{f}:\Bbb{R}^3 \to \Bbb{R}^2\text{?}& \\
\mathbf{g} \circ \mathbf{f} =  (\sin(3x_{1}+4x_{2}-5x_{3}),\cos(x_{1}-2x_{2}+3x_{3})) \\ \\
\text{What about }\mathbf{g} \circ \mathbf{f} : \Bbb{R}^3 \to \Bbb{R}
^2\text{?} \\
\mathbf{g} \circ \mathbf{f}=(\sin(3x_{1}+4x_{2}-5x_{3}),\cos(x_{1}-2x_{2}-3x_{3})) \\
\mathbf{J_{g \circ f}}=\begin{pmatrix}
3\cos(3x_{1}+4x_{2}-5x_{3}) & 4\cos(3x_{1}+4x_{2}-5x_{3}) & -5\cos(3x_{1}+4x_{2}-5x_{3}) \\
-\sin(x_{1}-2x_{2}+3x_{3}) & 2\sin(x_{1}-2x_{2}+3x_{3}) & -3\sin(x_{1}-2x_{2}+3x_{3})
\end{pmatrix} \\
\mathbf{J_{g \circ f}}\left(\array{ \frac{8\pi}{20},-\frac{\pi}{20},0 }\right)=\begin{pmatrix}
3\cos \pi & 4\cos \pi & -5\cos \pi \\
-\sin\left( \frac{\pi}{2} \right) & 2\sin\left( \frac{\pi}{2} \right) & -3\sin\left( \frac{\pi}{2} \right)
\end{pmatrix} = \begin{pmatrix}
-3 & -4 & 5 \\
-1 & 2 & -3
\end{pmatrix} \\ \\
\text{But notice: }\begin{pmatrix}
-1 & -1 \\
-1 & 1
\end{pmatrix}\cdot \begin{pmatrix}
2 & 1 & -1 \\
1 & 3 & -4
\end{pmatrix}= \begin{pmatrix}
-3 & -4 & 5 \\
-1 & 2 & -3
\end{pmatrix} \\ \\
\text{This is the chain rule!}\\
\frac{\partial g \cdot f_{i}}{\partial x_{j}}=\frac{\partial g_{i}}{\partial f_{1}}\frac{\partial f_{1}}{\partial x_{j}}+\frac{\partial g_{i}}{\partial f_{2}}\frac{\partial f_{2}}{\partial x_{j}}=\mathbf{\nabla_{g_{i}}}\frac{\partial \mathbf{f}}{\partial x_{j}} \\
\text{So } \mathbf{J_{g \circ f}=\mathbf{J_{g}J_{f}}}
}$$

## Linear Approximations
For a **univariate function**, the derivative gives details of the tangent line: $$f^\prime(x)=\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$$So $$f(x+h)\approx f(x)+hf^\prime(x)$$
For a **surface** we have seen that $\mathbf{v}\cdot \nabla f(\mathbf{x}_{0})$ is the slope in the direction $\mathbf{v}$. $$f(\mathbf{x}_{0}+h\cdot \mathbf{v})\approx f(\mathbf{x}_{0})+h\mathbf{v}\cdot \nabla f(\mathbf{x}_{0})$$Which is $$f(x_{0}+h\cdot v_{x},y_{0}+h\cdot v_{y})\approx f(x_{0},y_{0})+h\cdot v_{x}\frac{\partial f}{\partial x}+h\cdot v_{y}\frac{\partial f}{\partial y}$$
For a **multivariate function** $:\Bbb{R}^n \to \Bbb{R}^m$, the Jacobian matrix gives the best linear approximation to $\mathbf{f}$ at $\mathbf{x}$: $$\mathbf{f}(\mathbf{x}+h\mathbf{v})\approx \mathbf{f}(\mathbf{x})+\mathbf{J_{f}}(\mathbf{x})(h\mathbf{v})$$
Note: $\mathbf{x}, \mathbf{v}, h\mathbf{v}$ are $n$-dimensional vectors: 
+ $\mathbf{J_{f}}(x)$ is an $m$ by $n$ matrix,
+ $\mathbf{f}(\mathbf{x}),\mathbf{J_{f}}(\mathbf{x})(h\mathbf{v})$ are $m$-dimensional vectors.
### Example
$$\array{
\mathbf{g}:\Bbb{R}^2 \to \Bbb{R}^2 = (\sin(x_{1}+x_{2}),\cos(x_{1}-x_{2})) \\
\mathbf{J_{g}}=\begin{pmatrix}
\cos(x_{1}+x_{2}) & \cos(x_{1}+x_{2}) \\
-\sin(x_{1}-x_{2}) & \sin(x_{1}-x_{2})
\end{pmatrix} \\
\mathbf{J_{g}}\left(\array{\frac{3\pi}{4}, \frac{\pi}{4}}\right)=\begin{pmatrix}
\frac{\partial g_{1}}{\partial x_{1}} & \frac{\partial g_{1}}{\partial x_{2}} \\
\frac{\partial g_{2}}{\partial x_{1}} & \frac{\partial g_{2}}{\partial x_{2}}
\end{pmatrix}=\begin{pmatrix}
\cos \pi & \cos \pi \\
-\sin\left( \frac{\pi}{2} \right) & \sin\left( \frac{\pi}{2} \right)
\end{pmatrix}=\begin{pmatrix}
-1 & -1 \\
-1 & 1
\end{pmatrix} \\ \\
\text{So near}\left(\array{\frac{3\pi}{4}, \frac{\pi}{4}}\right)\text{ we can approximate }\mathbf{g}\text{ by:} \\
\mathbf{g}\left(\array{\frac{3\pi}{4}+\partial_{x}, \frac{\pi}{4}+\partial_{y}}\right)=\mathbf{g}\left(\array{\frac{3\pi}{4}, \frac{\pi}{4}}\right)+\begin{pmatrix}
-1 & -1 \\
-1 & 1
\end{pmatrix}\begin{pmatrix}
\partial_{x} \\
\partial_{y}
\end{pmatrix} = \begin{pmatrix}
0 \\
0
\end{pmatrix}+\begin{pmatrix}
-\partial_{x} & -\partial_{y} \\
-\partial_{x} & +\partial_{y}
\end{pmatrix}=\begin{pmatrix}
-\partial_{x} & -\partial_{y} \\
-\partial_{x} & +\partial_{y}
\end{pmatrix}
}$$
See also: [[Hessian Matrices]]
