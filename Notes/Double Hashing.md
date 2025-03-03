#definition 

In this approach, we choose a secondary hash function `h'`, and if `h` maps some key `k` to a bucket `A[i]` with `i=h(k)`, that is already occupied, then we iteratively try the buckets:
`A[(i+f(j)) MOD N]`, for `j=0,1,2,...` and `f(j)=jh'(k)`

A common choice of secondary hash function is:
`h'(k)=q-(k MOD q)` for some prime number `q < N`

The secondary hash function should never evaluate to 0.

