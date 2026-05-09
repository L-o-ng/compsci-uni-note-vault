#notes 

>[!abstract]
>Texture mapping is a function $\phi$ that maps a point from a 2D texture space $(u,v)$ to a 3D object space $(x,y,z)$: $$(u,v)\overbrace{ \to }^{ \phi }(x,y,z)\overbrace{ \to }^{ \text{Shader} }\text{Colour}$$
## Mapping
### Directions
**Forward mapping** iterates over the texture image. It projects each *texel* onto the screen. However, if the texture is enlarged, holes may appear.
**Backward mapping** iterates over screen pixels, and finds which *texel* covers the pixel centre. This guarantees coverage.
Modern GPUs use backwards mapping during the rasterisation stage.
### $u,v$ Coordinates
Since $(x,y,z)$ are used for 3D space, we use $(u,v),0<u,v<1$ to describe the 2D axes of a texture.
+ Every *vertex* stores a $(u,v)$ pair as an *attribute*;
+ The rasteriser interpolates these values across the triangle face;
+ The fragment shader samples the texture using the result.

A single texture can contain many different materials. This is known as a **texture atlas**.
## Modulation
A texture on its own is a flat image. We must make it react to light.
We treat the texture as the object's **albedo**, and then modulate this colour by the light intensity calculated with one of the [[Shading Models]].
$$
C_{\text{final}}=C_{\text{texture}}\times(I_{a}+I_{d}+I_{s})
$$
