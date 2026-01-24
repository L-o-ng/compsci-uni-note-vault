#notes 

We can process each pixel value $p$ individually with a mathematical function $p'=f(p)$ as a **point transform operator**. This transforms an image from one state to another.

See first: [[Dynamic Range]]
## Logarithmic Transform
The **logarithmic transform** replaces each pixel value with its logarithm:
$$
I_{\text{output}}(i,j)=\log I_{\text{input}}(i,j)
$$
This compresses the dynamic range, and can map a narrow range of **low intensity values** into a wider range of output levels.
In practice, we can control the range with the function:
$$
I_{\text{output}}(i,j)=c \cdot \log[1+(e^{ \sigma }-1)I_{\text{input}}(i,j)]
$$
+ $\sigma$ controls the **range** of the values onto which the function is applied. ![[Sigma in the Logarithmic Transform.png]]
	+ Increasing $\sigma$ allocates a larger part of the output range to low intensity values.
+ $c$ normalises the output to the range $[0,255]$: $$c=\frac{255}{\log(1+|R|)}$$
	+ Here, $R$ is the maximum value in $I_{\text{input}}(i,j)$.
### Example
![[Logarithmic Transform Example.png]]
The transform here **brightens** the foreground, spreading low pixel values over a higher range; and **compresses** the background pixel range.
## Exponential Transform
This transform is the inverse of the logarithmic transform. It also compresses the dynamic range, but does so by replacing each pixel value with its exponent:
$$
I_{\text{output}}(i,j)=\exp(I_{\text{input}}(i,j))
$$
In practice, we use a variable basis and scaling:
$$
I_{\text{output}}(i,j)=c\cdot[(1+\alpha)^{I_{\text{input}}(i,j)}-1]
$$
We subtract 1 to prevent offset in output. A basis greater than 1 is suitable for image enhancement.
### Example
![[Exponential Transform Example.png]]
Unlike the logarithmic transform, detail in high value regions is enhanced.
## Power-Law Transform
This transform raises each pixel to a fixed power:
$$
I_{\text{output}}(i,j)=c\cdot(I_{\text{input}}(i,j))^{r}
$$
+ For $r>1$ it enhances high-value intensities and compresses low;
+ For $r<1$ it enhances low-value intensities and compresses high.

In practice, $I_{\text{input}}$ is normalised to $[0,1]$ for the operation and then back to $[0,255]$ for visualisation.
### Gamma Correction
**Gamma correction** is a non-linear operation used to encode luminescence values in image systems. Our $r$ is traditionally called the gamma value. $\gamma<1$ corrects underexposure, whilst $\gamma>1$ corrects overexposure.