---
~
---
#notes 

>[!abstract]
>In [[Gaussian Filtering]], the influence of one pixel over another is determined by **spatial proximity only**. The nearer they are, the larger the influence.
>In **Bilateral Filtering**, the influence is instead determined by *two* factors:
> 1. Spatial proximity;
> 2. A measure of *similarity* between two pixels.
>
>Thus, this filter is not a strict spatial filter, but it does have a spatial *component*.

Typically, similarity is measured by the **difference** in pixel *intensity*:
$$
(I_{p}-I_{p'})
$$
A large difference implies a small similarity and thus a small influence. We can therefore expect bilateral filtering to preserve the edges better than spatial Gaussian filtering because it is edge aware.
## Formal Definition
Bilateral filtering is described by the equation:
$$
I_{p}^{\text{output}}= \frac{\sum_{p' \in \Omega}g_{1}(|p-p'|)g_{2}(I_{p}-I_{p'})I_{p'}}{\sum_{p' \in \Omega}g_{1}(|p-p'|)g_{2}(I_{p}-I_{p'})}
$$
+ The two Gaussian functions $g_{1},g_{2}$ determine the influence of spatial proximity and similarity on the filtering;
+ The neighbourhood $\Omega$ determines the size of the filter;
+ For any pixel in $\Omega$,the **further** it is from $p$ and the **more different** its intensity from $p$, the **less influence** it has over the new value of $p$.

![[Bilateral Filter.png]]
## Details
A simple Gaussian filter uses a 2D Gaussian kernel as a weighting function $W_{s}$. We introduce $W_{r}$ as a second weighting function for similarity, controlling the influence of pixels in $\Omega$ based on their similarity to the centre pixel.

We define function $W_{r}$ as a 1D **Gaussian** defined over the range of the two pixels:
$$
W_{r}(N,M) = G(||I_{\text{input}}(N,M)-I_{\text{input}}(i,j)||)
$$
![[Bilateral Filtering Details.png]]
We have $\sigma_{1},\sigma_{2}$ as the standard deviations of $g_{1},g_{2}$ respectively as parameters for $W_{s},W_{r}$.
![[Bilateral Filtering Standard Deviations.png]]
