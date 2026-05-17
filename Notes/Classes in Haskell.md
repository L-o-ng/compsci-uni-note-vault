#notes 

Consider the function:
```
length [True, False, True]
length [1, 2, 3]
```
These functions look like they should have different types, but actually they have the same type: `[a] -> Int`.
Here, `a` is called a **type variable**, and the process **parametric polymorphism**.
## Formally,
+ **Parametric Polymorphism** - writing a *single* implementation of a function that applies generically and identically to values of any type;
+ **Ad-Hoc Polymorphism** - writing *multiple* implementations, one for each supported type;
+ **Subtype Polymorphism** - We relate data types by some substituability. We can write a function for a supertype instance such that our subtypes can use it.
## Constraints
Take the `+` function for example:
```
(+) :: Num a => a -> a -> a
```
This states that: for any type `a` that is an instance of the class `Num` of numeric types, `(+)` has type `a -> a -> a`.
This is called a **Class Constraint**. An expression or type with one or more such constraints is called **overloaded**.
## Definitions
Note that the words are the same as in object-oriented programming, but their meaning is very different.
+ **Class**: A collection of *types* that support certain, specified, overloaded operations, called *methods*;
+ **Instance**: A concrete type that belongs to a *class* and provides implementations of the required methods.
## Type Class Examples
+ `Eq` - types with equality;
+ `Ord` - ordered types; a subclass of `Eq`;
+ `Read` - types one can read from the IO;
+ `Show` - types that can be displayed;
+ `Num` - numerical types that allow addition and multiplication.
## Defining Classes
Let us say we want to encapsulate some new property of types: `Foo`-ness.
We first define the interface the type should support:
```
class Foo a where
	isfoo :: a -> Bool 
```
Now we define how types implement this:
```
instance Foo Int where
	isfoo _ = False

instance Foo Char where
	isfoo c = c `elem` ['a'..'c']
```
Classes can provide a default implementation. For example, the `Eq` class requires both `(==)` and `(/=)`. Since `a==b <=> not (a /= b)` we can provide *default* implementations and only require an instance implements one:
```
class Eq a where
	(==) :: a -> a -> Bool 
	x == y = not (x /= y)
	(/=) :: a -> a -> Bool 
	x /= y = not (x == y)
	
instance Eq MyType where
	x == y = ...
```
