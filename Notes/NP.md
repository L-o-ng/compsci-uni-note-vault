#notes 

See first: [[Certificates and Verifiers]], [[Non-Deterministic Time Complexity]]

---

We have seen that [[P]] provides a useful model for *easy* problems. What about *harder* ones?
We have the class $NP$ - Non-deterministic Polynomial Time.

>[!definition] The Class $NP$
>The class of languages that have *polynomial-time verifiers* is called $NP$.
## Alternative Definition
We can get an alternative definition of the class $NP$ by considering a [[Non-Deterministic Turing Machine]]. Recall that if $NT$ is a NDTM, then $NT(x)$ denotes the *tree* of configurations which can be entered with input $x$, and $NT$ accepts $x$ if there is **some** accepting path in $NT(x)$.
>[!definition] The Class $NP$
>$$NP=\bigcup_{k\geq 0}NTIME[n^{k}]$$

This was the original form of the definition of $NP$, and was first formulated by Richard Karp in 1972.
## Equivalence
>[!theorem]
>The two definitions of $NP$ are equivalent.

>[!proof]
> 1. If $\mathcal{L} \in NTIME[n^{k}]$ then there is a non-deterministic machine $NT$ such that $x \in \cal L$ if and only if there is an accepting computation path in $NT(x)$. Furthermore, the length of these paths is $O(|x|^{k})$;
> 2. Using some encoding of these computation paths as the **certificates**, we can construct a polynomial-time verifier for $\cal L$ which checks that each step of the path is valid;
> 3. Conversely, if $\cal L$ has a polynomial-time verifier $V$, then we can construct a non-deterministic machine that first guesses the value of the certificate and then simulates $V$ with that certificate;
> 4. Since the length of the certificate is polynomial in the length of the input, this machine is a non-deterministic polynomial-time decision procedure for $L$.





## Examples of Problems in $NP$
>[!question] Composite Number
>**Instance**: A positive integer $k$;
>**Question**: Are there integers $u,v> 1$ such that $uv=k$?

>[!question] Subset Sum
>**Instance**: A collection of positive integers $S=\{ a_{1},\dots,a_{k} \}$ and a target integer $t$;
>**Question**: Is there a subset $T \subseteq S$ such that $\sum_{i \in T}a_{i}=t$?

