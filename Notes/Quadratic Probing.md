#definition 

Quadratic probing iteratively tries the buckets:
`A[(i+f(j)) MOD N]`, for `j=0,1,2,...` and `f(j)=j^2` until finding an empty bucket.

Quadratic probing avoids clustering patterns that occur with linear probing. However, it creates its own kind of clustering, called **secondary clustering**.
The quadratic probing strategy may not find an empty bucket in `A` even if one exists.

