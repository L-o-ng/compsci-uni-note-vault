#notes 

A **billboard** is a 2D quad that automatically rotates to face the camera.
We can use this for *particles*, detailed *foliage*, or UI labels.

We calculate the look vector $\vec{D}$:
$$
\vec{D}=\operatorname{normalise}(P_{\text{cam}}-P_{\text{obj}})
$$
We then construct a model matrix that rotates the object's normal $\vec{N}$ to align with $\vec{D}$.
