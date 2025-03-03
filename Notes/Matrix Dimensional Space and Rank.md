#definition 
## Column Space and Rank 
All vectors can be written as [[Linear Combinations]] of [[Linear Maps and Basis Vectors|Basis Vectors]].
Under a [[Linear Maps|Linear Map]] $f:X \to Y,f(a\mathbf{x}+b\mathbf{y})=af(\mathbf{x})+bf(\mathbf{y})$, where $f(X)$ is the span of the columns, called the **column space**.
The **column rank** is defined as the *dimension* of the column space, or equally, the number of linearly independent columns.
See [[Least Squares Solutions for Inconsistent Linear Systems#Column Space]] for more.
## Row Space and Rank 
Row space and rank are defined similarly.
*Row space* is defined as the span of all the row vectors. *Row rank* is the dimension of the row space. Alternatively, *rank* can be defined as the number of linearly independent rows.
## Row Rank = Column Rank 
The *rank* of a **matrix** is defined as the row/column rank.
### Proof
Each step of Gaussian Elimination leaves the column and row rank unchanged. Reduced row echelon form is reached. In a few more operations, we can reach the identity matrix surrounded by 0s. In this form, row rank=column rank.
### Implications
The *dimension* of $f(x)$ is the *rank* of the **matrix** for $f$.
We can calculate the rank by [[Gaussian Elimination]], by counting non-zero rows in **row echelon form** of the non-augmented matrix. The matrix is said to have *full-rank* if the rank is as high as is can be: $\operatorname{max}\{\text{no. of rows},\text{no. of columns} \}$
