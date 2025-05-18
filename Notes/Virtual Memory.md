#notes 

Virtual memory is the capability of the OS that enables programs to address more memory locations than are provided in main memory. Virtual memory systems remove much of the burden of memory management from developers.

With a virtual memory system:
+ The logical address space is *much* larger than the physical address space;
+ Pages are swapped (paged) in and out of main memory;
+ The physical address space is shared by several processes;
+ Only part of a process needs to be in the physical address space for execution;
+ A free frame list of the physical address space is maintained by the operating system.
## Virtual Address Space
The *virtual address space* refers to the logical view of how a process is stored in memory. Each process views the address space as a contiguous block of memory holding the objects it needs to execute:
+ Code (read-only);
+ Data (read/write);
+ Heap - the address space in memory that is used to hold data produced during execution of a process. This space will expand and contract during execution;
+ Stack - the address space that is used to hold instructions and data known at the time of the procedure call. The contents of the stack grow as the process issues nested procedure calls and shrinks as they return.
## Demand Paging
Demand paging is the strategy of only bringing a page into memory when it is required by a process during its execution. This *reduces* the number of pages transferred and frames allocated per process, but *increases* the overall response time for collections of processes and the number of processes executing.
### Performance
Page fault rate is bounded between 0 and 1:
$$
0 \leq p \leq 1
$$
where if $p=0$ we never have page faults, and if $p=1$ we always have page faults.
The effective access time is:
$$
\small\text{Access Time}=(1-p)\times\text{Memory Access} + p(\text{Page Fault Overhead} + \text{Swap Page Out}+\text{Swap Page In})
$$
The overhead includes:
+ [[CPU Scheduling|Context Switching]];
+ Time waiting in the paging device queue;
+ Time waiting back in the ready queue;
+ Context switching when regaining the ready queue.
## Page Tables
When a reference is made to a page's address:
+ Invalid reference -> abort;
+ Not in memory -> bring into memory;
A [[Memory Fragmentation#Protection|valid/invalid bit]] is associated with each process' page table entry to indicate if it is already in memory. Initially, this is 0 on all entries. When a request is made to a 0 entry, a **page fault trap** is instanced.
### Page Fault Traps
A process requests access to an address in a page. First, we check the validity of the process' access to that address. If it is invalid:
+ Terminate the process;
+ Clear all allocated memory;
+ Throw an error.
Otherwise, if it is a valid request and the page is allocated a frame in main memory: break.
Otherwise, we have a page fault trap:
+ Identify a free frame from the free frame list;
+ Read the page into the identified frame;
+ Update the process' page table;
+ Restart the instruction interrupted by the page fault trap.
### Page Replacement
If there are no free frames, we perform *page replacement*. We find some page in memory that is infrequently used and swap it out. We have page replacement algorithms to decide the page that will minimise page faults.
#### Basic Algorithm
1) Find the location of the desired page in the disk;
2) Find a free frame:
	1) If there is a free frame:
		1) Use it.
	2) Otherwise, if there is no free frame: 
		1) Use a page replacement algorithm to decide a **victim page**;
		2) Write the victim page back to the disk and update the process' page table and free frame list accordingly.
3) Read the desired page into the free frame. Update the process' page table and free frame list.
4) Restart the user process.
### Evaluating Algorithms
We run each algorithm on a particular string of memory references. This is called the **reference string**.
We compute the number of page faults per algorithm on that string.
We compare the number of page faults, looking for the lowest possible.
### Algorithms
#### FIFO Algorithm
Associate with each page the time it was brought into memory. The victim page is the oldest page. This is simple to implement with a FIFO queue.
##### Belady's Anomaly
>For some page fault algorithms, the page fault rate may increase as the number of allocated frames increases.

Usually increasing he size of memory will improve the memory response and throughput; however, some combinations of demands will have fewer page faults with a smaller number of available frames. The FIFO algorithm suffers from this effect.
#### Optimal Algorithm
We replace the page that will not be needed for the longest period of time. This algorithm is impossible to implement, as it requires knowing the future, but can be worked out to demonstrate how close a given algorithm is to the ideal.
#### LRU Algorithm
LRU, or **Least Recently Used**, associates with each page the time it was last used. The victim page is the page that has not been used for the longest period of time.
LRU is known as a **stack algorithm**, or a *counter* algorithm. This class of page replacement algorithms can never exhibit Belady's anomaly - a set of pages in memory for $n$ frames is always a subset of the set of pages that would be in memory with $n+1$ frames.
##### Implementations
###### Counter
Every page entry has a counter. Every time a page is referenced, we record the time. When a page needs to be changed, look at the counters to determine the best to swap out.
###### Stack
Keep a stack of page numbers in a double link form. When a page is referenced, move it to the top. There is now no search for the replacement - the victim page is always at the tail pointer of the stack.
#### Counting-Based Algorithms
These uncommon algorithms keep a counter of the number of references that have been made to each page.
+ Least Frequently Used - replaces page with smallest count
+ Most Frequently Used - based on the argument that the page with the smallest count was probably just brought in and has yet to be used.

### Frame Allocation
+ **Global Replacement** - Select a replacement frame from the set of all frames. One process can take a frame from another.
+ **Local Replacement** - Select from only the process' own set of allocated frames.
+ **Fixed/Equal/Proportional Allocation** - Allocate according to the size of a process.
+ **Priority Allocation** - If a process generates a page fault, select a frame from a process with a lower priority number.
## Thrashing
**Thrashing** is when a process spends more time paging than working. If a process does not have enough pages, then the page fault rate is very high:
+ Page fault to get page;
+ Replace existing frame;
+ Quickly need replaced frame back.
This leads to low CPU utilisation, the OS increasing the degree of [[CPU Scheduling#Multiprogramming]], and more processes being added to the system.
## Prepaging
**Prepaging** is paging *all* the necessary pages at once. In a system using the working set model:
+ We keep with each process a list of pages within its working set model;
+ If a process is suspended, we remember the working set for that process;
+ When the process resumes, we automatically bring back into memory its entire working set before restarting the process.
Prepaging is a means to prevent thrashing, but we must ensure that the cost of prepaging is less than that of servicing page faults.
## Page Fault Frequency Scheme
A **page fault frequency scheme** is an alternative means to prevent thrashing.
We first establish an acceptable page fault rate. Then:
+ If the actual rate is too low, then the process has too many frames. We reduce the number of frames allocated to that process.
+ If the rate is too high, we allocate more frames to that process.