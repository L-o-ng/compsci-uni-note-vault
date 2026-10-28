#definition 
## Confusion
**Confusion** was identified by Claude Shannon in a 1945 classified report "A Mathematical Theory of Cryptography". It explains that ==each bit of the ciphertext should be dependent on multiple bits of the key==. Examples explored in [[Cryptosystems#Examples of Cryptosystems]] do not satisfy this, which is partly the source of their insecurity.
## Diffusion
**Diffusion**, identified in the same report, is the property that ==changing a bit of the plaintext should affect that many bits of the ciphertext==. The [[Cryptosystems#Autokey Variant|Autokey Vigenere Cipher]] had this property, but the earlier schemes did not.
## Nonlinearity
**Nonlinearity** is important, since linear-function based ciphers are vulnerable to linear and [[Differential Cryptanalysis]]. For functions on binary strings, taking XOR $\oplus$ and permuting the bits of a string are both linear, so secure ciphers must contain other nonlinear elements.
