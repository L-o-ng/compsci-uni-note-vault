#notes 

A **Buffer Overflow Attack** is the most commonly exploited vulnerability by worms. It allows arbitrary code execution via bad memory manipulation.
## Memory
![[Buffer Overflow Memory.png]]
We have a virtual address space of $V=2^{n}$. We assume a Linux 32-bit process memory layout, where the stack grows towards lower memory addresses. Text and data segments are loaded from an executable file.
Our focus is the *stack*.
## Stack and Stack frame
A [[Stacks|Stack]] is a LIFO queue with relevant operations `PUSH` and `POP`. The stack pointer points to the last/lowest stack address. Data written to local variables grows towards higher memory addresses. A **stack frame** is the portion of a stack allocated to a single procedure call.
![[Buffer Overflow Stack Frame.png]]
A stack frame contains function args, local variables, and information to restore the caller's state. The frame pointer and stack pointer delimit the frame. Information is access relative to the frame pointer as the stack pointer can move during execution.
## Vulnerability
There are two main underlying causes of a buffer overflow vulnerability:
+ User data and control flow information share the stack;
+ Untrusted input gets copied into a buffer without bounds checking.
	+ This usually affects fixed-size buffers.

Languages like Java and C# check for these conditions at runtime. However, in C, this is a common programming error, caused by the use of unsafe functions like `strcpy()`, `gets()`, `sprintf()`.
Incorrect use of safe functions like `strncpy()` and `snprintf()` can also lead to a buffer overflow.

Consider source code:
```
void main(int argc, char *argv[]) {
	char buffer[12];
	strcpy(buffer, argv[1]);
}
```
When executed with:
1. 
```
./vuln `perl -e 'print "A" x 12'` 
```
the process exits normally.
2. 
```
./vuln `perl -e 'print "A" x 20'` 
```
a buffer overflow causes a segfault.
3. 
```
./vuln `perl -e 'print "A" x 16'` 
```
a buffer overflow causes a segfault.
