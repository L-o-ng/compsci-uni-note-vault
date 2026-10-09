#notes 

If *Eve* knows both the *decoding algorithm* $d$ and the *key* $K$, then she can **decipher** the ciphertext. Therefore, at least one of the two must be kept secret. 

**Auguste Kerchoffs** argued that only the *key* should be kept secret:
> [!quote] 
> The cipher method must not be required to be secret, and it must be able to fall into the hands of the enemy without inconvenience.

This is known as **Kerchoffs's Principle**.
## Supporting Arguments
There are three main supporting arguments for the principle:
1. It is *much* easier to maintain secrecy of a short key than to keep secret the **more complex** algorithm they are using;
2. If the shared, secret information is *ever* exposed, then it is *much* easier to change a key than to **replace** an encryption scheme;
3. For large-scale deployment, it is *much* easier for all users to rely on the same encryption algorithm/software, than for everyone to use a different custom algorithm. In fact, it is *desirable* for schemes to be **standardised** for compatibility, and as such the scheme will undergo scrutiny for weaknesses.

This principle leads us to use systems whose designs are completely **public**.