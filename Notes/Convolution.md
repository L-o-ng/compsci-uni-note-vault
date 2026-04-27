#notes 

>[!abstract]
>A **mask** is a small matrix used to process *another* matrix.
>The **convolution** of an image $I$ by a mask $M$ transforms each element $a_{ij}$ of $I$ by the following procedure:
> 1. Place the centre of $M$ over $I(i,j)$;
> 2. Do element-wise multiplication of the corresponding elements;
> 3. Add the products.
>
>The spatial linear filtering of matrix $A$ by mask $M$ is called *convolution of $A$ by $M$*.
>This is called linear as it operates on the image *linearly*.
## Convolution
For a mask of size $(2N+1)\times(2N+1)$, convolution can be written as:
$$
I_{\text{output}}(i,j)=\sum_{k=-N}^{N} \sum_{l=-N}^{N} I_{\text{input}}(i+k,j+l)m_{kl}
$$
If the mask has **odd** dimensions, it has a *well-defined* centre. Otherwise, we have to arbitrarily designate an element of the mask as its centre.
In the implementation of convolution, the matrix should be updated only after all operation results have also been computed instead of being updated on the fly.
The **mask** is also known as:
+ A **filter**;
+ A **kernel**;
+ A **template**;
+ A **window**.
### 2D Discrete Convolution
**Discrete Convolution** as a *2D* filter can thus be represented as follows for a generalised $N\times M$ convolution mask:
$$
I_{\text{output}}(i,j)=\sum_{k=1}^{N} \sum_{l=1}^{M} I_{\text{input}}(i-(N-1)+k,j-(M-1)+l)m_{kl}
$$
In terms of image processing, this is essentially the **localised weighted sum** of the image $I$, and the convolution kernel $m$ over an $N\times M$pixel neighbourhood at a given location within the image $(i,j)$.

See [[Gaussian Filtering]], [[Laplacian Filtering]]
### Boundary Handling
We can:
+ Use padding with zeroes or another value (this can however lead to poor results);
+ Extrapolate or mirror values from inside the image;
+ Do not perform convolution in these areas (results in a smaller image).
### Computational Cost
Convolution is expensive but not too bad on modern hardware:
+ We have 9 multiplications and 8 additions per position for a $3\times3$ kernel;
+ We therefore have $N^{2}$ multiplications and $N^{2}-1$ additions for an $N\times N$ kernel;
+ So $C\times R$ image convolution is $O(CRN^{2})$ for an $N\times N$ kernel.


