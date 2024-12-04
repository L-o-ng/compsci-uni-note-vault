#notes 

For $x>0$ we define $$\Gamma(x) = \int_0^\infty t^{x-1} e^{-t} \, dt
$$
## Properties
For $x > 1$, $$\array{\Gamma(x) = \int_0^\infty t^{x-1} e^{-t} \, dt=-t^{x-1}e^{-t}\Bigg|_{t=0}^{t=\infty}-\int(x-1)t^{x-2}(-e^{-t})dt \\
= 0 + (x-1)\int t^{x-2}e^{-t}dt=(x-1)\Gamma(x-1) \\
\text{So }\underline{\Gamma(x)=(x-1)\Gamma(x-1)}
}$$
So, $$\array{\eqalign{
\Gamma(1) &= \int_{0}^\infty e^{-t}dt=-e^{-t}\Bigg|_{0}^{t=\infty}=1 \\
\Gamma(2) &= (2-1)\Gamma(1)=1 \\
\Gamma(3) &= (3-1)\Gamma(2)=2 \\
\Gamma(4) &= (4-1)\Gamma(3)=6 \\
\Gamma(5) &= (5-1)\Gamma(4)=24 \\
} \\
\text{So }\underline{\Gamma(n)=(n-1)!,\quad n \in \Bbb{Z}}
}$$
$\Gamma(x)$ is an extension of the factorial -1 to all **reals** > 0.
todo!