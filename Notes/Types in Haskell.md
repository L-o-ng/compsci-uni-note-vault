#notes 
## Simple Types
+ `Int` - bounded precision integers;
+ `Integer` - Arbitrary precision integers;
+ `Float` - Single precision floating point numbers;
+ `Double` - Double precision floats;
+ `Char` - unicode characters;
+ `Bool` - Booleans with values `True` and `false`, conjunction `&&`, disjunction `||`, and negation `not`, where `otherwise == True`;
+ `Lists` - any sequence of elements of the same type;
+ `Tuples` - Anything in brackets, with support for currying and uncurrying.
## Defining New Types
We can abstract with new types. **Haskell** has 3 ways to do this:
+ `type`
+ `data`
+ `newtype`
### `type`
This keyword allows us to rename an existing type:
```
type String = [Char]

vowels :: String -> [Char]
vowels str = [s | s <- str, s `elem` ['a', 'e', 'i', 'o', 'u']]
```
We can use these to make semantics clearer:
```
type Pos = (Int, Int)
origin :: Pos
origin = (0, 0)
left :: Pos -> Pos
left (i, j) = (i - 1, j)
```
We can also parameterise types:
```
type Pair a = (a, a)

mult :: Pair Int -> Int
mult (m, n) = m * n

dup :: a -> Pair a
dup x = (x, x)
```
However, we cannot:
+ Use **class constraints** in the definition;
+ Have recursive types.
### `data`
This keyword allows us to introduce a new type by listing allowed values:
```
data Bool = False | True
```
The values are called **constructors** for the type.
The name and values must begin with an uppercase letter.
We can use these types exactly like built-in types once defined:
```
data IsTrue = Yes | No | Perhaps
negate :: IsTrue -> IsTrue
negate Yes = No
negate No = Yes
negate Perhaps = Perhaps
```
The constructors can take arbitrarily many parameters:
```
data Shape = Circle Float | Rectangle Float Float
area :: Shape -> Float
area (Circle r) = pi * r^2
area (Rectangle x y) = x * y
```
We can make out data declarations **polymorphic** with appropriate type variables:
```
data Option a = None | Some a
safehead :: [a] -> Option a
safehead [] = None
safehead (x:_) = Some x
```
Data can also be recursive:
```
data Nat = Zero | Succ Nat
```
This is an infinite data type containing:
+ `Zero`;
+ `Succ Zero`;
+ `Succ (Succ Zero)`
+ ...

We can use this to implement a representation of the natural numbers, for example.
### `newtype`
This is similar to the `data` keyword, but only allows for a single constructor. This allows the compiler to erase away the constructor, which can lead to optimisations.

