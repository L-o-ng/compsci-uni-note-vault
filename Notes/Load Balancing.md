#notes 

[[Replication]] offers *fault tolerance* and *better performance* to distributed systems. However, if some replicated server are **overloaded** and some **idle**, such benefits are no longer held.

The goal of **load balancing** algorithms is to minimise delay and energy consumption, and maximise the chance of accepting a request for service.

We approach this in two ways:
+ **Data Distribution**: Distributing incoming tasks to suitable servers and redistributing ongoing tasks amongst servers;
+ **Server Allocation**: Determining suitable servers to receive and distribute tasks and organising servers for collaborative work.
## Work Sources
1. **Load Estimation**:
	1. Queue length of waiting tasks, which is proportional to response time;
	2. CPU and GPU utilisation;
	3. Storage Read/Write bandwidth utilisation;
	4. Network bandwidth utilisation;
	5. Application dependent factors.
2. **Load Information Collection**:
	1. *Central Coordinator*: Collects server load information centrally and globally;
	2. *Local Approach*: A server locally collects load information of neighbouring servers.
## Task Transfer and Routing Types
+ **Non-Preemptive Task Transfer**: Transfer tasks that have not yet started executing:
	+ Transfer only the request without processing state;
	+ Good for load sharing but difficult for load balancing. ![[Load Balancing.png]]
+ **Preemptive Task Transfer**: Transfer partially executed tasks:
	+ This is expensive, as collection and transmission of state must be performed.![[Load Balancing-1.png]]
+ **Layer 4 Routing**:
	+ Determines the target server without referring the message/request content;
	+ This is *content-blind routing*: server selection is purely based on information from the IP header.
	  ![[Load Balancing-2.png]]
+ **Layer 7 Routing**:
	+ Examine a request at the application level and select a server accordingly;
	+ This can support sophisticated dispatching policies, but induces latency. ![[Load Balancing-3.png]]
## Policies
### Join Shortest Queue
We assign the job to the server with the shortest queue.
![[Load Balancing-4.png]]
### Least Workload
Send the job to the server with the least workload.
![[Load Balancing-5.png]]
#### Estimating Workload
+ **Exact Processing Times**: knowing the exact processing time of every job and the remaining time of ongoing jobs. This is not always possible;
+ [[Probability|Probability Distributions]]: Knowing the probability distributions of service times, we can estimate based on past data;
+ **Average Service Times**: Knowing the average time from past jobs, we can estimate;
+ **Queue Sizes**: Knowing the queue sizes of servers.
