#notes 

> [!abstract] 
> How similar are two documents $S_{1},S_{2}$?
> We can compare their vectors:
> ![[Cosine Similarity.png]]

We have cosine similarity for vectors $A,B$:
$$
\LARGE
\text{similarity}=\cos \theta=\frac{\mathbf{A}\cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|}=\frac{\sum_{i=1}^{n} A_{i}B_{i}}{\sqrt{ \sum_{i=1}^{n} A_{i}^{2} }\sqrt{ \sum_{i=1}^{n} B^{2}_{i} }}
$$
So:
+ Cosine similarity is a $[0,1] \in \mathbb{R}$;
+ $=0$ when $A,B$ are [[Orthogonal and Orthonormal Sets of Vectors|orthogonal]];
	+ Intuitively for [[Term Document Vectors]], $S_{1},S_{2}$ have no terms in common at all.
+ $=1$ when $A,B$ are [[Linear Combinations|scalar multiples]] of each-other;
	+ Intuitively, all terms in $S_{1},S_{2}$ appear in identical proportions.
## Example
![[Cosine Similarity-1.png]]
Here are two versions of the "same" novel:
+ There are substantial differences:
	+ Different chapters;
	+ Different Lengths.
+ However:
	+ Some parts are very similar;
	+ Some parts are unique to each.

We compute a **similarity matrix**:
![[Cosine Similarity-2.png]]
Each cell is coloured by $\operatorname{sim}_{\operatorname{cosine}}(D_{i},D_{j})$. Solid white corresponds to 0, and solid red 1. The axis colours represent blue as Alice in Wonderland and green Alice's Adventures Underground.
Green lines indicate reorganisation of texts $A,B$.
![[Cosine Similarity-3.png]]
![[Cosine Similarity-4.png]]
The number one significant contribution to some dissimilar parts is **noise**: noise may correlate with variables we want to investigate, and with other related noise. This can be *much* worse than this small example. Consider if $A,B$ use different punctuation styles for the same punctuation.