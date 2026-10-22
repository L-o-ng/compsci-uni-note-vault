#notes 

Recall the [[Perfect Cryptosystems#One-Time Pad|One Time Pad]]. This is secure for a single message. What if we want to send two?
$$
c_{1}=m_{1}\oplus G(s) \\
c_{2}=m_{2}\oplus G(s)
$$
If we combine the ciphertexts, we obtain:
$$
c_{1}\oplus c_{2}=(m_{1}\oplus G(s))\oplus(m_{2}\oplus G(s))=m_{1}\oplus m_{2}
$$
Unsurprisingly, this is not secure. This highlights the importance of *key reuse*. In general, a stream cipher should not be used multiple times.
## Malleability
If we allow an eavesdropper to edit messages as well as just reading them, then it is possible for them to change the ciphertext in a predictable way. For example, if the attacker wants to change the message by a known amount $d$, then changing the ciphertext by that amount will do the same to $m$. If $c$ is the original ciphertext and the attack changes it to $c'=c \oplus s$ then:
$$
D(s,c')=c' \oplus G(s)=(c \oplus d)\oplus G(s)=m \oplus d
$$
Whilst this does require some knowledge on the initial plaintext, this is still an issue.

---

These are both issues, but neither are attacks against the [[Semantic Security]] game. They add to the limitations for when stream ciphers can be used.
