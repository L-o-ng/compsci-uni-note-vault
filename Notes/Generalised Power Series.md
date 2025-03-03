#notes 

Up to now, all power series have been of the form $P(x)=\sum b_{n}x^{n}$. However, we can write a power series of the form:
$$
P(x)=\sum_{n=0}^{\infty} b_{n}(x-0)^{n}
$$
And more importantly, a more general form is:
$$
P(x)=\sum_{n=0}^{\infty} b_{n}(x-0)^{n}
$$
with $a \in \Bbb{R}$ being a fixed real value. You can still apply the ratio test to find the [[Complex Power Series|radius of convergence]] $r=\frac{1}{c}$ with $c=\lim_{ n \to \infty }\left| \frac{b_{n+1}}{b_{n}} \right|$ if the limit exists. However, the interval of convergence will be **shifted** to be the region $(a-r, a+r)$ plus, potentially, one or both of the endpoints of the region.

We can manipulate power series in this way to obtain new power series. For example:
$$
\eqalign{
&\text{Let } &&P(x)=\sum_{n=0}^{\infty} b_{n}(1+y^{2})^{n} \\
&\text{Let } &&x=1+y^{2} \\
&\text{Then} &&P(1+y^{2})=\sum_{n=0}^{\infty} b_{n}(1+y^{2})^{n} \text{ is a power series in }y: \\
&&P(1+y^{2})&=b_{0}+b_{1}(q+y^{2})+b_{2}(1+y^{2})^{2}+b_{3}(1=y^{2})^{3}+\dots \\
&&&=b_{0}+b_{1}+b_{1}y^{2}+b_{2}+2b_{2}y^{2}+b_{2}y^{4}+b_{3}+3b_{3}y^{2}+3b_{3}y^{4}+b_{3}y^{6}+\dots \\
&&&=(b_{0}+b_{1}+b_{2}+b_{3}+\dots)+(b_{1}+2b_{2}+3b_{3}+\dots)y^{2}+(b_{2}+3b_{3}+\dots)y^{4}+(b_{3}+\dots)y^{6} \\
&&&=c_{0}+c_{2}y^{2}+c_{4}y^{4}+c_{6}y^{6}+\dots
}
$$
This has new coefficients $c_{0},c_{2},c_{4},c_{6},\dots$ which are infinite expressions in the original coefficients.