#notes 

See first: [[Information Retrieval]].

We can represent each word as a **token** by assigning it a unique **vocab index**. Therefore, we can work out token equality if their indices are identical.
Each document is therefore represented by a list of indices.

For example, consider $S_{1}$ from [[Information Retrieval]]:
+ $S_{1}$: "The Power of Example: Anthropological Explorations in Persuasion, Evocation."

We obtain:
$$
V=\begin{bmatrix}
\text{The} & 0 \\
\text{Power} & 1 \\
\text{of} & 2 \\
\text{Example} & 3 \\
\text{:} & 4 \\
\text{Anthropological} & 5 \\
\text{Explorations} & 6 \\
\text{in} & 7 \\
\text{Persuasion} & 8 \\
\text{,} & 9 \\
\text{Evocation} & 10 \\
\text{.} & 11
\end{bmatrix}
$$
and therefore:
$$
D_{1}=[0,1,2,3,4,5,6,7,8,9,10,11]
$$

Tokenisation is language-specific:
+ Many alphabetic languages such as English have words be punctuation delimited. This is not true for all languages:
	+ It is even non-trivial for alphabetic languages: do we want `New York` as two tokens, or just one?
+ [[Text Normalisation]] is language-specific: consider `A==a`:
	+ A simple approach for English is to lowercase all content.

