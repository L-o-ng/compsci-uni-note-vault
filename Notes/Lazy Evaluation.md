#notes 

Haskell is a lazily evaluated language. This means that expressions are **not** evaluated until their result is needed by other computations.
## Evaluation
```
mult :: (Int, Int) -> Int
mult (x, y) = x * y

mult (1+2, 3+4)
```
We can represent a function call and arguments as a graph:
![[Lazy Evaluation.png]]
Here `1, 2, 3, 4` are terminal, or non-reducible, expressions.
`+` and `mult` are compound, or reducible, expressions.
In **innermost evaluation**, we evaluate bottom up, left-to-right.
![[Lazy Evaluation 2.png]]
In **outermost evaluation**, we evaluate top down, left-to-right.
![[Lazy Evaluation 3.png]]
We use outermost evaluation, since it terminates for infinite expressions.
## Argument Sharing
Consider:
```
square :: Int -> Int
square n = n * n
```
Straightforward call by name here will lead to inefficiency in evaluating n twice.
Haskell implements *sharing* to fix this.
We can think of this as turning the tree into a **graph**:
![[Lazy Evaluation 4.png]]
### Normal Form
>[!definition]
>The *expression graph* contains no redexes, is finite, and is acyclic.
>Data constructors are not reducible, so they may look like functions but have no reduction rule.

![[Lazy Evaluation 5.png]]
### Weak Head Normal Form
>[!definition]
>The *expression graph* is in normal form, or the topmost node is a constructor.
>This allows for *cycles*.

![[Lazy Evaluation 5-1.png]]
### Evaluation
1. Apply reduction rules (functions) **outermost** first;
2. Evaluate children left-to-right;
3. Stop when WHNF is reached;
4. Function definitions introduce new reduction rules.
## Strict Functions
We can tell a function to evaluate its arguments before being applied. This is done with the `$!` operator. This forces evaluation to WHNF.