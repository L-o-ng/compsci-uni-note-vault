#notes 
## Addition
![[Binary addition.png]]

### Rules
+ 0+0=0
+ 0+1=1
+ 1+0=1
+ 1+1=0 and carry
+ Carry + 0 + 0 = 1
+ Carry + 0 + 1 = 0 and carry
+ Carry + 1 + 0 = 0 and carry
+ Carry + 1 + 1 = 1 and carry
+ NB: This is a waste of time$!!$.

## Multiplication
![[Binary Multiplication.png]]
### Method
Write out the first binary operand for each digit in the second, left shifting once for each digit. Write a string of 0s if the second operand is a 0. Add the resulting binary strings.
### Overflow errors
Binary arithmetic operations on large numbers can cause overflow errors. Suppose the accumulator can store 8 bits. If the result of the arithmetic operation would take up $>8$ bits, an error can be triggered, or a **flag** is triggered in the **status register**.