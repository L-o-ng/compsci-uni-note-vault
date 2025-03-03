#notes 

See [[Linked Lists]] for an alternative way to store sequential data.
## Arrays
A sequence of **elements** $a_{1}, a_{2}, \dots, a_{n}$ is called an *array* and usually denoted by something like `A[1], A[2],..., A[n]` or `A[1...n]`
+ The data is in consecutive memory cells, but we usually do not care where exactly - **contiguous**.
+ All array elements are of the same type. In [[Pseudo-code]] we can declare an array of integers like `integer A[1...n]` - **homogeneous**.
The fact that arrays are **contiguous** and **homogeneous** makes it easy to do certain operations and harder to do others.
### Example
![[Array example.png]]
Note that this array is 1-based, but pseudo-code and normal code may use 0- or 1-based indexing.
### Indexing
How do we find the $i$th element? 
Let $k$ be the address of the first element, and $w$ the width of the address of each element.
To find that element, `A[i]=k+[(i-1)*w]`.
This is a cheap mathematical operation so runtime cost is negligible and does not increase with large indexes.
### Deleting Elements
If you were to simply remove the data at an index, the next time that array index is accessed, it will be null. In order to conserve the contiguous factor of the array, you would have to move each proceeding element left to compensate and fill the empty index up. This is O(n), where n is the size of the array.