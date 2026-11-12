#notes 

An **N-gram** is a sequence of $N$ tokens for some $N \in \mathbb{Z}$. They capture aspects of *observed word usage* in a **corpus** (large collection of text). This is useful for language modelling and text reuse identification.
For small $N$, this is trivial to compute.

We can measure the **N-gram Frequency** - how often a given N-gram occurs; or, the proportion of the text.

For small $N$, it is generally not possible to reconstruct the corpus. This is important for copyright: the corpus cannot be distributed, but the N-grams *can*.

![[N-Grams.png]]
## Example: Google ([source](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3279742/))
Google scanned 5,195,769 books from university libraries and calculated all N-grams for $N \in \{ 1,2,3,4,5 \}$ and their frequencies in each book. They used metadata as facets and calculated the proportion of all writing at year $T$ consisting of each N-gram.