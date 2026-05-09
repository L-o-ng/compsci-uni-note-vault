#notes 

**Normal Mapping** is a technique to simulate high-resolution details like bumps or dents on a flat, low-poly surface *without* adding triangles.

We encode 3D surface angles into a 2D colour texture:
1. The fragment shader looks up colour values to bend the normal vector per-pixel;
2. We have an RGB $[0,1]$ mapped to XYZ $[-1,1]$, such that a flat surface is solid blue.

![[Normal Mapping.png]]
## Mapping
### Gradient Approximation
We find the surface tilt by sampling a $3\times{3}$ neighbourhood around each pixel $(x,y)$ to compute $(dx,dy)$.
![[Gradient Approx.png]]
$$
\begin{align}
dx &= (tr+2r+br)-(tl+2l+bl) \\
dy &= (bl+2b+br)-(tl+2t+tr) \\
dz &= 1.0 \div \text{strength}
\end{align}
$$
### Normalisation and Mapping
The raw gradient $(dx,dy,dz)$ is turned into a unit vector. can now remap the data to $(R,G,B)$.
A lower strength value increases $dz$, and so blue increases.
