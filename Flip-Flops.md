#notes #homework-needed 

## D Flip-Flops
In a [[Latches#D Latch|D-Latch]] the output can change **whenever** the clock is high.
A D flip-flop lets the output change only at the **specific moment** the clock goes high - its **rising edge**.
![[D Flip Flop.png]]
>In general, a D Flip-Flop copies $D$ to $Q$ on the **rising edge** of the clock and remembers its state at all other times.
### Full and Compact Symbols
![[Full and Compact D Flip Flop Symbols.png]]
A register is now a bank of flip flops driven by the same clock.
![[Register as D Flip Flops.png]]
## Enabled Flip Flops
An **enabled flip flop** incorporates an additional input (**enable**) to control whether the data is loaded into the register or not.
![[Enabled flip flop.png]]
$EN$ can control the input with a multiplexor, or can control the clock. This is called a **gated clock**. However, gated clocks can cause **timing errors and glitches**.
## Designing Flip-Flops
todo!