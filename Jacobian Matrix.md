#definition 

Consider the function: $$\mathbf{f}:\Bbb{R}^n \to \Bbb{R}^m\text{ where }\mathbf{f}=(f_{1}(\mathbf{x}),f_{2}(\mathbf{x}),\dots,f_{m}(\mathbf{x}))$$
And the set: $$\mathbf{J}_{ij}= \frac{\partial f_{i}}{\partial x_{j}}$$The resulting **matrix of partial derivatives** is called the **Jacobian Matrix**: 
$$\mathbf{J}=\begin{pmatrix}
\frac{\partial f_{1}}{\partial x_{1}} & \dots & \frac{\partial f_{1}}{\partial x_{n}} \\
\vdots & \ddots & \vdots  \\
\frac{\partial f_{m}}{\partial x_{1}} & \dots & \frac{\partial f_{m}}{\partial x_{n}}
\end{pmatrix}$$So the $i^\text{th}$ row of the Jacobian matrix of $\mathbf{f}$ is the gradient $\nabla f_{i}$ (transposed).
And the $j^\text{th}$ column is the derivative of $f$ with respect to $x_{j}:\frac{\partial \mathbf{f}}{\partial x_{j}}$.

