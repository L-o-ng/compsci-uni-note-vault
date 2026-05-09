#notes 

**Bump Mapping** is a technique that allows us to add detail like bricks, indents, or wrinkles without adding polygons.

We use a grayscale **height map**, where bright is high and vice versa. The shader calculates the gradient to tilt the surface normal.
![[Bump Map.png]]
