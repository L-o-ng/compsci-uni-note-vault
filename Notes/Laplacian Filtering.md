#notes 

In continuous mathematics, the **Laplacian** of a function $f(x,y)$ is defined as a sum of partial derivatives:
$$
\Delta f=\frac{ \partial^{2} f }{ \partial x^{2} } +\frac{ \partial^{2} f }{ \partial y^{2} }
$$
In image processing, with the image as a function $I(x,y)$ from pixel coordinates to intensities, the Laplacian is implemented via a discrete [[Convolution|Convolutional]] filter:
$$
\begin{matrix}
0 & 1 & 0 \\
1 & -4 & 1 \\
0 & 1 & 0
\end{matrix}
$$
Notice that, unlike [[Gaussian Filtering]], the mask has some negative elements, and that the sum of all elements is 0.
## Computing the Laplacian
To discretise a continuous function, **derivatives** become *differences* and **second-order derivatives** become *second-order differences*, or ==differences of differences==.
+ Consider a 1-dimensional image with three pixels of intensity $a,b,c$: $$\begin{bmatrix}a & b & c\end{bmatrix}$$
+ The differences are: $$\begin{bmatrix}b-a & c-b\end{bmatrix}$$
+ The difference of the intensity differences is: $$(c-b)-(b-a)=c-2b+a$$
+ This is the response at the central pixel $b$ to the convolution of the image $\begin{bmatrix}a&b&c\end{bmatrix}$ by the mask $\begin{bmatrix}1&-2&1\end{bmatrix}$.
### In 2D
The differences of the intensity differences in the $x,y$ directions are given by the responses to the masks:
$$
\begin{matrix}
0 & 0 & 0 \\
1 & -2 & 1 \\
0 & 0 & 0
\end{matrix}\quad\text{and}\quad\begin{matrix}
0 & 1 & 0 \\
0 & -2 & 0 \\
0 & 1 & 0
\end{matrix}
$$
By adding them, we get the Laplacian filter:
$$
\begin{matrix}
0 & 1 & 0 \\
1 & -4 & 1 \\
0 & 1 & 0
\end{matrix}
$$
## Applying the Filter
The response to the Laplacian filter is zero at the areas of the image where the intensity changes smoothly. This is because when *intensities* change *smoothly*, the *differences* are **equal** and the *second-order* differences are **zero**.
The responses are also zero at the areas of constant intensity.

When the variation is not smooth, the response can be non-zero. The less smooth, the higher the absolute value of the response. Thus, the highest responses are at the **edges of objects** in the image.
![[Laplacian Filter.png]]
### Edge Sharpening
We can subtract the filtered image from the original to sharpen the image.
![[Laplacian Edge Sharpening 1.png]]
This is however sensitive to noise.
![[Laplacian Edge Sharpening 2.png]]
As you can see, the noise is also amplified. We can apply the Laplacian of Gauss to solve this, by first smoothing with a Gaussian filter.
