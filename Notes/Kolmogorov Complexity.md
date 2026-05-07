#notes 

Consider the information content of the following sequences:
$$
\begin{matrix}
A=0000000000000000000000000000000000000000 \\
B=0000000000000000000011111111111111111111 \\
C=0101010101010101010101010101010101010101 \\
D=1110010110100011101010000111010011010111
\end{matrix}
$$
Intuitively, sequence $D$ appears to contain more information than the others, as it is the only sequence that does not have a concise description.
## Minimal Length Descriptions
Let $x$ be a binary string. The **minimal description** of $x$, denoted $d(x)$, is the shortest string $\langle M,w\rangle$ where the [[The Turing Machine|Turing Machine]] $M$ on input $w$ **halts** with $x$ on its tape. If several such strings exist, we select the *lexicographically* **first** among them. The **descriptive complexity** of $x$, denoted $K(x)$, is the length of the *minimal description* of $x$:
$$
K(x)=|d(x)|
$$
Descriptive complexity is also known as **Kolmogorov Complexity**.
## Properties
### Theorem 1
$$
\exists c\forall x[K(x)\leq |x|+c]
$$
The Kolmogorov complexity of a string is at most a fixed constant more than its length. $c$ is universal, and *not* dependent on the string.
### Theorem 2
$$
\exists c\forall x[K(xx)\leq K(x)+c]
$$
### Theorem 3
$$
\exists c\forall x,y[K(xy)\leq K(x)+K(y)+\log \min\{ K(x),K(y)+c \}]
$$
### Theorem 4
$$
\forall d\exists x,y[K(xy)\geq K(x)+K(y)+d]
$$
## Incompressible Strings
Theorem 1 shows that the *minimal description* of any string **cannot** be much longer than the string itself. Some strings may have minimal descriptions *much shorter* than themselves.
We now ask if there exist strings that **lack** short descriptions:
### Definition
Let $x$ be a string. We say that $x$ is $c$-compressible if $K(x)\leq |x|-c$.
If $x$ is not $c$-compressible, we say that $x$ is incompressible by $c$.
If $x$ is incompressible by 1, we say that $x$ is incompressible.
### Theorem 5
Incompressible strings of **any** length exist.
At least $2^{n}-2^{n-c+1}+1$ strings of length $n$ are incompressible by $c$.
### Theorem 6
$K(x)$ is not computable.