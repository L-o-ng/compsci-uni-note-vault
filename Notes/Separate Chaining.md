#definition 

Each bucket `A[i]` stores a list holding the entries `(k,v)` such that `h(k)=i`.
## Performance
+ Cost is proportional to the length of the list.
+ Average length = `N/M`, where `N` is the amount of data, `M` the size of the array.
+ Worst case: all keys hash to the same list.

