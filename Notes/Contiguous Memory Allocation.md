#notes 

If the system is reading memory, it is faster to read **contiguous** memory, as it can be read in sequence.
To achieve this, an effective memory allocation strategy is required, based on **holes** - blocks of available memory:
+ Holes of various size are scattered throughout memory;
+ When a process arrives, it is allocated memory from a hole large enough to accommodate it.
The OS also needs to maintain information about each partition and its allocated/free holes.
![[Contiguous Allocation 1.png]]
## Memory Hole Allocation
There are many strategies to satisfy a request of size $n$ from a list of free holes:
+ **First-Fit** - Allocate the first hole that is big enough;
+ **Best-Fit** - Allocate the smallest hole that is big enough;
	+ This means the whole list must be searched, unless it is ordered by size.
+ **Worst-Fit** - Allocate the largest hole;
	+ The whole list still needs to be searched.
First-fit and best-fit are usually better than worst fit in terms of *speed* (first-fit) and *storage* (best-fit) utilisation.