#notes 

The derivative or integral of a power series $P(x)$ with respect to $x$ will have the same radius of convergence; this is unlike general series, where calculus operations may affect convergence.
This can be confirmed for a power series where the ratio test is successful:
+ $P(x)=\sum_{n=0}^{\infty}b_{n}x^{n}$ is absolutely convergent for $|x| < \frac{1}{c}$ where $c=\lim_{ n \to \infty } \left| \frac{b_{n+1}}{b_{n}} \right|$ .
+ The derivative $P'(x)=\sum_{n=1}^{\infty} nb_{n}x^{n-1}$ is convergent for $|x| < \frac{1}{c'}$ with $$c'=\lim_{ n \to \infty } \left| \frac{(n+1)b_{n+1}}{nb_{n}} \right|$$
+ Now note that: $$c'=\lim_{ n \to \infty } \frac{n+1}{n}\lim_{ n \to \infty } \left| \frac{b_{n+1}}{b_{n}} \right|=\lim_{ n \to \infty } \left| \frac{b_{n+1}}{b_{n}} \right|=c$$
This is similar for the integral $\int P(x) \, dx=\left( \sum_{n=1}^{\infty} \frac{1}{n+1}b_{n}x^{n+1} \right)+c$, which is convergent for $c''=\lim_{ n \to \infty }\left| \frac{(n+1)b_{n+1}}{(n+2)b_{n}} \right|$, and $c''=c$ by similar logic.
