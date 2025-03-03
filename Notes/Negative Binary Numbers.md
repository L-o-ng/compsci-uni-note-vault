#notes
## Signed Magnitude Representation
The most significant bit is changed to represent the sign - **0** for positive, and **1** for negative. However, this makes arithmetic messy.
## Ones-complement
You can represent the negative of a number by flipping each bit. 
For example: 
```
0100 1001 = 73
1011 0110 = -73
```
The higher order bit still indicates the sign, like in signed magnitude representation.
This gives 2 representations for 0.
## Twos Complement
You can also flip each bit then add 1.
For example:
```
0100 1001 = 73
1011 0111 = -73
```
The higher order bit indicates the sign, but there is one representation for 0, and binary arithmetic is still possible.
## Bias
A **Bias** is used in floating point numbers. When using biased notation, we store a number `n` as an unsigned value `n+b`, where `b` is the bias: *typically*, ==half the unsigned range==.
So, for `k`-bit numbers, add a bias of $2^{k-1}-1$, then store in normal binary:
+ For 8-bit numbers, add 127.
A biased number allows storage between $-(2^{k-1}-1)\text{ and }2^{k-1}$.
