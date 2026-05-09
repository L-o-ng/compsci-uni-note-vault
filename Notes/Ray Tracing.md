#notes 

In **Ray Tracing**, we loop through pixels instead of fragments and cast rays from the camera into the scene.
![[Ray Tracing.png]]
We trace light paths in **reverse**. This ensures we only calculate lighting for surfaces that are actually visible.
We have two recursive *secondary* rays:
+ **Shadow** ray: Check if the path to the light is blocked;
+ **Reflection** ray: Bounces off surfaces to find other objects.
## Rays
A ray is a **half-line** defined by its starting point and heading. We can describe any point in space along the ray's path with a single variable:
$$
P(t)=O+t\vec{D}
$$
+ $P(t)$ is the 3D position;
+ $O$ is the origin vector, or the *starting* point;
+ $\vec{D}$ is the normalised direction vector;
+ $t$ is a positive scalar distance.
### Hits
To find if a ray hits a sphere, we look for a point $P$ that satisfies both the ray and sphere equations ($||P-C||^{2}=r^{2}$) simultaneously:
$$
||(O+t\vec{D})-C||^{2}=r^{2}
$$
We let $\vec{V}=(O-C)$ to simplify. This gives a quadratic result in $t$:
$$
\begin{align}
&at^{2}+bt+c=0 \\
a&=\vec{D}\cdot \vec{D}=1.0 \\
b&=2(\vec{D}\cdot \vec{V}) \\
c&=(\vec{V}\cdot \vec{V})-r^{2}
\end{align}
$$
The discriminant gives us the solution, providing 0, 1, or 2 points where the ray hits the sphere.
### Refraction
When a ray passes through a transparent surface, we change direction based on the **index of refraction** of the materials.
#### Snell's Law
$$
\eta_{1}\sin \theta_{1}=\eta_{2}\sin \theta_{2}
$$
Here, $\eta$ represents the IOR. If the angle is too shallow when exiting a dense medium, the ray reflects instead of refracting.
![[Snell's Law.png]]
#### Implementation
To prevent the ray from hitting the same surface again, we offset the new ray origin slightly inside the object:
$$
P_{\text{new}}=P-N\times\varepsilon
$$
We also implement Beer's law: as light travels through the medium, its colour is attenuated based on distance:
$$
t: \text{attenuation}=e^{ -\text{colour}\times t }
$$
### Sum of Parts
![[Ray Tracing Sum.png]]
At every intersection point, the ray-tracer determines the final colour by summing light contributions. This tends to be a combination of:
1. Local illumination: direct light from sources, modulated by shadow rays;
2. Reflected illumination: light arriving from elsewhere in the scene, gathered by the reflection ray.
### Colour
We calculate the colour based on the [[Blinn-Phong Lighting Model]].
![[Ray Tracing and Blinn Phong.png]]
### Pipeline

| Component             | Analytical Intersection                                                     | Signed Distance Functions                                                            |
| --------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **View Ray Emission** | Ray: $P(t)=O+t\vec{D}$                                                      | Same.                                                                                |
| **Distance Check**    | Quadratic formula                                                           | *Ray Marching*: Step along the ray by distance to nearest surface                    |
| **Math**              | Discriminant $\Delta=b^{2}-4ac$. Smallest $t>0$ is the hit                  | $t=t+\operatorname{dist}(p)$. Stop when $\text{dist}<\text{threshold}$               |
| **Organisation**      | *Hierarchical clustering*: Test ray against bounding boxes first            | *CSG Operations*: Combine shapes using min/max                                       |
| **Pros/Cons**         | *Exact*, and fast for simple shapes. Complex for fractals and organic noise | *Flexible* for complex blending, but requires many steps and so is performance heavy |
We can use [[Anti-Aliasing]] by shooting many jittered rays per pixel and averaging the result.
### Recursive Shading
Once a hit is found, the final colour is an accumulation of direct light and secondary rays:
+ Shadow rays: Cast ray from hit $P$ to light $L$. If blocked, $\text{shadow}=0$;
+ Reflection: $R=\operatorname{Reflect}(D,N)$. Recursive call to `trace` with a depth limit;
+ Refraction: See [[#Snell's Law]];
+ Accumulation: $C_{\text{final}}=C_{\text{local}}+(\text{Reflectivity}\times C_{\text{refl}})$.
![[Ray Tracing Shading.png]]

