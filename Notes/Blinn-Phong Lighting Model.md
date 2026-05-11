#notes 

>[!abstract]
>The **Blinn-Phong** lighting model is an empirical lighting model.
>It approximates the look of lighting without perfect simulation, and so is a popular, fast algorithm.
>Lighting is broken into three distinct components: **ambient**, **diffuse**, and **specular**.
## Specular Highlights
### Phong vs Blinn-Phong
![[Phong vs Blinn-Phong.png]]
In the **Phong** model, the specular is brightest when the *view* $\vec{V}$ aligns with the *reflection* $\vec{R}$. This is expensive, as we must calculate the reflection per-pixel:
$$
\vec{R}=2(\vec{N}\cdot \vec{L})\vec{N}-\vec{L}
$$
In the **Blinn-Phong** model, we check the *halfway vector* $\vec{H}$ instead of the reflection. This is simple addition:
$$
\vec{H}=\frac{\vec{L}+\vec{V}}{||\vec{L}+\vec{V}||}
$$
### Halfway Vectors
The **halfway vector** $\vec{H}$ is an optimisation over calculating the reflection $\vec{R}$. $\vec{H}$ is a *unit vector* that lies exactly halfway between the light vector $\vec{L}$ and view vector $\vec{V}$:
$$
\vec{H}=\operatorname{normalise}(\vec{L}+\vec{V})
$$
The **specular** is at its maximum when $\vec{H}$ aligns with $\vec{N}$.
We can introduce an exponent to represent surface roughness. We obtain:
$$
\text{Specular}=(\max\{ 0,\vec{N}\cdot \vec{H} \}^{\text{shininess}})\times\text{Strength}
$$
## Ambient Lighting
Calculating global illumination is not feasible as it requires trillions of simulated light bounces. The **ambient** component is a constant, low-intensity light applied equally to every object.
Its value is a multiplication:
$$
\text{Ambient Colour}=\text{Strenth}\times\text{Light Colour}\times\text{Object Colour}
$$
## Diffuse Reflection
**Diffuse Reflection** Occurs when light hits a *matte* surface, scattering in all directions. This is the most **critical** component for revealing a 3D object's shape.
The brightness depends on the angle between the light source and surface normal.
![[Diffuse Reflection.png]]
We measure the [[Dot Product]] of the unit vectors $\vec{N}$ and $\vec{L}$.
### Clamping Rule
If light comes from *behind* the surface, then $\cos \theta$ becomes negative. We clamp negative values to zero, preventing negative colours.
### Dot Product
The dot of two normalised vectors gives the cosine of the angle between them. We therefore have:
$$
\text{Diffuse Colour}=\max\{ 0,\vec{N} \cdot\vec{L} \}\times\text{Light Colour}
$$
## Formula
We sum the three components to obtain the final result:
$$
\small
I_{\text{total}}=\underbrace{ (k_{a}\cdot I_{a}) }_{ \text{ambient} }+\underbrace{ (k_{d}\cdot I_{d}\cdot \max\{ N\cdot L,0 \}) }_{ \text{diffuse} }+\underbrace{ (k_{s}\cdot I_{s}\cdot \max\{ N\cdot H,0 \}^{\alpha}) }_{ \text{specular} }
$$
## Normal Matrix
When calculating light, multiplying the normal by the model matrix is incorrect, especially with **non-uniform scaling**.
![[Non-Uniform Scaling.png]]
Non-uniform scaling *distorts* the object and so the normal is no longer perpendicular to the surface. We must instead multiply the normal vector by the **inverse transpose** of the model matrix:
$$
\vec{N}_{\text{transformed}}=(M^{-1})^{T}\vec{N}_{\text{original}}
$$
