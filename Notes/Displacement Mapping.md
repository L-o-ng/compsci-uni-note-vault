#notes 

Unlike [[Normal Mapping]], **displacement mapping** moves vertices to change the silhouette of the object.

We read a texture in the vertex shader:
+ Black pixels have the vertex stay;
+ White pixels have the vertex pushed out along the normal.

This requires a high-density mesh.
