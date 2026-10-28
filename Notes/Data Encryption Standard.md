#notes 

The **DES** is a [[The Feistel Cipher|Feistel Cipher]] which processes plaintext blocks of $n=64$ bits, producing 64-bit ciphertext blocks.
## Key Schedule
The effective size of the secret key $K$ is $k=56$ bits. More precisely, the input key $K$ is specified as a 64-bit key, 8 bits of which (bits $8,16,\dots,64$) are used as odd-parity bits:
$$
\begin{matrix*}[l]
k_{8}=k_{1}\oplus k_{2}\oplus k_{3}\oplus k_{4}\oplus k_{5}\oplus k_{6}\oplus k_{7}\oplus 1 \\
k_{16}=k_{9}\oplus k_{10}\oplus k_{11}\oplus k_{12}\oplus k_{13}\oplus k_{14}\oplus k_{15}\oplus 1 \\
\vdots \\
k_{64}=k_{57}\oplus k_{58}\oplus k_{59}\oplus k_{60}\oplus k_{61}\oplus k_{62}\oplus k_{63}\oplus 1
\end{matrix*}
$$
The $2^{56}$ keys implement at most $2^{56}$ of the $2^{64}!$ possible bijections on 64-bit blocks. A widely-held belief is that the parity bits were introduced to reduce the effective key size from 64 to 56 bits to intentionally reduce the cost of exhaustive key search by a factor of 256.
```
Algorithm DES Key Schedule
INPUT: 64-bit key K=k_1...k_64
OUTPUT: 16 48-bit keys K_i, 1<=i<=16
	1. Define v_i, 1<=i<=16 as follows: v_i = 1 for i in {1,2,9,16}; v_i = 2 otherwise;
	2. (C_0, D_0) <- PC1(K)
	3. For i <- 1 to 16, letting X^(<-v) denote X shifted cyclically left v times, do:
		1. C_i <- C_(i-1)^(<-v_i)
		2. D_i <- D_(i-1)^(<-v_i)
		3. K_i <- PC2(C_i, D_i)
```
![[Data Encryption Standard.png]]
This permutation of the key bits allows the Feistel scheme to be used with a much shorter key than if all sub-keys were independent, and provides confusion.
## Feistel Functions on DES
Encryption proceeds in 16 stages, or *rounds*. From the input key $K$, 16 48-bit sub-keys $K_{i}$ are generated, one for each round. Within each round, 8 fixed, 6-to-4 bit substitution mappings (**S-boxes**) $S_{i}$ collectively denoted $S$ are used. The 64-bit plaintext is divided into 32-bit halves $L_{0},R_{0}$. Each round is functionally equivalent, taking 32-bit inputs $L_{i-1}$ and $R_{i-1}$ from the previous round and producing 32-bit outputs $L_{i},R_{i}$ for $1\leq i\leq 16$, as follows:
$$
\begin{align}
L_{i}&=R_{i-1} \\
R_{i}&=L_{i-1}\oplus f(R_{i-1}K_{i}) \\
\text{where} \\
f(R_{i-1},K_{i})&=P(S(E(R_{i-1})\oplus K_{i}))
\end{align}
$$
Here, $E$ is a fixed expansion permutation mapping $R_{i-1}$ from 32 to 48 bits. $P$ is another fixed permutation on 32 bits. Both of these permutations provide diffusion and confusion to the cipher. The tables below give $E,P$: that is:
$$
\begin{align}
E(r_{1},r_{2},r_{3},\dots,r_{31},r_{32})&=(r_{32},r_{1},r_{2},\dots,r_{32},r_{1}) \\
P(t_{1},t_{2},t_{3},\dots,t_{31},t_{32})&=(t_{16},t_{7},t_{20},\dots,t_{4},t_{25})
\end{align}
$$
![[Data Encryption Standard-1.png]]
## S-Boxes
The $S_{i}$ S-boxes are given in the following table. The S-boxes are the nonlinear component of the encryption, and as such are the crucial component of its security. in DES, the S-boxes are a lookup table, with no indication of logic.

They are applied as follows:
1. First, let $B_{i}=(b_{1},b_{2},b_{3},b_{4},b_{5},b_{6})$. 
2. Then, $\text{row }2b_{1}+b_{6} =\text{ column }8b_{2}+4b_{3}+2b_{4}+b_{5}$.
3. Then,look up the table and write the entry in 4-bit binary. For example, computing $S_{1}(011011)$:
$$
\begin{align}
B&=011011 \\
\text{row} & = 1 \\
\text{column}  & = 13 \\
S_{1}[1,13]&=5=0101
\end{align}
$$


![[Data Encryption Standard-2.png]]
## Computing $f$
1. Expand $R_{i-1}=r_{1}r_{2}\dots r_{32}$ from 32 to 38 bits using $E:T \leftarrow E(R_{i-1})$. Thus, $T=r_{32}r_{1}r_{2}\dots r_{32}r_{1}$;
2. $T \leftarrow T \oplus K_{i}$. Represent $T$ as eight 6-bit character strings: $(B_{1},\dots,B_{8})=T$;
3. $T \leftarrow(S_{1}(B_{1}),S_{2}(B_{2}),\dots,S_{8}(B_{8}))$;
4. $T \leftarrow P(T)$.

![[Data Encryption Standard-3.png]]
## The Whole Algorithm
![[Data Encryption Standard-4.png]]
![[Data Encryption Standard-5.png]]
![[Data Encryption Standard-6.png]]
## Weaknesses
todo!