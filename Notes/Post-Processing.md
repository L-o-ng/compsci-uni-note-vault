#notes 

![[Post-Processing 1.png]]
We can apply effects to an entire rendered image at once by rendering to a texture first, editing that then rendering the texture to the screen.
## Framebuffer Object
A **Framebuffer Object**, or *FBO*, is a mechanism that allows us to redirect the render pipeline to an off-screen destination.
+ It is a container for a collection of attachments;
+ The most important is a **texture**, which will act as our new colour buffer;
+ When we bind a custom FBO, all subsequent drawing commands will write their results to this texture instead of the screen.
## Passes
Our first *pass* is the capture, where we redirect the GPU output to an FBO.
Our second pass draws a 2D, screen-filling *quad*. We project the pass 1 texture onto the quad with an *effect shader*.

