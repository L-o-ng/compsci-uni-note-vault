#notes 
## Hardware Steps
<img src="Hardware Render Pipeline.png" style="float: right; margin-left: 16px; width: 300px;" />

1. *Object Transformation*: Local space to World space;
2. *Perspective Projection*: 3D world space to screen;
3. *Clipping*: Discard geometry not in view;
4. *Backface Culling*: Discard rear-facing surfaces;
5. *Rasterisation*: Turn geometry to fragments - **potential** pixels;
6. *Hidden Surface Removal and Shading*: Depth testing and colour calculation.

### Stage 1 - Object Transformation
![[Object Transformation.png]]
1. **Local Space**:
	1. Vertices are relative to the **object** centre;
	2. This allows shapes to be *defined* **once** and reused.
2. **World Space**:
	1. Vertices are relative to the **world** *origin*;
	2. $P_{\text{local}}=\text{Matrix}\times P_{\text{local}}$;
	3. Multiple copies of the same shape can be placed in different spots.

Every vertex is calculated **independently**, so can be done in *parallel*.
GPUs use **SIMD** (Single Instruction, Multiple Data) to transform thousands of vertices at once.
### Stage 2 - Perspective Projection
![[Perspective Projection.png]]
This stage makes distant objects appear smaller by transforming 3D coordinates into **clip space**.
>[!important]
> 1. Apply a **projection matrix**;
> 2. Convert the viewing volume (view frustrum) into a unit cube;
> 3. Perform **perspective divide** by dividing coordinates by the homogeneous coordinate $w \equiv\text{depth }z$.

This can result in **z-fighting** if precision is low.
#### Why Do Distant Objects Look Smaller?
![[Perspective Projection Logic.png]]
+ The camera is positioned at the **origin**;
+ We trace a visual **ray** from the 3D object back to the eye.
+ This *ray* intersects the 2D projection plane at distance $d$ - the **focal** length.
+ Since the **object** and **image** triangles share the angle at the origin, they are *similar*.

$$
y'=\frac{dy}{z}
$$
As depth increases, the projected size decreases.
### Stage 3 - Clipping
Geometry outside the camera view must be discarded before rasterisation to save processing power. Hardware checks if primitives lie within the defined viewing volume.
![[Clipping.png]]
If a triangle is half-in, we cannot discard it **or** draw it all out.
Algorithms like **Sutherland-Hodgeman** *cut* the triangle at the edge.

We perform this *after* the projection matrix because:
1. The transformation distorts space, turning the pyramidal frustrum into a unit cube;
2. Checking if a point is inside a pyramid is complex; checking for a cube is trivial.
### Stage 4 - Backface Culling
Most 3D objects are closed volumes. Drawing the back faces of these is a waste.
![[Backface Culling.png]]
$$
\vec{V}\cdot \vec{N}>0 \implies\text{discard}
$$
The hardware checks the **winding** order of vertices (counter/clockwise) in screen space.

This operation typically **halves** the rendering load.
#### Robustness
In **view space**, rays diverge. Checking visibility requires calculating angles relative to the specific eye position for every face.
In **clip space**, the projection matrix *squeezes* the far end of the frustrum into a cube.

This shrinks distant faces, causing view rays to become **parallel**. This is why a 2D winding check works.
### Stage 5 - Rasterisation
This stage converts continuous shapes into discrete pixels.
#### Scanline Algorithm
1. **Setup**: Sort vertices by $Y$-coordinate to find the top, middle, and bottom;
2. **Walk Edges**: Calculate the equation for the left and right edges;
3. **Scan**: For every $Y$:
	1. Calculate $x_{\text{start}}$;
	2. Calculate $x_{end}$;
	3. Emit *fragments* for all pixel centres inside this span.

A pixel is thus coloured only if its mathematically defined centre lies inside the triangle edges.
![[Rasterisation Grid.png]]
### Stage 6 - HSR and Shading
This stage concerns calculating colour and visibility.
We calculate lighting based on normals, textures, and lights with the *fragment* shader.
#### Problem
Historically, the polygons were sorted back-to-front and painted in that order: the **painter's algorithm**. This is slow for large scenes and cyclic overlaps break the algorithm.

Thus, the hardware now maintains a *depth buffer*, storing the depth of the closest object per pixel. If $Z_{\text{new}}<Z_{\text{buffer}}$ we update.
#### Depth Buffer
1. The GPU allocates a 2D array of floats matching the screen resolution;
2. For each generated fragment:
	1. Check the stored depth $Z_{\text{stored}}$ at that pixel $(x,y)$;
	2. If $Z_{\text{new}}<Z_{\text{stored}}$, then we update the buffer with $Z_{\text{new}}$ and write the pixel colour;
	3. Otherwise, the fragment is occluded.
#### Double Buffering
Double Buffering allows us to reduce screen tearing. We separate writing from reading: the GPU draws to the back of the buffer, and the monitor reads the front. The back and front are swapped on VSync.
## Calculating VRAM
To store a frame, we need memory for colours and depth:
$$
\text{VRAM}=\text{pixels} \times [(\underbrace{4B}_{RGBA}\times \underbrace{2}_{\text{Double Buf.}})+\underbrace{4B}_{\text{Depth}}]
$$
For 1080p, we have approximately 2 million pixels, so:
$$
2 000 000 \times 12B=24MB
$$
This is the minimum for just display. It *excludes* textures.

