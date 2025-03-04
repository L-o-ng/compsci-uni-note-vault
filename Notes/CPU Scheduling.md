#notes 

See [[Processes]], [[Kernel Process Scheduling]].
See also: [[Multilevel Queues]]
## Multiprogramming
**Multiprogramming** maximises CPU utilisation by keeping several processes in memory concurrently.
When one process is waiting, the OS executes a process in the ready queue.
**CPU Scheduling** is the method used to support multiprogramming in process management.
## CPU Scheduling
CPU scheduling provides a basis of a fair and efficient system for sharing resources.
### Schedulers
An OS has 3 types of scheduler.
#### Long Term Scheduler
This scheduler, also known as the **job scheduler**, selects which processes should be brought into the ready queue.
#### Medium Term Scheduler
This scheduler is a part of swapping, and is in-charge of handling the swapped-out processes.
#### Short Term Scheduler
This scheduler, also called the **CPU scheduler**, selects the process to be executed next and allocated to the CPU.
### Dispatcher
The dispatcher is the module that gives control of the CPU to the process selected by the CPU scheduler. It has 3 main functions:
1) **Switching Context**: context-switch time is an overhead; the system undertakes no user-processing while switching.
2) Switching to user mode.
3) Jumping to the proper location in the user program to restart that program.
The time it takes for the dispatcher to stop one process and start another is called the **dispatcher latency**.
### Scheduling Criteria
+ **CPU Utilisation** - the CPU's busy-ness;
+ **Throughput** - the number of processes that complete their execution per unit of time;
+ **Turnaround Time** - the amount of time to execute a particular process: the *waiting*, *execute*, *I/O*;
+ **Waiting Time** - the total amount of time a process has been waiting in the ready queue;
+ **Response Time** - the amount of time it takes from when a request was submitted until the first response: access to the CPU. Note that this is ==not the time to complete the process==!
We want to maximise the CPU utilisation and throughput.
We want to minimise the turnaround, waiting, and response times.
## Scheduling Algorithms
There are many different CPU scheduling algorithms.
+ First Come First Served (FCFS);
+ Shortest Job First (SJF);
+ Shortest Remaining Time First (SRTF);
+ Priority with/out pre-empting;
+ Priority with/out ageing;
+ Round Robin (RR);
+ Multilevel/Feedback Queue;
### FCFS
The first process to request the CPU is allocated the CPU until it is completed.

The average waiting time can be lengthy, depending on the *convoy effect* - a short process waiting on a long one to finish.
It is a very simple algorithm to implement.
#### Examples
![[FCFS Example 1.png]]
![[FCFS Example 2.png]]
### SJF
Each process is associated with the length of its next CPU burst.
These lengths are used to schedule the process with the shortest time. We can use FCFS if two processes have the same length.
This algorithm is non pre-emptive: once the CPU is given the process, it cannot be pre-empted until the process has completed its CPU burst.

SJF is an optimal algorithm - it gives the minimum average waiting time for a given set of processes. The difficulty is knowing the length of the next CPU request.
#### Example
![[SJF Example 1.png]]
### SRTF
If a new process arrives in the ready queue with a CPU burst length less than the remaining time of the executing process, then pre-empt the running process and run the process with the shorter CPU burst length. It is essentially a pre-emptive version of SJF.
#### Example
![[SRTF Example 1.png]]
### RR
Each process gets a small unit of CPU time, called a *time quantum/slice*: usually $q=[10, 100]ms$. After this time has elapsed, the process is pre-empted and added to the end of the ready queue.
If there are $n$ processes in the ready queue and the time quantum is $q$, then each process gets $\frac{1}{n}$ of the CPU time in chunks of at most $q$ time units at once.
#### Example
![[RR Example 1.png]]
#### Time Quantum vs Context Switching
The performance of the algorithm depends heavily on the magnitude of $q$:
+ If $q$ is large, then the RR policy is the same as the FCFS policy.
+ If $q$ is extremely small, then RR results in many context switches.
The turnaround time also depends heavily on the $q$ value. $q$ should be large compared to the context switch time; it should not be too large.

Generally, 80% of the CPU bursts should be shorter than $q$.
### Priority Scheduling
This algorithm associates a priority integer with each process. The CPU is allocated by the dispatcher to the process with the highest priority.
This algorithm can be either pre-emptive or non pre-emptive.
#### Non Pre-Emptive Priority Example
![[Priority Scheduling Example 1.png]]
#### Starvation and Ageing
**Starvation**, or *indefinite blocking*, is a problem where low priority processes may never execute.
We can introduce *ageing* to solve this: as time progresses, we increase the priority of processes that have not ran.
We could also combine RR with priority by executing the highest-priority process and runs processes with the same priority with RR.
