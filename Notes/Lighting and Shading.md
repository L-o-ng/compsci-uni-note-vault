#notes 

>[!abstract]
>A 3D model's visual identity is determined by its **material**, a high-level abstraction that acts as a container for the physical and mathematical rules governing how a surface interacts with light.
>Within this material, the **albedo** represents the inherent *colour* or *diffuse reflectivity* which serves as the base spectral data for every lighting calculation performed by the shader.

Lighting is the simulation of how light interacts with object surfaces. We use algorithms to calculate the colour and brightness of pixels based on virtual light sources.
It:
+ **Reveals Form**: Without lighting, a 3D sphere is indistinguishable from a flat 2D circle;
+ **Conveys Material**: By showing specular highlights and diffuse scattering, we can ascertain the material;
+ **Creates Depth**: Shadows and gradients provide the crucial depth cues needed for the illusion of three dimensions.
## Global and Local Illumination
+ **Global Illumination**: We simulate light bouncing infinitely between surfaces. This is physically accurate, but extremely computationally expensive;
+ **Local Illumination**: Calculates light for an object considering **only** the direct rays from a light source. It ignores how objects reflect light onto one another.

Rasterisation relies on *local* illumination. Because it processes scenes per-object, it cannot track scene-wide bounces. We use hacks like ambient lighting to fake global bounces.
## Lighting Model
This is an approximation of photon interaction at a single point. We are concerned with the light transport physics, in order to determine the colour of the pixel.
### Normal Vectors
We can shade *flat*, or *smooth*:
+ Flat, or *per-face* is where a single normal represents the entire polygon. It is calculated with the cross-product of two edges: $$\vec{N}= \frac{(V_{1}-V_{0})\times(V_{2}-V_{0})}{||(V_{1}-V_{0})\times(V_{2}-V_{0})||}$$
+ Smooth, or *per-vertex* is where each vertex has a unique normal. It is calculated by **averaging** the normals of all faces sharing that vertex: $$\vec{N}_{v}= \frac{\sum \vec{n}_{\text{face}}}{||\sum \vec{n}_{\text{face}}||}$$
## Shading Model
This is the algorithm used to distribute the [[#Lighting Model]] formula across a 3D surface. We want to find a balance between performance and quality.
### Normal Vectors
Normal vectors play **two** key roles in *shading*:
1. **Diffuse**: brightness is a result of the [[Dot Product]] between the normal $\vec{N}$ and light $\vec{L}$;
2. **Specular**: The highlight reaches maximum intensity when the normal $\vec{N}$ aligns with the *halfway vector* $\vec{H}$;

Normals thus allow low-poly meshes to simulate smooth, curved surfaces.

---

See now [[Blinn-Phong Lighting Model]]