#notes 

See [[Kernel Process Scheduling]].

There are 3 different multithreading models.
## Many-To-One
![[Multithreading model many to one.png]]
+ There are many user-level threads mapped to a single kernel thread.
+ One thread blocking causes every other thread to block.
+ Multiple threads cannot run in parallel on multicore systems because only one can be in the kernel at a time.
+ This model is thus largely unused.
## One-To-One
![[Multithreading model one to one.png]]
+ Each user-level thread maps to its own kernel thread.
+ Creating a user thread also creates a kernel thread.
+ This model has strong concurrency, but the number of threads per process may be limited due to the extra overhead.
+ Windows and Linux use this model.
## Many-To-Many
![[Multithreading model many to many.png]]
+ Many user-level threads can be mapped to many kernel threads.
+ This allows the OS to create a sufficient number of kernel threads.
+ Windows can use this model with the `ThreadFiber` package.
