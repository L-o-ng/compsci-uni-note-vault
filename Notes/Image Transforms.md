#notes 

Recall that images are a *matrix* of points. We can **process** an image by manipulating the matrix. We can also **transform** multiple images in this way.
## Why Transform?
We can:
+ **Remove** degradations introduced during capture;
+ Improve **image appearance** for viewing or further processing;
+ Identify image **features** for recognition of scene objects;
+ Transform images to an alternate **representation** for better processing.
## Transformation Types
An image transform, $I_{\text{input}}\to I_{\text{output}}$ may be:
+ A [[Point Transform]] involving one pixel at a time;
+ A [[Convolution|Local Transform]] involving the local image neighbourhood;
+ A [[Global Image Transforms|Global Transform]] involving the whole image.
