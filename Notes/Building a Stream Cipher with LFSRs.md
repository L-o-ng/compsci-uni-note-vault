#notes 

See first: [[Linear-Feedback Shift Registers]].

Consider the PRG $G$ defined as follows: let $L$ be some predetermined maximum length degree-$n$ LFSR; $G$ takes as input some non-all-0 $n$-bit key $k$ which is then the initial state of $L$; $G$ runs $L$ for as many timesteps as needed and outputs the output bit from each timestep. ==🔴This isn't quite secure==.

Firstly, let us assume that the coefficients are known by [[Kerchkhoffs's Principle]]. Then the first $n$ bits of the output will reveal the initial state - the key. If we set $G$ to ignore the first $n$ bits of the output of $L$, any $n$ consecutive bits will allow an attacker to reproduce the remaining bits of the output.

Even if we extend the key to $2n$ bits, where the first $n$ represent the coefficients, and the remaining $n$ bits for the initial state, it is possible to extract the coefficients from the first $2n$ bits of the output. The first $n$ output bits $(y_{0},\dots,y_{n-1})$ are the initial state, and then the second $n$ output bits $(y_{n},\dots,y_{2n-1})$ can be used to generate $n$ linear equations with $n$ unknowns (the coefficients) as follows:
$$
\begin{align}
y_{n} &= c_{n-1}y_{n-1}\oplus \dots \oplus c_{0}y_{0} \\
&\ \ \vdots \\
y_{2n-1} &= c_{n-1}y_{2n-2}\oplus\dots \oplus c_{0}y_{n-1}
\end{align}
$$
If $L$ is a maximum-length LFSR then these are linearly independent, and thus can be solved efficiently using [[Linear Algebra]].
