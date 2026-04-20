#notes 

For a language $\cal L$ over alphabet $\Sigma$, let $\bar{\cal L}$ denote the complement $\Sigma^{*}\setminus \cal L$ of $\cal L$; that is, $x \in \bar{\cal L}\iff x \not\in \cal L$.
>[!definition] 
>The class of languages $\cal L$ such that $\bar{\cal L}$ has a polynomial-time verifier is called $coNP$.

In other words, a problem belongs to $coNP$ if the **no**-instances have succinct certificates.
## $coNP$-Completeness
>[!definition]
>A language $\mathcal{L} \in coNP$ is said to be $coNP$-complete if, for any language $\mathcal{L}'\in coNP$, we have $\cal L'\leq L$.

>[!theorem]
>A language $\cal L$ is $NP$-complete if and only if $\bar{\cal L}$ is $coNP$-complete.

>[!theorem] Corollary
>The problems `No Hamiltonian Cycle` and `Tautology` are $coNP$-complete.

>[!theorem]
>If some $coNP$-complete problem belongs to $NP$, then $NP=coNP$

>[!theorem] Corollary
>If $NP \neq coNP$ then `Tautology` and `No Hamiltonian Cycle` do not belong to $NP$.
### Remarks
It holds that $P=coP$. Clearly, if $P=NP$, then $NP=coNP$. However, it is still possible that $NP=coNP$ and $P \neq NP$.
It is widely believed that $P\neq NP$ and $NP\neq coNP$.

We also have $P \subseteq NP\cap coNP$. It is not known, but widely believed, that this inclusion is strict.
![[NP and coNP.png]]
## Examples
### Example 1
>[!question] No Hamiltonian Cycle
>**Instance**: A graph $G$;
>**Question**: Is it true that $G$ has **no** Hamiltonian cycle?

A Hamiltonian cycle (if it exists) can be verified efficiently.
Therefore, a Hamiltonian cycle is a **certificate** for *no*-instances.
### Example 2
>[!question] Tautology
>**Instance**: A [[Conjunctive Normal Form|DNF]]-formula $f$;
>**Question**: Is it true that $f$ is a **tautology**: that is, is $f$ satisfied by **all** assignments?

A truth assignment that makes $f$ **false** can be verified efficiently, and so is a **certificate** for *no*-instances.
#### Is `Tautology` in $NP$?
An equivalent formulation is:
>[!question] Variant Tautology
>**Instance**: A DNF-formula $f$;
>**Question**: Is it true that there does **not** exist a formula that *un*-satisfies $f$?

>[!question] Complement Variant Tautology
>**Instance**: A DNF-formula $f$;
>**Question**: Does there *exist* a truth assignment that *un*-satisfies $f$?

This is equivalent to `Satisfiability`!
