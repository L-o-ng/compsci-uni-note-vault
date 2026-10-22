#notes 

> [!abstract] 
> **Semantic Security** is weaker than [[Perfect Cryptosystems]], but is less impractical. Rather than requiring that the ciphertext leaks *no* information about the plaintext, we allow *negligible* information to leak. 
> Informally, we consider that if an attacker is given a ciphertext and told that it is the encryption of one of two plaintexts, they should not be able to work out which it was.
## Formal Definition
We may **formalise** this as a game, where the attacker is the adversary $\cal A$, and $b=0,1$:
$$

\eqalign{\text{Experiment }b  \\  \hline m_{0},m_{1}&\overset{\textdollar}{\leftarrow}{\cal A} \\  k &\overset{\textdollar}{\leftarrow} {\cal K} \\  c &\overset{\textdollar}{\leftarrow} E (k, m_{b}) \\  \hat{b}&\overset{\textdollar}{\leftarrow}{\cal A}(c)}
$$
Informally:
1. The adversary gets to choose two messages of the same length;
2. They are then encrypted;
3. The adversary is given one, and must guess which it was.

For $b=0,1$, let $W_{b}$ be the event that $\cal A$ outputs 1. 
> [!definition] 
> $\cal A$'s **security advantage** is defined as: $$\mathbf{Adv}^{SS}({\cal A}) := |\operatorname{Pr}[W_{0}]-\operatorname{Pr}[W-1]|$$
### Bit Guessing Version
An equivalent version of this game (the *bit-guessing* version) is:
$$
\begin{matrix}
\text{Bit Guessing} \\
\hline
\end{matrix} \\
\eqalign{m_{0},m_{1}&\overset{\textdollar}{\leftarrow}{\cal A} \\  b &\overset{\textdollar}{\leftarrow} \{ 0,1 \} \\  k&\overset{\textdollar}{\leftarrow} {\cal K} \\  c &\overset{\textdollar}{\leftarrow} E(k,m_{b}) \\  \hat{b}&\overset{\textdollar}{\leftarrow}{\cal A}(c) \\  \text{Return }b &= \hat{b}}
$$
Let $W$ be the event that the adversary wins the bit-guessing game. Then:
$$
\mathbf{Adv}^{SS}({\cal A}) := 2|\operatorname{Pr}[W]- \frac{1}{2}|
$$

> [!important] 
> For a cryptosystem to be **semantically secure**, we require that for all *efficient* adversaries $\cal A$ that $\mathbf{Adv}^{SS}(\cal A)$ is **negligible**.
> Here:
> + We consider an adversary to be **efficient** if it is a probabilistic polynomial time algorithm;
> + $\mathbf{Adv}^{SS}({\cal A})$ to be **negligible** if it is $O\left( \frac{1}{f(n)} \right)$ for some super-polynomial $f(n)$.



