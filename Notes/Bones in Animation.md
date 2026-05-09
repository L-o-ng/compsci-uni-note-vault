#notes 

We can use **skinned** animation for deforming character meshes smoothly.
A hierarchy of *bones* is built inside the mesh.
Each vertex is assigned **weights** describing how *much* it follows each bone.
The final position is a weighted average of where each bone wants the vertex to be:
$$
P_{\text{final}}=\sum_{i=1}^{n}(P\cdot M_{\text{bone},i}\cdot w_{i})
$$
