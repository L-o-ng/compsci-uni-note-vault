#notes

See also: [[Consequences of Euler's Formula]]

$$\cos \theta+i\sin \theta=e^{i\theta}$$
## What is $e^{i\theta}$?
It is the same as $e^x$ but replace $x$ with $i\theta$:
### Definition
$$\exp(i\theta)=e^{i\theta}=\sum_{n=0}^\infty \frac{(i\theta)^n}{n!}$$
So, $$\array{e^{i\theta}=1+i\theta+\frac{(i\theta)^2}{2}+\frac{(i\theta)^3}{3!}+\frac{(i\theta)^4}{4!}+\dots\\=1+i\theta-\frac{\theta^2}{2}-i \frac{\theta^3}{3!}+ \frac{\theta^4}{4!}+\dots}$$
giving a complex number for every real $\theta$.

## Exponent Rules
+ $$\array{e^{i\theta}e^{ix}=e^{i(\theta+x)}\\e^{i n\theta}=(e^{i\theta})^n\\\text{The same as the real proof.}}$$
+ $$1=e^0=e^{i 0}=e^{i\theta-i\theta}=e^{i\theta}e^{-i\theta}\therefore e^{-i\theta}=\frac{1}{e^{i\theta}}\text{ As for real numbers.}$$
## Proof (Non-Examinable)
$$\begin{align}
\frac{d}{d\theta}(e^{-i\theta}(\cos \theta+i\sin \theta)) &=\frac{d}{d\theta}e^{-i\theta}(\cos \theta+i\sin \theta)+e^{-i\theta} \frac{d}{d\theta}(\cos \theta+i\sin \theta) \\
&=-ie^{-i\theta}(\cos \theta+i\sin \theta)+e^{-i\theta}(-\sin \theta+i\cos \theta) \\
&=0 \\
&\therefore e^{-i\theta}(\cos \theta+i\sin \theta)=\text{constant - independent of }\theta \\
&\text{Let }\theta=0\text{ then }e^{-i 0}(\cos 0+i\sin 0)=1=\text{constant} \\
&\text{So }\underline{\cos \theta+i\sin \theta=e^{i\theta}}
\end{align}$$
