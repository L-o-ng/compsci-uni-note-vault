#notes 

The message $M \in \cal M$ is known as the **plaintext**.
*Alice* and *Bob* have some secret information $K \in \cal K$, known as the **key**.
*Alice* encrypts using an encryption function $e:\cal M \times K \to C$.

> [!definition] 
> The transmitted sequence: $$ C = e(M,K) \in \cal C$$
> is called the **ciphertext**. 

*Bob* receives $C$, and decrypts using the decryption function $d:\cal C \times K \to M$.

> [!definition] 
> We require that: $$d(e(M,K)K)=M$$
> for all plaintexts $M$. 

> [!theorem] Corollary
> This implies that for a given key $K$, the encryption function must be **injective**: $$e(M_{1},K)=e(M_{2},K) \implies M_{1}=M_{2}$$

> [!important] 
> However, encryption functions do **not** need to be *injective* in the **key** domain: $$e(M,K_{1})=e(M,K_{2}) \centernot\implies M_{1}=M_{2}$$

