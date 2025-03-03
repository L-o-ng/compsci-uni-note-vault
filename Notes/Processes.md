#notes 

A **process** is a program in execution.
It is *not* a program on the disk.
There are multiple processes running at any one time, perhaps even from the same program.

A process is handled as **thread(s) + address space**:
+ **Thread** - A sequence of instructions in a sequential execution context.
+ **Address** **space** - Memory locations a process can read/write to.
## Communication Between Threads
Multiple threads/processes need to communicate and synchronise.
### Mutual Exclusion
 2 threads have access to the same counter `c`. There are 2 possibilities:
+ Thread 1 completes before thread 2 starts.
+ Thread 1 and 2 interleave.
Each thread needs to acquire the **critical section** of access to c.
## Process Life-cycle
Processes have *states*.
1) **New**: Process being created.
2) **Ready**: Not on CPU, but ready to run.
3) **Running**: Process executing on CPU.
4) **Blocked**: Waiting for an event so not runnable.
5) **Exit**: Process finished.
There are some *state transitions* performed to control these.
1) **Admit**: Process control set up; move to run queue.
2) **Dispatch**: Scheduler gives CPU to runnable process.
3) **Timeout**/**Yield**: Running process forced to/volunteers to give up CPU.
4) **Event**: Event occurs; wake-up process.
5) **Release**: Process terminates; release resources.
## Process Control Blocks
A PCB is a data structure used by the **kernel** to manage a process. It gives each process: 
+ A unique ID
+ Its state.
+ CPU scheduling information, such as priority.
+ Program counter, when not running.
+ Values in other CPU registers, when not running.
+ Memory management information, such as the location of address space.
+ Scheduling and accounting information, such as when the process was last ran, CPU time lapsed.
## Context Switching
The PCB structure allows a process to **switch contexts**.
For example, with a time-consuming process, A:
1) A executes.
2) The OS saves its information into PCB A and restores state from PCB B.
3) B executes.
4) This repeats many times per seconds.
## Process Creation
A new process can create a number of child processes, which can in turn create other processes. This forms a [[Trees|tree]] of processes. Generally, the processes are identified and managed by a process ID.
### Resource Share
There are 3 possible ways to split resources between the process tree:
1) The parent and child processes share all resources;
2) The child process shares a subset of the parent's resources;
3) The parent and child processes share no resources.
### Execution
There are 2 ways to handle process execution:
1) The parent and child execute concurrently;
2) The parent waits until the child terminates.
## Process Termination
When the process has executed its last statement, it asks the OS to delete it with the `exit()` syscall. This outputs the data from the child processes to the parent. The child processes' resources are deallocated.
The parent process can also terminate its child processes if:
+ They exceed their allocated resources;
+ The task is no longer required;
+ The parent is itself terminating.
### Termination States
+ If there is no parent `wait()`ing, then the process is called a **zombie**.
+ If the parent terminated without `wait()`ing, then the process is an **orphan**.
