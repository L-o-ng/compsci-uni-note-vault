#notes 

We can use **Environment Mapping** to simulate mirror-like reflections of the surrounding world without ray-tracing.

We use a **cube map**: 6 textures forming a box around the scene.
We:
1. Calculate the reflection vector $R$ based on the camera view;
2. Use $R$ as a 3D coordinate to hit a pixel on the enclosing cube;
3. Paint that pixel's colour on the object.

![[Env Mapping.png]]
