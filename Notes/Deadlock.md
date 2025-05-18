#notes 

A set of processes is **deadlocked** if each process in the set is waiting for an event that only another process in the set can cause.
## System Model
A system consists of resources of types $R_{1},R_{2},\dots,R_{m}$. These could represent CPU cycles, memory space, IO devices, etc.
Each resource $R_{i}$ has $W_{j}$ instances. Each process utilises a resource as follows:
1) Request;
2) Use;
3) Release.
## Deadlock Characterisation
+ **Mutual Exclusion** - only one process at a time can use a resource;
+ **Hold and Wait** - a process holding at least one resource is waiting to acquire additional resources held by other processes;
+ **No Pre-emption** - A resource can be released only voluntarily by the process holding it after that process has completed its task;
+ **Circular Wait** - There exists a set $\{ P_{0},P_{1},\dots,P_{n} \}$ of waiting processes such that $P_{0}$ is waiting for a resource held by $P_{1}$, $P_{1}$ is waiting for a resource held by $P_{2}$, and so on until $P_{n}$ is waiting for a resource held by $P_{0}$.
If all four arise simultaneously, a deadlock can occur.
## Resource Allocation Graph
A **resource allocation graph** is a set of vertices $V$ and edges $E$.
$V$ is partitioned into two types:
+ $P=\{ P_{1},P_{2},\dots,P_{n} \}$ or the set consisting of all processes in the system.
+ $R=\{ R_{1},R_{2},\dots,R_{n} \}$ or the set consisting of all resource types in the system.
A **request edge** is a directed edge $P_{i}\to R_{j}$.
An **assignment edge** is a directed edge $R_{j}\to P_{i}$.
### Representation
![[Resource Allocation Graph Representation.png]]
### Reading a RAG
If a graph contains no cycles there is no deadlock.
If a graph contains a cycle:
+ If there is only one instance per resource type then there is a deadlock.
+ If there are several instances per resource type then there is a possibility of deadlock.
## Dealing with Deadlocks
1) Ignore the problem altogether;
2) Prevention - negate one of the four necessary conditions;
3) Avoidance - careful resource allocation can avoid deadlock;
4) Detection and recovery.
### Approach 1 - The Ostrich Algorithm
We can just pretend there is no problem. This is reasonable is deadlocks occur rarely and the cost of prevention is high. UNIX and Windows take this approach, as resources are plentiful. Deadlocks are just solved by rebooting. This is a trade-off between convenience and correctness.
### Approach 2 - Prevention
+ **Mutual Exclusion** - Not required for shareable resources; must hold for non-shareable resources.
+ **Hold and Wait** - To ensure it never occurs, one must guarantee that whenever a process requests a resource, it does not hold any other resources. This can be implemented by:
	+ Requiring a process to request and be allocated *all* its resources before it begins execution, or allow it to request resources only when the process has none allocated to it.
+ **No Pre-emption** - to ensure it does not hold:
	+ If a process holding resources requests another resource that cannot be immediately allocated to it, then all resources currently being held are released.
	+ Pre-empted resources are added to the list of resources which the process is waiting.
	+ The process will be restarted only when it can regain its old resources as well as its new requests.
+ **Circular Wait** - One way to ensure it does not hold is to impose a total ordering of all resource types and require that each process requests resources in an increasing order of enumeration.
### Approach 3 - Deadlock Avoidance
This approach requires that the system has some *a priori* information available:
+ The simplest model requires that each process declare the maximum number of resources of each type that it may need.
+ The algorithm dynamically analyses the resource allocation state to ensure there can never be a circular wait.
+ This state is defined by the number of available and allocated resources and the maximum demands of the processes.
#### Safe State
When a process requests an available resource, the system must decide if immediate allocation leaves the system in a *safe state*.
The system is in a safe state if there exists a sequence $P_{1},P_{2},\dots,P_{n}$ of **all** processes in the system such that for each $P_{i}$, the resources that $P_{i}$ can request can be satisfied by currently available resources plus resources held by all $P_{j}$ with $j<i$. That is:
+ If $P_{i}$ resource needs are not immediately available, then it can wait until all previous processes have finished.
+ When $P_{j}$ is finished, $P_{i}$ can obtain its needed resources, execute, return allocated resources, and terminate.
+ When $P_{i}$ terminates, $P_{i+1}$ can obtain its needed resources and so on.
If a system is in a safe state, there cannot be deadlocks.
If a system is in an unsafe state, there arises the possibility of deadlocks.
**Avoidance Algorithms** ensure the system will never enter an unsafe state.
#### Avoidance Algorithms
For a single instance of a resource type, a RAG is used.
For multiple instances of a resource type, we use the *banker's algorithm*.
##### RAG Scheme
A claim edge $P_{i}\to R_{j}$ indicates that process $P_{i}$ may request resource $R_{j}$. This is represented by a dashed line.
A claim edge converts to a request edge when a process requests a resource.
A request edge converts to an assignment edge when the resource is allocated.
This reverts to a claim edge once the resource is released.
![[RAG Claim Edges.png]]
If a resource is requested, it can only be granted if converting the request edge to an assignment edge does not result in a cycle.
##### Banker's Algorithm
Each process must a priori claim maximum use. When a process requests a resource, it may have to wait. When a process gets all its resources, it must return them in a finite time.

Let $n$ be the number of processes and $m$ resource types. Then:
+ **Available** - a vector of length $m$. If available = $k$ then there are $k$ instances of resource type $R_{j}$ available.
+ **Max** - $n\times m$ matrix. If max = $k$ then process $P_{i}$ may request at most $k$ instances of resource type $R_{j}$.
+ **Allocation** - $n\times m$ matrix. If allocation = $k$, then $P_{i}$ is currently allocated $k$ instances of $R_{j}$.
+ **Need** - $n\times m$ matrix. If need = $k$ then $P_{i}$ may need $k$ more instances of $R_{j}$ to complete its task.
We also have that $\text{Need}=\text{Max}-\text{Allocation}$.
![[Banker's Algorithm Example.png]]
###### Algorithm for Safety
Let `work` and `finish` be vectors of length `m` and `n` respectively.
Initialise:
`work = available`
`finish[i]=false for i=0,1,...,n-1`
Find an `i` such that both:
+ `finish[i]=false`
+ `need_i<work`
If no such `i` exists and `finish[i] is true` for all `i` then the system is in a safe state.
Otherwise:
`work += allocation`
`finish[i]=true`
If `finish[i] is true` for all `i` then the system is in a safe state.

This is $O(m\times n^{2})$.
###### Algorithm for resource requests
![[Bankers resource request algorithm.png]]
### Approach 4 - Recovery
We terminate processes:
+ Abort **all** deadlocked processes;
+ Abort one at a time until the deadlock cycle is eliminated.
We can decide the order to abort based on several factors:
+ Process Priority;
+ Compute time and time to complete;
+ Resources the process has used;
+ Resources the process needs to complete;
+ Number of necessary terminations;
+ Process type (interactive or batch).
#### Resource Pre-emption
+ **Selecting a victim** - minimises cost.
+ **Rollback** - return to some safe state and restart the process for that state.
+ **Starvation** - the same process may always be picked as a victim so include the number of rollbacks in the cost factor.
## Examples
### RAG
![[RAG Example 1.png]]
### RAG with Deadlock
![[RAG Example 2.png]]
### RAG with Cycle but no Deadlock
![[RAG Example 3.png]]

