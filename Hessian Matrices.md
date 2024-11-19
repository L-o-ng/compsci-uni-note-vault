#notes #homework-needed 

To identify a minimum or a maximum we must also consider the following: $$\frac{\partial^2 f}{\partial x \partial y}=\frac{\partial}{\partial x}\left( \frac{\partial f}{\partial y} \right)=(f_{y})_{x}=f_{yx}\text{ and }\frac{\partial^2f}{\partial y \partial x}=\frac{\partial}{\partial y}\left( \frac{\partial f}{\partial x} \right)=f_{xy}$$
For most $C^2$ functions these are equal, but **not** in general.
We can gather all the $2^\text{nd}$ order partial derivatives into a matrix called the **Hessian Matrix**: 
$$\mathbf{H}_{f}=\Large\begin{bmatrix}
\frac{\partial^2f}{\partial x^2} & \frac{\partial^2f}{\partial x \partial y} \\
\frac{\partial^2f}{\partial y \partial x} & \frac{\partial^2f}{\partial y^2}
\end{bmatrix}=\Large \begin{bmatrix}
f_{xx} & f_{yx} \\
f_{xy} & f_{yy}
\end{bmatrix}$$
This contains information about curvature in all directions.
Also, $\mathbf{H}_{f}$ is the [[Jacobian]] of $\nabla f$.

todo! second derivative test for extrema.