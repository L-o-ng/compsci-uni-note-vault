#notes 

A stack is a **collection** of objects that are inserted and removed according to the **last-in-first-out**, or **LIFO** principle..
Objects can be inserted at any time, but only the most recently inserted object, or the **last** one, can be removed at any time.

A stack supports the following methods: 
+ `push(e)` inserts element `e` at the top of the stack.
+ `pop` removes and returns the top element of the stack. Panics if the stack is empty.
And possibly also: 
+ `size` returns the number of elements in the stack.
+ `isEmpty` returns a boolean indicating if the stack is empty.
+ `top` returns the top element in the stack without removing it. Panics if the stack is empty.
## Example
Consider applying the following to an initially empty stack:
```
push(5)
push(3)
pop
push(7)
pop
top 
pop
pop
isEmpty
```
It follows: 
```
S()
S(5)
S(5,3)
S(5) -> 3
S(5,7)
S(5) -> 7
S(5) -> 5
S() -> 5
S() -> Error
S() -> true
```
## Implementation
### Using Arrays
In an array-based implementation, the stack consists of an $N$-element array $S$, and an integer variable $t$ that gives the top element of the stack.
The variable $t$ is initialised to $-1$ and this value is subsequently used to identify an empty stack.
#### Methods on Array-Based Stacks
```size
	return t + 1
```

```isEmpty
	return t < 0
```

```top
	if isEmpty then
		throw EmptyStackException
	endif
	return S[t]
```

```push
Input: element e
	if size = N then
		throw FullStackException
	endif
	t <- t + 1
	S[t] <- e
```

```pop
	if isEmpty then
		throw EmptyStackException
	endif
	e <- S[t]
	S[t] <- NULL
	t <- t - 1
	return e
```
#### Efficiency
The array-based implementation is time-efficient. The methods' time complexity does not depend on the size of the stack.

The fixed size $N$ is a serious limitation:
+ If the stack is near empty, we waste memory.
+ If the stack exceeds the size, we get an error.

Implementing a stack with a [[Linked Lists|linked list]] alleviates the fixed-size issue.

