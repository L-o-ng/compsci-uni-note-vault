#notes 

Process scheduling maximises CPU usage by quickly switching processes onto the CPU for time-sharing.
A **process scheduler** selects between available processes for next execution on the CPU, and maintains scheduling **queues**:
+ **Job Queue**: Set of all processes in the system;
+ **Ready Queue**: Set of all processes residing in main memory, ready to execute;
+ **Device Queue**: Set of processes waiting for an IO device.
Processes migrate between queues.
## Kernel Management
The kernel consists of:
+ The **First-Level Interrupt Handler** (FLIH), which manages interrupts;
+ The **Dispatcher** or **Scheduler**, which switches processes onto the CPU;
+ **Intra-OS Communcations**, done via the system bus.
### FLIH
The FLIH determines the source of the interrupt, and initiates servicing of the interrupt.
### Dispatcher
The dispatcher assigns resources to processes, and is later initiated when:
+ A current process cannot continue;
+ The CPU can be used better elsewhere, for example:
	+ After an interrupt changes a process state;
	+ After a syscall which halts a process;
	+ After an error causes a process to suspend.
## Threads
Threads are a **unit of execution**.
They can be *traced*, listing the sequence of instructions that execute.
They belong to a process and execute within it.
Threads can be user-owned or kernel-owned.
### Multithreading
A multithread-OS supports multiple threads within a single process, whereas a single-threading OS does not recognise the separate concept of a thread, and so supports a single user process and thread.
### Model
Local variables are **per-thread** and are allocated on the system stack.
Global variables are shared between all threads and are allocated in the data section of the thread. Note that this can cause concurrency errors.
Dynamically allocated memory can be local or global, and so is *program-defined*.
### Advantages
+ **Timing** - less time to create, terminate, and switch a thread compared to a process;
+ **Responsiveness** - threads may allow continued execution if a part of the process is blocked. This can help create a responsive UI, for example;
+ **Resource Sharing** - Threads share the resources of processes, which is easier to manage than shared memory or message passing;
+ **Economy** - thread creation and switching both have lower overheads than processes;
+ **Scalability** - Processes using threads can take advantage of multiprocessor achitectures.
## Thread Creation
A **thread library** provides a programmer with an API for creating and managing threads. There are 2 ways this can be implemented:
1) Library entirely in user-space;
2) Kernel-level library supported by the OS.
![[Thread creation via library.png]]
