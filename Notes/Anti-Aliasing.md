#notes 

In *rasterisation*, we are trying to represent **continuous** geometry with a **discrete** grid of pixels. The *centre* of a pixel is either *inside* or *outside* of a triangle; this **discrete** decision creates *hard, jagged transitions*. High-frequency details are *lost* when screen resolution is low.
![[Anti-Aliasing 1.png]]
## Supersampling (SSAA)
We render the screen at 4x resolution, and downscale it to the screen size. This gives us the highest quality, but quadruples the fragment shader cost.
## Multisample AA (MSAA)
We only supersample the depth/stencil buffers at edges. The fragment shader is run once per pixel, but the colour is stored in multiple sub-samples if edges cover the pixel.
![[MSAA.png]]
## Fast Approximate AA (FXAA)
We blur jagged edges *after* the frame is rendered. This is fast but blurry.