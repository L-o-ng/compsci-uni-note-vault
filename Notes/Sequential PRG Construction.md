#notes 

Suppose we have a black box PRG $F$ defined over $({\cal S}, {\cal S\times R})$ and the ability to transmit a *single*, but we want to generate more random bits?

For ease, we will say that $\cal S$ is the *set* of all $s$-bit strings and $\cal R$ is the *set* of all $r$-bit strings, giving $G$ as taking $s$ bits as *input* and *outputs* $s+r$ bits. We can **chain** multiple $G$s together, by feeding the first $s$ bits of the output of one $G$ to be the **seed** for the next.
Specifically, we can construct a new PRG $G'$ over $({\cal S}, {\cal R}^{n}\times{\cal S})$ as follows:
$$
\begin{matrix*}[l]
G'(s) \\
\hline
s_{0} \leftarrow s \\
\text{for }i \leftarrow 1\text{ to }n: \\
\quad (r_{i},s_{i}) \leftarrow G(s_{i}) \\
\text{Return} \\
(r_{1},\dots,r_{n},s_{n})
\end{matrix*}
$$
The security of this degrades linearly with $n$, similarly to the [[Parallel PRG Construction]]. Interestingly, this means that it's as hard to stretch $s$ bits into $s+1$ random bits as it is to stretch $s$ bits into $s+n$ random bits up to polynomial $n$.
> [!theorem] 
> If $G$ is a secure PRG defined over $({\cal S}, {\cal R})$ then $G'$ constructed as above is also a secure $PRG$ defined over $({\cal S},{\cal R}^{n}\times{\cal S})$. In particular, for every adversary $\cal A$ against the PRG security of $G'$, there exists an adversary $\cal B$ against the PRG security of $G$ such that: $$\mathbf{Adv}^{\text{PRG}}_{G'}({\cal A}) \leq n\mathbf{Adv}^{\text{PRG}}_{G}({\cal B})$$
> The proof of this follows a similar hybrid argument to that seen in [[Parallel PRG Construction#Proof]].

