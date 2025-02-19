#notes 
## Dual Mode
A **Dual-Mode** operation allows the OS to protect itself and other system components.
The OS can run in User Mode and [[OS Kernel|Kernel]] Mode (sometimes called supervisor, system, or privileged mode).
The **mode bit** is provided by the hardware:
+ It provides the ability to distinguish which mode the system is running in.
+ Some instructions are designated as privileged, only executable in kernel mode.
+ System calls can change the mode to kernel for the duration of the call.
## Privileged Instructions
Some instructions must only be available to the OS. This is the **privileged instruction set**.
Privileged instructions include functions like:
+ Managing interrupts;
+ Performing IO;
+ Halting a process.
## Mode Transition
Switching mode occurs when:
+ A user process calls on the OS to execute a function needing a privileged instruction;
+ An interrupt occurs;
+ An error condition occurs in a user process;
+ An attempt is made to execute a privileged instruction while in user mode.
