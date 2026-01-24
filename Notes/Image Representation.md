#notes 

An **image** is a *multidimensional signal* represented by a 2D grid of values, indexed as $(x,y)$ into the pixel grid, where the **top-left** is the origin (when using OpenCV).
## Resolution
### Spatial Resolution
The **spatial resolution** is the $X \times Y$ dimensions of the image.
### Colour Resolution
The **colour resolution** is the dimension of the colour space. It is linked to [[Quantisation]]. It represents the number of *possible* intensity/colour values a pixel may have:
+ A **binary** image has 2 colours;
+ A **grayscale** image has 256 gray levels;
+ A **colour** image commonly has 256 values per RGB colour channel.
### Temporal Resolution
In *continuous* capture systems, **temporal resolution** is the number of images captured in a given time period, commonly quoted in frames per second.
## Representational Requirements
Scenes have to be sampled and quantised. This is analogue to digital conversion, and turns the light waveform into a discrete digital image. Sampling must be high enough to preserve useful information in the image. Quantisation must avoid *aliasing*.
![[Image Aliasing.png]]
Image processing algorithms must be able to cope with problems arising from this form of sampling noise.
