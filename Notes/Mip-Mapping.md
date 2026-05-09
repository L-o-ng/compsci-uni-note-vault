#notes 

When an object is far away, one screen pixel can cover hundreds of texels. Sampling just one can cause visual noise, or **aliasing**.
We can calculate a chain of lower-resolution textures, and select the best fit based on distance. This is called **Mip-Mapping**.
![[Mip-Mapping.png]]
## Memory Cost
Each level is $\frac{1}{4}$ the area of the original:
$$
\text{Total}=1+ \frac{1}{4}+ \frac{1}{16} + \dots \approx 1.33
$$
So we have only 33% extra VRAM usage!