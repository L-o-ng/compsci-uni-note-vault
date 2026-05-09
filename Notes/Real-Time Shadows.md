#notes 

[[Ray Tracing]] produces perfect shadows, but is expensive. We can use **Shadow-mapping** to make *real time* shadows with rasterisation.
We render the scene from the light's perspective, and if a surface cannot be seen, then it is in shadow.
This is a multi-pass technique that uses an [[Post-Processing|FBO]].
## Passes
Once we have the shadow map from pass one, we use it in the fragment shader in pass 2.
For each fragment on-screen:
1. Calculate the position from the light's point of view;
2. Look up the depth value on the shadow map;
3. If the current depth is greater than the stored depth, then the fragment is behind something, and thus in shadow.
