#notes 

A cryptosystem is **perfect** is knowledge of the ciphertext $C$ gives absolutely no information about the plaintext $M$.
> [!theorem] 
> In a **perfect cryptosystem** , there must be at least as many possible keys as possible plaintexts.

> [!proof] 
> Suppose $\cal|K|<|M|$ and let $C$ be a ciphertext. Let $d(C)$ denote the set of plaintexts that can be decrypted from $C$: $$d(C) = \{ M \in {\cal M} : \exists K \in {\cal K} e(M,K) = C \}$$
> We then have $d(C) \subseteq \cal M$. Also, since for every key $K$ encryption is **injective** (see [[Cryptography Notation]]), we have: $$|d(C)| \leq |{\cal K}| < |{\cal M}|$$
> Thus, $d(C)\subset \cal M$ and there exists $M^* \in {\cal M}\setminus d(C)$: the ciphertext gives away the information that the plaintext is not $M^*$ - a contradiction.
## One-Time Pad
In this **perfect cryptosystem**, the key length of the [[Cryptosystems#Vignere Cipher|Vigenere Cipher]] is extended to be as long as the plaintext. The key characters are generated uniformly at random:
```
M = THETREASUREISUNDERTHEROCKBYTHETHIRDPALMTREE
K = BHMNHRPBHQOILQWDBWPQCJNMYPKIPBZPWFZMDFNRBUC
C = VPRHZWQUCITRELKHGOJYHBCPJRJCXGTXFXDCERALTZH
```

Each character of $C$ is now a uniformly random letter. Thus, each ciphertext $C$ is equally likely, no matter the plaintext.
### Problems
1. **Key Generation**: we need to generate a large amount of truly random characters. Alternatively, we can use a cryptographically secure pseudo-random number generator;
2. **Key Distribution**: the keys are usually deployed as a book to many agents in the same organisation. This is not secure. In general, the pad must be destroyed after use.