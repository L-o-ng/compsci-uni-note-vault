#notes 

## Fields
+ **S** - the sign bit
+ **e** - the exponent
+ **M** - the mantissa/significand
These represent the number $\pm M\cdot2^e$
## Structure
![[Floating point example.png]]
### The Sign Bit 
+ 0 indicates a positive number.
+ 1 indicates a negative number.
### The Exponent
The 8-bit exponent is valued between -126 and 127 but a [[Negative Binary Numbers#Bias|bias]] of 127 is added, giving a number between 1 and 254. The field can store values between 0 and 255, but 0 and 255 are given special meanings.
#### 0 & 255 Values in a Floating Point Number
+ $e$=0, $M$=0 represents 0.
+ $e$=0, $M\ne0$ represents **subnormal** numbers.
+ $e$=255, $M$=0 represents $\pm\infty$.
+ $e$=255, $M\ne{0}$ represents NaN.
### The Mantissa
The mantissa is some binary number like $1.10101010110$.
It is always normalised so the radix point is after the leading 1.
=> We do not need to store the leading 1, so only the 23 binary digits of the fractional part are displayed.
## Example of Floating Point to Decimal
![[Floating Point to Binary example.png]]
## Example of Decimal to Floating Point
![[Decimal to Floating Point example.png]]
## Rounding Errors
Consider the representation of $0.1_{10}$
$0.1_{10}=0.0001100110011001100110011\dots_{2}$
So the binary has $e=-4;M=1.10011001100110011001101$ - limited to 23 digits.
This is actually $0.100000001490116119384765625_{10}$ - a **rounding** **error**.
+ The minimum positive number is $2^{-126}$ - the **underflow level**.
+ The maximum positive number is $(2-2^{-23})\times{2}^{127}$ - the **overflow level**.
Floating point operations return the closest number to the answer.
