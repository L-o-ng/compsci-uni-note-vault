#notes 

**Load Distribution** is a subset of [[Load Balancing]], which concerns itself with the logic of routing and sharing of tasks.

Load distribution *helps* when we have **moderate** system utilisation:
+ If we have **high** utilisation, many servers are busy, so the probability that an idle server exists and a job is waiting is low;
+ If we have **low** utilisation, little work exists so jobs are rarely waiting.

Thus, on a moderately loaded system, there is potential for performance improvements.
## Major Approaches
### Static
This is a fixed policy approach. The scheduling decision does not depend on the current state of the system.
+ Decisions are hard-coded into an algorithm, such as round robin;
+ Simple to implement;
+ A Priori knowledge of the system is required regarding servers and jobs.

![[Load Balancing-6.png]]
Here, we assign an incoming job to server 1 with probability $\frac{\mu_{1}}{\mu_{1}+\mu_{2}}$. Here, round robin is a bad policy, as allocating equal jobs to both servers is slower.
### Dynamic
This is a fixed policy approach, but the scheduling decision takes the state of the system into account.
+ Decision is made at runtime based on system states such as queue length, CPU utilisation, etc;
+ Correctness of load distribution depends on the timeliness of states collected;
+ Here, the decision between a central vs a local coordinator is better.
### Adaptive
This approach changes the policy dynamically, by making the choices of the algorithms themselves and the frequency of collection of load information based on states.
## Constructing an Algorithm
We have four main components.
![[Load Balancing-7.png]]
We need to implement each policy, and define what information is required to collect and maintain decision making, and the procedures required for distributing workload.
### Transfer Policy
Here, we decide whether a **server** *needs* to transfer tasks.
+ **Thresholds**: Number of tasks, CPU util, etc;
+ **Role**: A server becomes a *sender*/*receiver* based on its *thresholds*;
+ **Issue**: Sensitive to time duration of a task transfer.
### Selection Policy
Here, we determine **which** *tasks* to transfer.
+ A task that causes a server to become overloaded;
+ A task with a long execution time;
+ A task which will improve server response time if moved;
+ We must minimise the location-dependent system calls made by the task. Some tasks may perform worse if moved if they make many syscalls.

We want to move a task that relieves the most load whilst being cheap to migrate.
### Location Policy
Here, we decide **which server** should *receive* the task.
+ **Polling** is generally used to find a lightly loaded server;
+ This can be done serially or in parallel with multicast.
### Information Policy
Here, we decide *when*, *where*, and *what* **information** to **collect**.
+ **Demand Driven**: A server collects the state of other servers only when it becomes either a sender or receiver;
+ **Periodic**: Servers exchange load information periodically;
+ **State-Change Driven**: Servers disseminate state information whenever their state changes by a certain degree.
## Algorithms
See now: 
+ [[Sender-Initiated Distribution]];
+ [[Receiver-Initiated Distribution]];
+ [[Symmetric Distribution]];
+ [[Adaptive Distribution]];
+ [[Power of D Balancing]];
+ [[Idle Queues]].

---


