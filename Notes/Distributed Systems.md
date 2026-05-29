#topic 
## Notes
+ [[Transparent Distributed Systems]]
+ [[Block Diagrams]]
+ [[Remote Procedure Calls]]
+ [[Message Oriented Middleware]]
+ [[Web Services]]
+ [[REST]]
+ [[JSON]]
+ [[Apache Web Server]]
+ [[Proxy Servers]]
+ [[Edge Computing]]
+ [[Content Distribution Networks]]
+ [[Replication]]
+ [[Distributed Fault Handling]]
+ [[Active and Passive Replication]]
+ [[Virtualisation]]
+ [[Load Balancing]]
+ [[Load Distributing]]
+ [[Sender-Initiated Distribution]]
+ [[Receiver-Initiated Distribution]]
+ [[Symmetric Distribution]]
+ [[Adaptive Distribution]]
+ [[Power of D Balancing]]
+ [[Idle Queues]]
+ [[Locking]]
+ [[Distributed Transactions]]
+ [[Distributed Concurrency Control]]
+ [[Timestamping]]
+ [[Network Time Protocol]]
+ [[Distributed Consistency]]
+ [[Linearisability]]
+ [[Distributed Fault Tolerance]]
+ [[Distributed Fault Recovery]]

---

A *centralised* system has a single point of control for its operation. It has a single point of failure, is difficult to scale up, and can only operate effectively over a small region.
> [!definition] 
> A **Distributed System** is a collection of independent and dynamic components which work together and appear to users as a single coherent system. Components can be:
>  + Hardware;
>  + Software Components;
>  + Web services.
>
> We can share resources between components via communication.
## Principles
+ No machine has a complete state;
+ Each makes a decision based on local information;
+ A single failure does not bring down the system;
+ There is no global clock.
## Challenges
+ Highly variable network bandwidth may have large latency;
+ No clock synchronisation means potential inconsistency;
+ Unpredictable failures;
+ Cannot rely on typical centralised security measures.

