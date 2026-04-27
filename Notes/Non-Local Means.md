#notes 

>[!abstract]
>![[Non-Local Means.png]]
> 1. We can search the image for **neighbourhoods** similar to the one of the pixel being processed;
> 2. We replace the current pixel with a **weighted mean** of pixels with similar neighbourhoods;
> 3. **Weights** are computed according to similarity between neighbourhoods;
> 4. The averaging spans pixels that are *not local* within the image to the target pixel.
## In Detail
Our output pixel is a weighted sum of other pixels, weighted again by a similarity measure of the corresponding neighbourhoods.
We compute similarity as the *normalised Euclidean distance between neighbourhoods*.
$$
\begin{align}
I_{\text{output}}(i,j) &= \frac{\sum W_{\text{neighbourhood}}(k,l)I_{\text{input}}(k,l)}{\sum W_{\text{neighbourhood}}(k,l)} \\
W_{\text{neighbourhood}} &= e^{ -((\operatorname{neighbourhood}(k,l)-\operatorname{neighbourhood}(i,j))^{2})/h^{2} }
\end{align}
$$
![[Non-Local Means Performance.png]]
This is close to *state of the art* for noise removal.
It is:
+ Great for noise removal;
+ Dependent on neighbourhood size $N\times N$;
+ Slow, but optimisations exist;
+ Easily parallelised.


