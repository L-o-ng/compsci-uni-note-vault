#notes 

A **Feistel Cipher** is an iterated cipher mapping a $2t$-bit plaintext $(L_{0},R_{0})$ for $t$-bit blocks $L_{0},R_{0}$ to ciphertext $(R_{r},L_{r})$ through an $r$-round process where $r\geq 1$.

For $1 \leq i \leq r$, round $i$ maps $(L_{i-1},R_{i-1}),K_{i}\to(L_{i},R_{i})$ as follows:
$$
\begin{align}
L_{i}&=R_{i-1} \\
R_{i}&=L_{i-1}\oplus f(R_{i-1},K_{i})
\end{align}
$$
where each sub-key $K_{i}$ is derived from the cipher key $K$.

Typically in a Feistel cipher, $r \geq 3$ and is often even. Decryption is achieved using the mirror image of the same $r$-round process, but with sub-keys used in the reverse order: $K_{r}$ through $K_{1}$. Often, the Feistel structure is used with the ciphertext ordered as $(R_{r},L_{r})$ rather than $(L_{r},R_{r})$: the blocks are exchanged from their usual order after the last round. In this case, decryption is exactly the same process as encryption, but again with reverse-order sub-keys.

The $f$ function of the cipher need not be invertible to allow inversion of the Feistel cipher. It can be any function, although some choices create insecurity. We illustrate that successive rounds of a Feistel cipher operate on alternating halves of the ciphertext, while the other remains constant.
![[The Feistel Cipher.png]]

---

See also: [[Properties of a Good Cipher]].