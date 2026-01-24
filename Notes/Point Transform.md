#notes 

Point transforms map *individual* **points** in the input image to individual points in the output image. This is performed as an operation $o$ between two images $I_{A},I_{B}$ or an image $I_{A}$ and a constant $C$:
$$
\begin{matrix}
I_{o}=I_{A}oI_{B} \\
I_{o}=I_{A}oC
\end{matrix}
$$
## Basic Transforms
### Arithmetic Operations
#### Addition
+ $C$ - adding a value to each image pixel;
+ Application - **brightness adjustment**; ![[Point Transforms Brightness Adjustment.png]]
+ Application - **blending**. ![[Point Transforms Blending.png]]
#### Subtraction
+ $C$ - Subtracting a value from each pixel;
+ Application - **Brightness adjustment**;
+ Application - **Image differencing** (this can show us the difference between images: subtracting a blank scan can correct non-uniform illumination, for example). ![[Point Transforms Image Differencing.png]]
#### Division
+ $C$ - Dividing each image pixel by a value;
+ Application - **Brightness adjustment**;
+ Application - **Image differencing**.
#### Multiplication
+ $C$ - Multiplying each image pixel by a value;
+ Application - **Brightness Adjustment**;
+ Application - **Image Blending**:
	+ This is an imaging technique that produces an overlay effect between $N$ different images: $$I_{o}=\sum_{i}^{} \frac{1}{N}I_{i}$$
### Logical Operations
#### NOT
+ In grayscale images, dark areas become light and vice-versa;
+ In colour images, it produces the **photographic negative effect** - not negative values. ![[Point Transforms Negative Effect.png]]
#### AND
This operation allows for:
+ Detecting differences/overlap between images; ![[Point Transforms Difference Detection.png]] ![[Point Transforms Overlap.png]]
+ Highlighting appropriate regions with a mask; ![[Point Transforms Image Masking.png]]
+ Slicing bit planes through an image - for example, ANDing with $10000000_{b}$ gives the most significant bit plane: ![[Point Transforms Bit Planes.png]]
#### OR
This operation is useful for:
+ Processing binary images;
+ Detecting common or moved objects.
#### XOR
This is useful for:
+ Detecting image differences - it highlights only where changes occur. ![[Point Transforms XOR.png]]
## Colour to Grayscale
Grayscale images contain less information as they are single-channel. This makes them faster to process, at the cost of destroying non-feature information.
A simple way to do the conversion is to ==take a weighted sum of the RGB values==:
$$
I_{g}=\alpha I_{C}(R)+\beta I_{C}(G)+\gamma I_{C}(B)
$$
The coefficients are in *proportion* to the **human vision sensitivity** for each colour channel. One common weighting is the **NTSC Television Standard**:
$$
\alpha=0.2989,\beta=0.5870,\gamma=0.1140
$$
## Complexity
Note that image processing is $O(n^{2})$ on square $n\times n$ images. We can solve this with parallel processing, or down-sizing for processing, then upscaling.
