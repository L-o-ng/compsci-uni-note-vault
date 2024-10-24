#notes #incomplete 

A **queue** is a collection of objects that are inserted and removed according to the **FIFO**, or **First In First Out** principle.
Element access and deletion is restricted to the first element in the sequence, which is called the *front* of the queue.
Element insertion is restricted to the end of the sequence, or *rear* of the queue.
## Methods
A queue has the following methods:
```
enqueue(e) // inserts element e at the rear of the queue.
dequeue // remove and return the element at the queue front. Panics if empty.
```
And possibly also:
```
size // returns the number of elements in the queue.
isEmpty // returns a boolean indicating if the queue is empty.
front // returns the front queue element without removing it. Panics if empty.
```
## Implementation Using Arrays
We could put the front of the queue at index 0 and let the queue grow from there. However, this is inefficient, as it requires moving all the elements forward every `dequeue` operation.

To fix this inefficiency, 2 pointers `f` and `r` are used:
+ `f` is the index to the front of the queue, or `f = r` if the queue is empty.
+ `r` is the index to the next available cell in the queue, or the cell after the rear of the queue, if it is not empty.
Initially, `f=r=0`, indicating that the queue is empty.
After each `enqueue` operation, `r` is incremented.
After each `dequeue` operation, `f` is incremented.
We can use modulo arithmetic on `f` and `r` to avoid them growing forever.
### Methods on Array Implemented Queues
```
Input: none
Output: size of queue
	return (r - f) mod N
```

```
Input: none
Output: bool indicating if the queue is empty
	return r = f
```

```
Input: none
Output: front item of queue
	if isEmpty then
		throw an EmptyQueueException
	endif
	return Q[f]
```

```
Input: element e
Output: Queue Q with element e inserted
	if size = N - 1 then
		throw a FullQueueException
	endif
	Q[r] <- e
	r <- (r + 1) mod N
```

```
Input: none
Output: front element of queue Q
	if isEmpty then
		throw an EmptyQueueException
	endif
	temp <- Q[f]
	Q[f] <- null
	f <- (f + 1) mod N
	return temp 
```

