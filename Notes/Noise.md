#notes 

>[!abstract]
>No **digital** image is a perfect recreation of the original signal. They are limited in resolution by sampling and contain **noise**.
>Noise removal is a major goal of image processing to limit its effects on visualisation and analysis.

![[Image Noise 1.png]]
## Sources of Noise
### Capture
+ Variations in sensor *temperature*;
+ Electrical sensor noise;
+ Sensor non-uniformity;
+ Dust;
+ Vibration;
+ Lens Distortion;
+ Focus limitations;
+ Sensor saturation/under-exposure.
### Sampling
+ Limitations in sampling and intensity quantisation (aliasing) when performing ADC.
### Processing
+ Limitations in **numerical precision**;
+ Integer overflow;
+ Mathematical approximations.
### Compression
+ **Lossy** compression techniques remove information for a smaller file size;
	+ Examples include JPEG/MPEG. These remove non-perceivable detail. This can result in compression artefacts.

![[JPEG Artefacting.png]]
### Lighting
+ Sunlight changes;
+ Varying artificial light sources;
+ Interior light source oscillation;
+ Shadows cast by moving objects causing false image features.
### Occlusion
+ Objects obscured by other objects.
## Theoretical Noise Models
When we have quantities that vary a lot and are quite unpredictable, we can use **theoretical models** to simulate and model their behaviour. The main idea is to insert *artificial* noise so that we can test the effectiveness of denoising algorithms.
## Noise Types
### Salt and Pepper
**Salt and Pepper Noise**, also known as *impulse* or *spike* noise, is **random** white or black pixels inserted into the image. Their insertion follows a binary high-low bi-modal noise distribution. This causes abrupt variations in the image. 
![[Salt And Pepper Noise.png]]
This appears when a sensor or display fails to respond to input correctly - it is **dead**. This is less common in modern hardware.
### Gaussian
**Gaussian Noise**, also known as *additive* noise presents as small random variations in the image signal around its true value following the Gaussian distribution. It is the **most common** noise model in image processing, and describes most types of random noise encountered in image processing, *especially* **sensor noise**.
![[Gaussian Noise.png]]
$$
g(x)=\frac{1}{\sigma \sqrt{ 2\pi }}e^{ -x^{2}/2\sigma^{2} }
$$
## Removing Noise
We can remove noise by *filtering* it out using techniques based on **pixel neighbourhoods**.
Image filtering, amongst many other operations, use $N\times N$ image *neighbourhoods*.
Local image *neighbourhoods* define **connectivity** or a local area of **influence**, **relevance**, or **interest**.
![[Pixel Neighbourhood.png]]
### Spatial Filtering
We iterate through the pixels we want to process. For each pixel $(i,j)$:
+ Consider a neighbourhood $S$ of $(i,j)$. Usually this will be the centre of $S$;
+ Process the pixel values of $S$ to find a new value for $(i,j)$.

Spatial Filtering has **two** types:
+ **Linear** filtering - the output pixel is a *linear* combination of the corresponding input pixel's neighbourhood;
+ **Non-Linear** filtering - the output pixel is a **non-linear** *function* of the corresponding input pixel's neighbourhood. In practice, some decision-based algorithm is employed.
#### Linear Filters
See [[Mask Convolution in Noise Filtering]].
#### Non-Linear Filters
For an $N\times N$ neighbourhood $N_{xy}$, centred at pixel $(x,y)$, indexed by $(s,t)$, the following filters can be defined to replace each pixel with the min/max/median of the input neighbourhood:
+ Min: $$I_{\text{output}}(x,y)=\min_{(s,t)\in N_{xy}}\{ I_{\text{input}}(s,t) \}$$
+ Max: $$I_{\text{output}}(x,y)=\max_{(s,t)\in N_{xy}}\{ I_{\text{input}}(s,t) \}$$
+ Median: $$I_{\text{output}}(x,y)=\underset{(s,t \in N_{xy})}{\operatorname{median}}\{ I_{\text{input}}(s,t) \}$$
##### Mean Filtering
We replace a given pixel with the mean value of its neighbourhood. This eliminates sudden intensity jumps which could be caused by some noise processes.
$$
I_{\text{output}}(i,j)=\frac{1}{N^{2}}\sum_{(i,j)\in S}I_{\text{input}}(i,j)
$$
This is not robust against large noise deviations, like those caused by salt and pepper noise, but is effective against noise distributed around the original value. It can cause **edge blurring**.

Mean filtering can be used as a basic general smoothing filter.
###### Alpha Trimmed Mean
$$
I_{\text{output}}(x,y)=\frac{1}{N^{2}-2d}\sum_{(s,t)\in N_{xy}}I_{\text{input}_{r}}(s,t)
$$
The dimension of the neighbourhood $N_{xy}$ is $N\times N$. The $d$ lowest and $d$ highest intensity levels of the image in $N_{xy}$ are deleted, with $I_{\text{input}_{r}}$ denoting the remaining (reduced set of) $N^{2}-2d$ pixels in $N_{xy}$. This ignores **outliers**.
###### Harmonic Mean
$$
I_{\text{output}}(x,y)=\frac{N^{2}}{\sum_{(s,t)\in N_{xy}} \frac{1}{I_{\text{input}}(s,t)}}
$$
##### Median Filtering
We replace a given pixel with the median of its $N\times N$ neighbourhood. This is used to *eliminate* **sudden intensity jumps**. This requires **sorting** values, but is robust against outliers.



