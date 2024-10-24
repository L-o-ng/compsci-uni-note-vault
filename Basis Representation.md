#notes 

See [[Vector Spaces#Basis of a Vector Space|Basis of a Vector Space]] for more information.
In short, a set of vectors is a **basis** for the vector space if it **spans** the whole space and is **linearly** **independent**.

## Theorem
+ For a vector space $V$ the representation of any $\mathbf{v}\in V$ as a linear combination of a given basis $S=\{ \mathbf{s}_{1},\mathbf{s}_{2},\dots \mathbf{s}_{n} \}$ is unique.
### Proof
Suppose the theorem is false. Subtract the 2 representations. This violates one of the properties of a basis => a contradiction.
## Canonical (Standard) Basis
- This is kind of obvious for the _canonical basis_ for $\mathbb{R}^n\{ \mathbf{e}_{i}:i \le 1 \le n\}$
- Where $\mathbf{e}_i$ is the vector with a 1 in the ith position and 0 elsewhere
- In 3D sometimes referred to as $\mathbf{e}_x,\mathbf{e}_y,\mathbf{e}_z$ or $\mathbf{i},\mathbf{j},\mathbf{k}$
