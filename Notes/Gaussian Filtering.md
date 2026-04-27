#notes 

The value of the element $p'$ of the mask is given by the Gaussian function $g$ of the distance $d=|p-p'|$ between the central pixel $p$ and $p'$.
![[Gaussian Filter.png]]
The graph of a Gaussian function $g$ has the characteristic bell shape. Its general form is given by:
$$
g(x)=\frac{1}{\sigma \sqrt{ 2\pi }}e^{ -x^{2}/2\sigma^{2} }
$$
where $\sigma$ is the **standard deviation** controlling the width of the bell curve.
### Usage
Gaussian filters are used to remove image noise, but can often remove the fine features as well. It essentially blurs the image, giving more weight to values nearer the centre of the mask.
![[Gaussian Filter Example.png]]
### Construction
We can construct the $3\times 3$ filter for $\sigma=0.5$:
$$
\begin{bmatrix}
g_{\sigma}(\sqrt{ 2 }) & g_{\sigma}(1) & g_{\sigma}(\sqrt{ 2 }) \\
g_{\sigma}(1) & g_{\sigma}(0) & g_{\sigma}(1) \\
g_{\sigma}(\sqrt{ 2 }) & g(1) & g_{\sigma}(\sqrt{ 2 })
\end{bmatrix}
$$
We then divide by the sum of the elements to normalise:
$$
M_{3} = \begin{bmatrix}
0.011 & 0.083 & 0.011 \\
0.083 & 0.619 & 0.083 \\
0.011 & 0.083 & 0.011
\end{bmatrix}
$$
If the elements of a kernel **sum** to 1, then the convolution does not change the **average intensity** of the image.
### Maskless Gaussian Filtering
Since the mask elements come from the values of a Gaussian function, we can define Gaussian filtering without referencing masks:
$$
I^{\text{output}}_{p}= \frac{\sum_{p'\in \Omega}g(|p-p'|)I_{p'}}{\sum_{p'\in \Omega}g(|p-p'|)}
$$
The new pixel $p$ intensity is a weighted sum of the intensities of the pixels $p'$ in the neighbourhood $\Omega$.
The denominator of the fraction normalises the expression.
