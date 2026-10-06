#notes 

![[Pasted image 20261006102755.png]]
To predict branch outcomes on the fly, a **history table** is required.
> [!definition] Branch History Table
> A small memory indexed by the lower portion of the address of the branch instruction, along with a prediction bit.
## Two-Bit Predictor
![[Dynamic Branch Prediction-1.png]]
## Correlating Branch Prediction
If we have branches with dependencies, we need a predictor that can consider this.
![[Pasted image 20261006103455.png]]
This can be handled by the compiler.
