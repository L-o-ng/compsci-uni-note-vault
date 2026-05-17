#notes 

[[Functors]] ([[Applicatives]], [[Monads]], etc) are used to encapsulate an object of a certain type. But how would you encapsulate a whole list of objects?
## `sequenceA`
**Haskell** uses `sequenceA`:
```
instance Traversable [] where
	sequenceA [] = pure []
	sequenceA (u:us) = (:) <$> u <*> sequenceA us 
	
sequenceA :: Applicative f => t (f a) -> f (t a)
```
So, `sequenceA` evaluates each action in the structure from left to right and collects the results:
```
sequenceA [Just 1, Just 2, Just 3]
> Just [1, 2, 3]
sequenceA [Right 1, Right 2, Right 3]
> Right [1, 2, 3]
```
## `traverse`
What if we first wanted to apply a function to all the elements of the list? For that, Haskell uses the `traverse` function:
```
traverse :: Applicative f => (a -> f b) -> t a -> f (t b)
```
The `traverse` function maps each element of a structure to an action, evaluates these actions from left-to-right, and collects the results.
## Relationship
We have:
```
traverse :: Applicative f => (a -> f b) -> t a -> f (t b)
traverse f = sequenceA . fmap f
```
and:
```
sequenceA :: Applicative f => t (f a) -> f (t a)
sequenceA = traverse id
```

The class `Traversable` consists of all types that support `traverse` or equivalently, `sequenceA`.