#notes 

> [!abstract]
> Eve is assumed to know the *encryption function* $e$, *decryption function* $d$, and also to have various additional information, such as **language statistics**. She will also have access to the ciphertext $C$. All she lacks to decipher the message is the *key* $K$.

There are three standard forms of attack:
1. Ciphertext-only attack;
2. Known-plaintext attack: Eve is assumed to have a sample of plaintext and its encryption;
3. Chosen-plaintext attack: Eve is able to acquire chosen samples of plaintext/ciphertext pairs.

Current **cryptosystems** are required to be secure against *chosen-plaintext attacks*.
## Examples of Cryptosystems
### Caesar Cipher
In this *cryptosystem*, we rotate all letters of the alphabet a fixed number of times to create a new one.
### Substitution Cipher
In this *cryptosystem*, the key is a permutation of the letters of the alphabet:
```
A = ABCDEFGHIJKLMNOPQRSTUVWXYZ
K = QWERTYUIOPASDFGHJKLZXCVBNM
```
Encryption is achieved by applying the permutation letter-wise.
This scheme is highly vulnerable to [[Frequency Analysis]] for large texts.
### Vignere Cipher
The **Vignere cipher** is a *polyalphabetic* substitution cipher: an extension of the *Caesar* and simple *substitution* ciphers. The **key** is a sequence of letters. The key is **repeated** until it is as long as the message, and the corresponding message and key characters are **added**, mod 26:
```
M = THETREASUREISUNDERTHEROCKBYTHETHIRDPALMTREE
K = BOTTLEOFRUMBOTTLEOFRUMBOTTLEOFRUMBOTTLEOFRU
C = VWYNDJPYMMRKHOHPJGZZZEQREVKYWKLCVTSJUXRIXWZ
```
If the length of the key is guessed right, the attacker can still use [[Frequency Analysis]].
#### Autokey Variant
The basic idea is to **break** the *frequency analysis* by having a non-repeating key. Again, the key is a sequence of letters. The key is repeated only once:
```
 M = THETREASUREISUNDERTHEROCKBYTHETHIRDPALMTREE
 K = BOTTLEOFRUM
K* = BOTTLEOFRUMTHETREASUREISUNDERTHEROCKBYTHETH
 C = VWYNDJPYMMRCAZHVJSMCWWXVFPCYZYBMAGGACKGBWYM
```
This was considered unbreakable for ~300 years. It was broken in 1863 by a Prussian major, who discovered that the length of the keyword can be accurately determined by looking at the separation of *repeated* **digrams**. Frequency analysis can then be used to determine the Caesar shift for that set of character positions.
