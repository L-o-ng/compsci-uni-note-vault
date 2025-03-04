#notes 
## See Also
+ [[CPU Scheduling]]
## Multilevel Queues
The **ready** queue is partitioned into several queues:
+ The *foreground* queue - interactive;
+ The *background* queue - batch.
Each queue has its own [[CPU Scheduling#Scheduling Algorithms|Scheduling Algorithm]] - the foreground queue uses RR and the background queue uses FCFS.
Scheduling must be undertaken between the queues.
+ **Fixed Priority Scheduling** - for example: serve all processes from the foreground queue, then from the background queue.
+ **Time Slices** - Each queue gets a certain amount of CPU time which it can schedule among its processes.
![[Multilevel Queue.png]]
## Multilevel Feedback Queue
**Feedback Queues** are an adaptation of multilevel queue scheduling. A process can move between the various queues: ageing can be implemented in this way.
A scheduler on a feedback queue is defined by the following parameters:
+ Number of queues;
+ Scheduling algorithms for each queue;
+ A method to determine when to up/downgrade a process;
+ A method used to determine which queue a process will enter when that process needs service.
Most major operating systems use multilevel feedback queues.
![[Multilevel Feedback queue.png]]
## Algorithm Evaluation
### Deterministic Modelling
Take a predetermined workload (case) and analyse the performance of each algorithm.
### Queuing Models
Queuing network analysis can be implemented using **Little's Formula**:
$$
\boxed{\LARGE n=\lambda \times WB}
$$
where:
$$
\eqalign{
n &- \text{avg. long-term queue length} \\
W &- \text{avg. waiting time in queue} \\
\lambda &- \text{avg. arrival rate for new processes in the queue}
}
$$
### Simulation
Create a model of the system and the way it is used.
Beware of [[Bonini's Paradox]]!
![[Mr Acid.png]]
### Post-Implementation
Examine the running OS - live testing.
