#notes 

>[!abstract]
>We have a [[Blinn-Phong Lighting Model|Lighting]] [[Simulating Lights|Model]]. Now we need a **shading model** to apply it to our geometry.
>We must decide how *often* to sample the lighting equation across a surface. Once per face is fast, where once per pixel is slower and better-looking.
## Flat Shading
![[Flat Shading.png]]
+ The lighting calculation is performed once per triangle;
+ Every pixel in the triangle is thus assigned the same colour;
+ This produces a low-poly look. 
## Gouraud Shading
![[Gouraud Shading.png]]
+ We perform the full [[Blinn-Phong Lighting Model]] calculation at each **vertex** of a triangle:
	+ A colour is computed per vertex;
	+ The colours are smoothly interpolated across the face of the triangle by the rasteriser.
+ This produces smooth surfaces.
>[!important]
>Specular highlights can be missed if one appears in the centre of a large triangle but not near a vertex.
## Phong Shading
![[Phong Shading.png]]
+ The lighting calculation is performed for all fragments:
	+ The vertex shader passes the vertex normals to the rasteriser;
	+ The normals are smoothly interpolated across the face of the triangle;
	+ The fragment shader receives a high-precision, interpolated normal per pixel.
+ This is the modern standard.

