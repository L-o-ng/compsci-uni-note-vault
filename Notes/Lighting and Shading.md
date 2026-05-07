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
todo!