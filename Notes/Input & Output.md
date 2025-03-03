#notes 

I/O devices supply the computer and user with information.
## Examples
+ Hard disk
+ CD
+ Graphics card 
+ Sound card 
+ Ethernet 
+ Modem
## Bottleneck
Communication is done via [[Memory#Buses|data buses]], so is cheap and versatile but *very* slow in comparison with the CPU - a **bottleneck**.
The [[Operating Systems|OS]] helps alleviate this.
## Interrupts
The CPU instructs the device and continues with other tasks.
When the device is finished, it raises an **interrupt** on a bus line.
An **interrupt** **handler** from the OS deals with the device interrupt.