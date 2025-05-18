#notes 

Suppose we want to store data consisting of key-value pairs.
We want to be able to **look up** the values using the keys, and:
+ The total amount of data might be very large.
+ Our algorithm might perform many lookups.
## Definition
A **hash table** consists of a bucket array and a hash function.
A **bucket array** for a hash table is an array `A` of size `N`, where each cell of `A` is thought of as a *bucket*, storing a collection of key-value pairs.
The size `N` of the array is called the **capacity** of the hash table.
## Hash Functions
A **hash function** `h` is a function mapping each *key* `k` to an integer in the range `[0,N-1]` where `N` is the size of the hash table.

The main idea is to use `h(k)` as an index into `A`. That is, we store `(k,v)` at `A[h(k)]`.
### Collisions
If there are 2 keys with the same hash value `h(k)`, then 2 different entries will be mapped into the same bucket in `A`. This is called a **collision**.
#### Dealing with Collisions
Regardless of how we deal with collisions, a large number of them reduces the performance of the hash table. A good hash function therefore reduces their quantity as much as possible.
##### Methods
+ [[Separate Chaining]]
+ [[Linear Probing]]
+ [[Quadratic Probing]]
+ [[Double Hashing]]
Bullets 2, 3, and 4 are known as **open addressing schemes** as they store at most 1 entry to each bucket.
##### Efficiency
Open addressing schemes are more memory efficient compared to separate chaining.
Regarding running times, in experimental and theoretical analyses, separate chaining is either *competitive* or *faster* than the other methods.
==So, if memory space is not a major issue, the method of choice is separate chaining.==
### How a Hash Function Works
A hash function is usually the composition of 2 functions:
+ Hash code: keys to integers.
+ Compression function: integers to `[0,N-1]`
The hash code is applied followed by the compression function.
The goal is to *disperse* the keys in an apparently random way, ideally **uniformly**.

More practically:
+ The hash function should be **efficiently computable**.
+ Each table position should be **equally likely** for each key.
#### Example Compression Functions
+ Division: take integer `MOD` `N`.
+ Multiply, Add, Divide (MAD): `y` maps to `ay+b MOD N` where `a` and `b` are non-negative integers.
## Deletions
**Deletions** must not hinder future searches. If a bucket is simply left empty this will hinder future probes.
The bucket should not be left unusable, however.
To solve this problem, we use **tombstones**, which are markers left in a bucket after a deletion.
### How Tombstones Work
If we encounter a *tombstone* along a probe, we know to continue.
If a *tombstone* is encountered during insertion, then we should continue probing to avoid creating **duplicates**, but the new record can be placed in the tomb-stoned bucket.
### Efficiency of Tombstones
The use of tombstones lengthens the average probe sequence.
There are two possible remedies:
+ **Local reorganisation** - After deleting a key, continue to follow the probe sequence of that key and move records into the vacated bucket. This will not work for all collision resolution policies, however.
+ Periodically rehash the table by reinserting all records into a new hash table. If there exists a record of which keys are accessed most, these can be placed where they will be found faster and more easily.



