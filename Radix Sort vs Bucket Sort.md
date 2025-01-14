#notes 

See [[Radix Sort]], [[Bucket Sort]].

---

For a range $\{ 0,\dots,k-1 \}$,
+ Radix sort: $\mathbf{d}=\log k=O(n\log k)$
+ Bucket sort: $O(n+k)$
It is not immediately clear which is better in terms of time, but note that radix sort is clearly superior in terms of space.
## Examples
+ If $k=n$ then $O(n\log n)$ vs $O(n)$ so bucket sort is better.
+ If $k=n^2$ then $O(n\log n)$ vs $O(n^2)$ so radix sort is better.
+ If $k=2^n$ then $O(n^2)$ vs $O(2^n)$ so radix sort is better.
If $k$ is constant, both are linear: $\Theta(n)$

