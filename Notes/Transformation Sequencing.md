#notes 

Matrices can be combined.
A sequence of transformations (see [[2D Transformations in Graphics|2D]], [[3D Transformations in Graphics|3D]]) can be pre-multiplied into a single matrix:
$$
M_{\text{combined}}=M_{\text{translate}}\cdot M_{\text{rotate}}\cdot M_{\text{scale}}
$$
This is done once on the CPU and so the GPU only performs one matrix-vector multiplication per vertex.

The order transformations are applied has a huge impact. 
==The standard convention is Scale -> Rotate -> Translate==, or **TRS**.
