#notes 

Consider the following setup:
+ You are to sort $n$ numbers, each taking a value in $\{ 0,\dots,k-1 \}$ - the range of possible values is $k$.
If you used one of the [[Sorting Algorithms]] here, we have an $O(n\log n)$ solution. They do not care too much about the range of the input items.
## Idea
Suppose the values are in the range `0..k-1`:
1) Start with `k` empty buckets numbered `0` to `k-1`.
2) Scan the list.
3) Place element `s[i]` in bucket `s[i]`, and output the buckets in order.
We need an array of buckets, and the values in the input list will be the indexes to the buckets. No comparisons are necessary.
## Algorithm
```
fn BucketSort
in list of integers S between 0 and k-1
op S sorted
	for j <- 0 to k - 1 do
		b[j] <- 0
	endfor
	for i <- 0 to n - 1 do
		b[S[i]] <- b[S[i]] + 1
	endfor
	i <- 0
	for j <- 0 to k - 1 do
		for r <- 1 to b[j] do
			S[i] <- j
			i <- i + 1
		endfor
	endfor
```
## Values and Entries
If we store values, each bucket is just a counter that we increment whenever a value matching the bucket's number is encountered.
If we sort according to keys, each bucket is a queue:
+ Entries are enqueued into a matching bucket.
+ Entries will be dequeued back into the array after the scan.
## Analysis
+ Bucket initialisation - $O(k)$
+ Array to Bucket - $O(n)$
+ Bucket to Array - $O(n)$
Even though Bucket to Array is a nested loop, all we do is dequeue from each bucket until they are all empty, giving $n$ dequeue operations in total.
This gives a time complexity of $O(n+k)$ for the worst case.
+ Since $k$ is likely to be small compared to $n$, bucket sort is $O(n)$ in the average case.

This beats the theoretical general lower bound. This is because the theorem actually doesn't apply. There are no comparisons. However, this is still somewhat misleading:
+ If $k$ becomes large, the runtime is dominated by it.
	+ If $k=\omega (n\log n)$ then it is worse than [[Merge Sort]].
	+ If $k=\omega(n^2)$ then it is worse than any of our [[Sorting Algorithms]].
## Arbitrary Items
What about sorting non-numbers?

We can obtain a numerical key: perhaps it comes with the object - or we can obtain one via hashing - and use that for sorting.
However, counters no longer work for dumping back out of the buckets:
	Each bucket now becomes a queue, and whenever an item's key is `k`, then it will first be sorted into the `k`-th queue and then each queue can be dequeued until empty.
## Actual Worst-Case
If we sort 1000 integers with a maximum value of 999999, we will need 1 million buckets.
Here, the time complexity is actually $O(k)$, since $k\gg n$.