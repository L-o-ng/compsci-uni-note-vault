#definition 

See also: [[Advanced Adders]]
## Full Adder
An **adder** is the combination of 2 [[Half-Adders|half-adders]].
They take `A`, `B`, and the **carry from the previous bit** as input.
Add `A` and `B` then the carried bit to their sum.
![[Full adder.png]]
### Speed
If the first level is pre-computed, there are only 2 gate-delays once the carry in arrives.