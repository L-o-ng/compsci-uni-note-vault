#notes 

So far, all shared tokens between $S_{1},S_{2}$ count **equally** towards similarity, including common terms like `the`, `a`, and assorted punctuation.
Intuitively, sharing `persuasion` should be a stronger indicator of similarity that sharing `,`.

We have some easy approaches:
1. Remove Punctuation;
2. Remove [[Stop Words]];

Both of these are language-specific.
This gives rise to **IDF** - *Inverse Document Frequency*. This is a heuristic technique for large corpora. Terms appearing in *many or all* documents provide **less** information:
+ Co-occurrence of $t$ in $S_{1},S_{2}$ is more significant for rare $t$ than common $t$;
+ $DF_{t}$ represents the number of documents containing $t$;
+ $IDF_{t}=\log\left( \frac{N}{DF_{t}} \right)$ where $N$ is the number of documents.

In vectors, we replace $TF$ with $TF\cdot IDF_{t}$ to obtain a $\text{TF-IDF}$ vector.
![[Inverse Document Frequency.png]]
