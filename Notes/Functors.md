#notes 

Recall [[Classes in Haskell|Typeclasses]]. These describe interfaces that can be used to constrain the polymorphism of functions to those types satisfying the interface. *Haskell* comes with *many* such type classes encapsulating common patterns.
## Functors, Logically
Consider:
```
data [] a = [] | a:[a]
map :: (a -> b) -> [a] -> [b]

data BinaryTree a = Leaf a | Node a (BinaryTree a) (BinaryTree a)
bmap :: (a -> b) -> BinaryTree a -> BinaryTree b
```
The only difference is the type name of the container. This suggests that we should make a **container** type class to capture this pattern. Haskell calls this class `Functor`:
```
class Functor c where:
	fmap :: (a -> b) -> c a -> c b
```
If a type implements the `Functor` interface, then it defines a data structure that we can transform the elements of in a systematic way.
This works on any mappable structure, but it must obey *functor laws*:
+ `fmap id c == c`: mapping the identity function should not touch the structure;
+ `fmap f (fmap g c) == fmap (f . g) c`: Mapping over a container should distribute over function composition.
## Instancing
We use an *instance* declaration to attach an `fmap` implementation to a container type:
```
data List a = Nil | Cons a (List a)
	deriving (Eq, Show)
	
instance Functor List where 
	fmap _ Nil = Nil
	fmap f (Cons a tail) = Cons (f a) (fmap f tail)
	
data BinaryTree a = Leaf a | Node a (BinaryTree a) (BinaryTree a)
	deriving (Eq, Show)
	
instance Functor BinaryTree where
	fmap f (Leaf a) = Leaf (f a)
	fmap f (Node a l r) = Node (f a) (fmap f l) (fmap f r)
```
