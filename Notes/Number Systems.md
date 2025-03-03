#notes

A number system is a writing **system** for expressing **quantities**.
Digits/other symbols are used in a **consistent** manner.
See [[Foundations#Assumed Knowledge|Decimal Number Collections]] for examples of the decimal number system.
## Binary
A CPU represents everything in the **binary** number system. 
### Representing Numbers in Binary
#### Sizes
Each digit in a binary number is called a bit: a **B**inary Dig**it**.
A bit is a 0 or a 1.
Groups of bits have different names depending on size:
+ **Nibble** - 4 bits
+ **Byte** - 8 bits
+ **Half Word** - 16 bits
+ **Word** - 32 bits
+ **Double Word** - 64 bits

#### Basic Representation
In decimal, each position for each digit represents $n^{10}$ of the digit in that place, where n is the index of that place.
This works similarly in binary: each place is instead raised to the power of $2$ instead.
**NB: A subscript after a number denotes its base.**
EG: ${1101}_{10}\text{ is base 10: decimal; }{1101}_{2}\text{ is base 2: binary.}$

![[Binary Example.png]]
#### Fractions
In decimal, the **Decimal/Radix Point** separates the integer and fractional parts of a number.
This works similarly in binary. Place value after the radix point is raised to negative powers of 2.

#### Decimal to Binary conversion
1) Repeatedly divide the number by 2, until you reach 0 or 2.
2) Write the remainders down **right to left** from the radix point.
For fractional parts: 
3) Repeatedly multiply the number by 2 until the fractional part is 1.
4) If the $n^{th}$ result is $\ge1$, place 1 in the  $n^{th}$ position to the right of the radix.
5) Otherwise, place a 0 in the $n^{th}$ position to the right of the radix.
## Hexadecimal
Hexadecimal, or **Hex**, is used to make binary strings more **human-readable**, as it is more compact, being base-16, and it is easy to convert between the 2 symbols. 
Hex has 16 distinct symbols - 0-9, and A-F. Similarly to binary, each place has a value $16^n$, where n is the place index and increases from 0 going left from the radix point.
### Translation from Binary to Hex
1) Starting from the radix point, separate the binary number into nibbles.
2) Translate each nibble into hex, maintaining the order of digits.
### Translation from Hex to Binary
1) Starting from the radix point, separate the hex number into digits.
2) Translate each digit into a nibble, maintaining the correct order.
