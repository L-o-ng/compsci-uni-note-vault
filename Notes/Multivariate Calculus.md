#notes 

Calculus is *mostly* the same for functions of many variables. For example: 
$$
\begin{matrix}
\begin{align}
&\text{Let }\mathbf{e}_{i}\text{ denote the unit vector which is }1\text{ in position }i\text{ and }0\text{ elsewhere.} \\
&\text{Then }f(x_{1},x_{2},\dots,x_{n}):\mathbb{R}^n \to \mathbb{R} \\
\end{align} \\
\begin{matrix}
\frac{\partial f}{\partial x_{i}}(\mathbf{x})=\lim_{ h \to 0 }\frac{f(\mathbf{x}+h\mathbf{e}_{i})-f(\mathbf{x})}{h} \\
\nabla f=(\frac{\partial f}{\partial x_{1}},\frac{\partial f}{\partial x_{2}},\dots,\frac{\partial f}{\partial x_{n}})^T=\begin{pmatrix}f_{x_{1}}\\ \vdots \\ f_{x_{n}}\end{pmatrix}
\end{matrix}
\end{matrix}
$$
$f$ is differentiable at $\mathbf{x}_{0}$ if for all unit vectors $\mathbf{v}$ we have: $$\nabla_{v}f(\mathbf{x}_{0})=\mathbf{v}\cdot \nabla f$$
## Chain Rule
$f \circ g(x)$, or the chain rule, can be written $\frac{df}{dx}=\frac{df}{dg}\cdot \frac{dg}{dx}$

This raises some questions:
+ So, if $g$ changes slightly by a small amount $\epsilon$, how much does $f$ vary?
+ Or, if $x$ changes slightly, how much does $f$ vary?
+ If $f(x,y):\mathbb{R}^2 \to \mathbb{R}$ where $x,y$ are functions of $s,t$, what is $\frac{\partial f}{\partial t}$?

We can consider that: $$\frac{\partial f}{\partial t}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial t}$$
So, changing $t$ causes $x$ to vary by $\frac{\partial x}{\partial t}$ and $y$ to vary by $\frac{\partial y}{\partial t}$, and varying $x$ and $y$ by these amounts causes $f$ to vary by $\frac{\partial f}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial t}$, because the directional derivative in direction $\mathbf{v}=\left( \frac{\partial x}{\partial t},\frac{\partial y}{\partial t} \right)^T$ is $$\nabla_{v}f(\mathbf{x}_{0})=\mathbf{v}\cdot \nabla f$$
