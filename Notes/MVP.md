#notes 

**MVP** refers to the *Model Render Pipeline*.
1. A 3D model starts in model space, or local space;
2. A **model matrix** places it in world space;
3. A **view matrix** positions the camera, moving to view space;
4. A **projection matrix** flattens the scene into clip space.
## M
The **model matrix** applies the [[3D Transformations in Graphics|Transformations]] that position it in the scene.
We end in world space.

Note that if the matrix contains **only** rotation and translation, we can transform with just $M$. If it contains *scale* or *shear*, we must use $(M^{-1})^{T}$.
## V
Instead of moving the camera, we move the **entire world** to be in front of a fixed camera.
The *view matrix* is the inverse of the camera's world transformation. It positions the world so the camera is at the origin, looking down the $-Z$ axis.
![[View Matrix.png]]
### Computing the View Matrix
To render from the camera's perspective, we move the world in the opposite direction we would move the camera:
+ **Translation**: Shift world by $-C$;
+ **Rotation**: Align world axes with the camera basis $(r,u,f)$.

We construct the camera basis with: the eye $C$; target $T$; and world up $\vec{Up}_{\text{world}}$.
We perform [[The Gram-Schmidt Process]], and obtain the matrix:
$$
M_{\text{view}}=\begin{pmatrix}
r_{x} & r_{y} & r_{z} & -r\cdot C \\
u_{x} & u_{y} & u_{z} & -u\cdot C \\
-f_{x} & -f_{y} & -f_{z} & f\cdot C \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
## P
We want to project the 3D scene onto a 2D plane, simulating perspective.
The **projection matrix** defines a viewing volume (a **frustrum**) and squashes it into a cube called **clip space**, where $X,Y,Z$ coordinates are between $\pm 1$.
### Perspective Projection
The viewing volume is a **frustrum**.
Objects further away appear smaller.
This is used in most 3D games and realistic rendering.
This needs:
+ FOV;
+ Aspect Ratio;
+ Near/Far Planes.
$$
M_{\text{perspective}}=\begin{pmatrix}
\frac{2n}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2n}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & - \frac{f+n}{f-n} & - \frac{2fn}{f-n} \\
0 & 0 & -1 & 0
\end{pmatrix}
$$
The bottom row moves the $z$ coordinate into the $w$ slot. The hardware then performs:
$$
P_{\text{final}}=\left( \frac{x}{w}, \frac{y}{w}, \frac{z}{w} \right)
$$
### Orthographic Projection
The viewing volume is a rectangular box.
There is no perspective, and thus size is constant.
This is used for diagrams and 2D games.
$$
M_{\text{orthographic}}=\begin{pmatrix}
\frac{2}{r-l} & 0 & 0 & - \frac{r+l}{r-l} \\
0 & \frac{2}{t-b} & 0 & - \frac{t+b}{t-b} \\
0 & 0 & - \frac{2}{f-n} & - \frac{f+n}{f-n} \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
### Term Explanation

| Operation   | Orthographic Term                     | Perspective Term                   | Functional Purpose                     |
| ----------- | ------------------------------------- | ---------------------------------- | -------------------------------------- |
| X-Scale     | $\frac{2}{r-l}$                       | $\frac{2n}{r-l}$                   | Resize width to clip space.            |
| Y-Scale     | $\frac{2}{t-b}$                       | $\frac{2n}{t-b}$                   | Resize height to clip space.           |
| Z-Scale     | $-\frac{2}{f-n}$                      | $- \frac{f+n}{f-n}$                | Maps depth to $[-1,1]$ range.          |
| Translation | $- \frac{r+l}{r-l},- \frac{t+b}{t-b}$ | $\frac{r+l}{r-l}, \frac{t+b}{t-b}$ | Centres the volume at the origin.      |
| Projection  | $0$                                   | $-1$                               | Copies $-Z$ to $W$ for depth division. |
## MVP
We can pre-multiply these matrices into a single MVP matrix.
