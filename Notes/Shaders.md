#notes 
![[Shader Pipeline.png]]
**Shaders** are GPU code that give us control over parts of the [[Hardware Stages]].
## Vertex Shaders
The GPU runs a vertex shader once for each pixel.
+ Its most critical job is to transform the 3D position of a vertex into the final screen position in clip space;
+ It can also process and pass along other per-vertex data, like texture coordinates, to the next stage.
## Rasterisation
This is a **fixed** part of the pipeline
+ We take the transformed vertices and connect them to form **primitives** - usually triangles;
+ We fill in the triangles by generating **fragments** for each pixel covered by the triangle;
+ We smoothly interpolate per-vertex attributes across the surface of the triangle for each fragment.
## Fragment Shaders
The GPU runs a fragment shader program once per fragment.
+ Its sole purpose is to calculate and output the final colour for a fragment.