#notes 

>[!abstract]
>Before we can render a scene, we must define the shape of the objects.
>Every complex model is constructed from a collection of simple geometric shapes called **primitives**.
>The most fundamental *primitive* is the **triangle**:
> + They are simple, with just three vertices;
> + The vertices are guaranteed to lie on the same plane, which simplifies rendering calculations;
> + Any complex polygon can be decomposed into triangles.

A **mesh** is a collection of *vertices*, *edges*, and *faces* that define a polyhedral object.
## Vertices
A vertex contains more information than just its 3D position. It also contains some **attributes** that describe the surface at that point:
+ **Normal Vector**: A vector pointing perpendicularly outwards;
+ **Texture Coordinates** (*UV*s): A 2D coordinate that maps the vertex to a point on a 2D image texture;
+ **Colour**: A per-vertex colour;
+ etc...

This data is organised and sent to the GPU, where it is stored in a **Vertex Buffer Object**, or *VBO*.
### Index List
The **index list**, *IBO*, or *Element Array Buffer* is a list of integers pointing to specific positions in the vertex list. The GPU fetches these in triplets to define each face. This is also stored on the GPU.
![[Index List.png]]
Without an IBO, each triangle requires 3 unique vertices, which introduces redundancy. We can reduce VBO size by 60-80% by using an IBO.
