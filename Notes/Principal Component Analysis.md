#notes 

Principal component analysis, or PCA, allows us to find the most important eigenvectors of a data set.
Notice that we say *data set*. In [[Eigenvectors and Eigenvalues]], [[Characteristic Equations]] we could only find eigenvectors for square matrices. Finding one for a data set involves the nonexaminable **covariance matrix**.
## Covariance Matrices
+ **Input** - data set in $n$ dimensions, and possible $m$ data points; $m \neq n$.
+ **Output** - $n\times n$ matrix, with element $e_{ij}$ showing how dimension $i$ varies with dimension $j$
+ This captures the **variance** of one dimension of the data with another.
![[Principal Component Analysis Example.png]]
## Finding Principal Components
1) Assume we have a covariance matrix $COV_{n\times n}$.
2) Find the $n$ eigenvalues and corresponding eigenvectors of $COV_{n\times n}$.
3) Order the eigenvalues in decreasing order. Consider how much each contributes to the total explained variance.
4) If capturing 80% of the explained variance is good enough, then just using the first 2 is enough.
5) Let $P_{n\times k}$ be a matrix with $k$ chosen eigenvectors as column vectors.
6) Now we can represent the original data in $n$ dimensions using only $k$ dimension, while losing minimal data.
## PCA at a Higher Level
1) Preprocessing - Put the data set - $m\times n$ into good form, and call it $A_{m\times n}$.
2) For $A_{m\times n}$, find $COV_{n\times n}$.
3) Find the $n$ eigenvalues and eigenvector of $COVn\times n$ and choose $k$ principal components.
4) Let $P_{n\times k}$ be a matrix with $k$ eigenvectors as column vectors.
5) Put data into a new form: $A_{m\times n}P_{n\times k}=B_{m\times k}$.
6) You can retrieve the old data perhaps lossily: $$A'_{m\times n}=B_{m\times k}P_{k\times n}^{T}$$
