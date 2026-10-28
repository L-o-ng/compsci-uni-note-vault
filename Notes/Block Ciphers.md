#notes 

An $n$-bit **block cipher** is a pair of deterministic functions$${\cal E}=(E,D)\ E:\{ 0, 1 \}^{n}\times{\cal K} \to \{ 0, 1 \}^{n}$$such that for each key $K \in{\cal K}, E(M,K)$ (the encryption function for $K$) is a **bijection** from $\{ 0,1 \}^{n}$ to $\{ 0,1 \}^{n}$ denoted $f_{k}$.
Thus, $f_{k}$ is a permutation on $\{ 0,1 \}^{n}$ and decryption can be defined similarly using the inverse permutation $f_{k}^{-1}$.
## Modes of Operation
A block cipher is *not* a [[Cryptosystems|Cryptosystem]] on its own. It is used only to **encrypt** a particular *block* of data, and usually these blocks are much shorter than the message we want to encrypt, as the block length can be at the most the key length, and we want reasonably short keys. To form a full cryptosystem, we must specify a mode of operation.
### Electronic Codebook
This is the simplest mode of operation, named after physical codebooks. The message is divided into blocks and each block is encrypted separately.
![[Block Ciphers.png]]
![[Block Ciphers-1.png]]
The **disadvantage** of this mode is a lack of **diffusion**. Because it encrypts identical plaintext blocks into identical ciphertext blocks, it does not hide *patterns* well. Therefore, global patterns across the plaintext remain in the ciphertext.
![[Block Ciphers-2.png]]
### Feistel Cipher
See [[The Feistel Cipher]].
### DES
See [[Data Encryption Standard]].
