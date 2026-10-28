#topic 

> [!abstract] 
> Recall the [[Perfect Cryptosystems#One-Time Pad|One-Time Pad]]. For this to meet the definition of a [[Perfect Cryptosystems|Perfect Cryptosystem]], it required ==a key that is at least as long as the message being sent==. Ideally, we want some method of **extending** a *short* key into a *longer* one, for use in a one-time pad (OTP).

Consider a OTP where all *messages*, *ciphertexts*, and *keys* are $L$-bit strings, but we want to use a **shorter** $ℓ$-bit seed $s$ as a key. To this, we need some deterministic *algorithm* $G$ that will convert an $ℓ$-bit string to an $L$-bit string.

This would give the following OTP, for $m,c=\{ 0,1 \}^{L},s=\{ 0,1 \}^{ℓ}$:
$$
E(s,m):=G(S) \oplus m \\
D(s,c):=G(S)\oplus c 
$$
This modified OTP is a **stream cipher** and the function $G$ is a **pseudo-random generator**.
## Pseudo-Random Generators
> [!definition] 
> A pseudo-random generator is a deterministic algorithm $G$ that takes as input a seed $s$ from a finite fixed seed space $\cal S$ and outputs $r$ from a finite output space $\cal R$. Typically, $\cal S,R$ are sets of bit strings of fixed lengths.

A PRG differs from RNG in that only in RNG is **entropy** continuously added to the internal state. This can come from many sources, such as keyboard/mouse events or interrupts.
### Security
For a PRG to be secure, the output should seem random. Or, given an output from the PRG and a random output, an adversary should not be able to distinguish between them. This is formalised in the following game:
$$
\boxed{
\begin{matrix}
\text{PRG Security} \\
\hline
s \overset{\textdollar}{\leftarrow} {\cal S} \\
r_{0} \leftarrow G(s) \\
r_{1} \overset{\textdollar}{\leftarrow} {\cal R} \\
b \overset{\textdollar}{\leftarrow} \{ 0, 1 \} \\
\hat{b} \leftarrow {\cal A}(r_{b}) \\
\text{Return }b=\hat{b}
\end{matrix}
}
$$
Let $W$ be the event that the adversary wins the bit-guessing game. Then, the advantage is defined as:
$$
	\mathbf{Adv}^{\text{PRG}}({\cal A}):=2\left|\space\text{Pr}[W]- \frac{1}{2}\right|
$$
A PRG $G$ is secure if for all efficient adversaries $\cal A$, $\mathbf{Adv}^{\text{PRG}}({\cal A})$ is **negligible**.