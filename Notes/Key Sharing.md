#notes 

Encryption requires A and B to share a key, and to make sure only they know that key. This could be done via a prior exchange or a trusted 3rd party; what if they never met and don't trust anyone?
![[Padlock Key Sharing Model.png]]
## Diffie Hellman Key Exchange
This method of key exchange was the first public key cryptographic scheme, designed in 1976. GCHQ designed a similar scheme in 1975, but kept it secret until 1997. We use exponentiation $((x^{y})^{z}=(x^{z})=^{y})$ instead of padlocks like in the image above.
### Example
A wants to communicate with B over a TCP/IP network. She knows about cryptography, so she wants to encrypt all messages with a symmetric algorithm. We write $\{ m \}_{K}$ for the encryption of the message $m$ with the key $K$:
$$
\begin{matrix}
A \to B:&\text{"Let's use the key }K \text{"} \\
A \to B:&\{ \text{hello world} \}_{K}
\end{matrix}
$$
However, a malicious user E can intercept and read everything on the network by observing $K$.
### Man in the Middle Attack
A **MITM** attack corresponds to an attacker intercepting every message between two entities A and B, such that they think they are directly talking to each other.
It can typically be avoided by using *explicit identities* in messages that cannot be forged.
### Replay Attacks
A **replay attack** happens when the adversary can copy and send a message in order to fool its recipient, even if the adversary cannot read the content of the message.
A **nonce** is an element which is supposedly unique and randomly generated. They are used to defend against replay and MITM attacks.
## Needham-Schroeder Key Exchange
This is a symmetric key protocol published in 1978
$$
\begin{align}
A \to S:\quad& A,B,NA \\
S \to A:\quad& \{ NA,K,B,\{ K,A \}_{KBS} \}_{KAS} \\
A \to B:\quad& \{ K,A \}_{KBS} \\
B \to A:\quad& \{ NB \}_{K} \\
A \to B:\quad& \{ NB-1 \}_{K}
\end{align}
$$
The last 2 steps are a handshake, allowing B to establish that A is alive and is in possession of the key.
### Vulnerability
This protocol is vulnerable to a replay attack - an attacker can replay the message $\{ K,A \}_{KBS}$ if it compromised the key $K$ and authenticate to B. This was fixed in **Kerberos**, one of the main modern authentication protocols, using timestamps.
## Protocols with Public Keys
In the previous examples, we used symmetric keys with the goal to create a session key. In some cases, agents have public keys: $KA$ for A, and $KB$ for B. Anybody can encrypt with $KA$, but only $A$ can decrypt. A and B can now create a session key $A \to B:\quad\{ K \}_{KB}$ - but B cannot know that it comes from A.
A can **sign** the key with the key $SA$: $A \to B:\quad\{ \{ K \}_{SA} \}_{KB}$
B can decrypt $\{ K \}_{SA}$ and verifies the signature of A. This may be vulnerable to replay attacks.

---

See also: [Attack Interactive Tutorials](https://morisset.gitlab.io/ispag/tutorial/intro.html)
