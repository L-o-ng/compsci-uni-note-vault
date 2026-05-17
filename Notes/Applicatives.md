#notes 

[[Functors]] abstract the idea of mapping a function over each element of a structure.
We now generalise to allow functions with *any* number of arguments to be mapped. More precisely, we would like to implement a hierarchy of `fmap` functions as such:
```
fmap0 :: a -> f a
fmap1 :: (a -> b) -> f a -> f b
fmap2 :: (a -> b -> c) -> f a -> f b -> f c
fmap3 :: (a -> b -> c -> d) -> f a -> f b -> f c -> f d
```
Using currying, we can construct `fmap` for functions of an arbitrary number of arguments in terms of two basic functions of the following types:
```
pure :: a -> f a
(<*>) :: f (a -> b) -> f a -> f b
```
`pure` converts a value of type `a` into a structure of type `f a`.
`<*>` is a generalised form of function application, where all inputs and the output are all contained in `f` structures. A typical use would look like:
```
pure g <*> x1 <*> x2 <*> ... <*> xn
```
and such expressions are said to be in *applicative* style.
## Applicative Functors
The class of [[Functors]] that support `pure` and `<*>` are called **applicatives**:
```
class Functor f => Applicative f where
	pure :: a -> f a
	<*> :: f (a -> b) -> f a -> f b
```
They also need to satisfy the applicative laws:
```
pure id <*> x = x
pure (g x) = pure g <*> pure x
x <*> pure y = pure (\g -> g y) <*> x
x <*> (y <*> z) = (pure (.) <*> x <*> y) <*> z
```
These laws guarantee that any well-typed expression using `pure` and `<*>` can be written in applicative style.

Applicatives allow us to write programs in a familiar style - functions applied with arguments. The main difference is that the arguments are no longer plain values, but may have effects, such as the possibility of failure, many ways to succeed, or performing IO actions.

---
## Examples
### `Maybe`
It is straightforward to make the functor type `Maybe` into an applicative:
```
instance Applicative Maybe where
	pure = Just
	Nothing <*> = Nothing
	(Just g) <*> mx = fmap g mx
```
In this form, the applicative style supports a form of exceptional programming, where we can apply pure functions to arguments that may fail without needing to manage failure propagation ourselves.
### Lists
The list type is an applicative, with the following instance declaration in the standard prelude:
```
instance Applicative [] where
	pure x = [x]
	gs <*> xs = [g x | g <- gs, x <- xs]
```
### IO
The `IO` type can be made into an applicative as follows:
```
instance Applicative IO where
	pure = return
	mg <*> mx = do {g <- mg; x <- mx; return (g x)}
```
For instance, a function that reads a given number of characters from the keyboard can be defined as follows:
```
getChars :: Int -> IO String
getChars 0 = return []
getChars n = pure (:) <*> getChar <*> getChars (n-1)
```

