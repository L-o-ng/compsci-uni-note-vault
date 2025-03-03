#notes 
## Multi-User
This OS type allows two or more users to run programs simultaneously.
## Multi-Programming
This OS type supports running a program across multiple CPUs.
This is needed for *efficiency*:
+ A single user cannot keep a CPU and IO devices busy at all times.
+ Multi-programming organises jobs so that the CPU always has one to execute.
	+ A subset of the total jobs is always kept in memory.
	+ One job is selected and run via CPU scheduling.
	+ When it has to wait, the OS switches to another job.
## Multi-Tasking
This OS type allow more than one program to run concurrently.
This is a logical extension in which the CPU switches jobs so frequently that users can interact with each job while it is running, creating **interactive** computing.
+ Each user has at least one process.
+ If several jobs are ready to run simultaneously, use CPU scheduling.
+ If the processes do not fit into memory, **swapping** can move them in and out to run.
+ Virtual memory allows execution of processes from secondary storage.
## Multi-Threading
This OS type allows different parts of the same program to run simultaneously.
## Real Time
This OS type responds to input instantly.