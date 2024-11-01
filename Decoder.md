#definition 

A **decoder** has `N` inputs and `2^N` outputs. It asserts *exactly one* of its outputs depending on the binary number represented by the `N` input bits.

The outputs are called "one-hot", because exactly one is "hot", or high, at a given time.
## A 1-bit Decoder 
![[1 bit decoder.png]]
## A 2-bit Decoder 
![[2 bit decoder.png]]
## A 3-bit, or "3-8" Decoder 
![[3-8 decoder.png]]
As is obvious, each bit requires many more multi-input AND gates, and a lot of circuitry.
Deeper circuits with fewer transistors and so less silicone *can* be created, but at the cost of a **slower response time**.

