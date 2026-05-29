#notes 

This is distribution initiated by an overloaded server.
If a system **never** gets highly-loaded, these algorithms work better.
If a system has a highly-fluctuating load and high migration cost, then this is also fast.
## Policies
### Transfer
Use *thresholds*:
+ Become the **sender** if the queue length threshold exceeds $T$;
+ Become the **receiver** if accepting a task will not make the length exceed $T$.
### Selection
Only select newly arrived tasks - non-preemptive.
### Location Policy
+ **Random**: Tasks are transferred to a random server;
	+ No need for state collection;
	+ Unnecessary transfers may occur.
+ **Threshold**: Poll a server to determine if it a receiver. The receiver *must* accept the task irrespective of its state when the task actually arrives;
+ **Shortest**: Poll servers and select the receiver with the shortest task queue length.
### Information
Demand-driven
## Issues
+ These can become *unstable* at **high** load:
	+ At high load, it can become difficult for senders to identify receivers;
	+ Also, the number of senders increases under high system load, thereby increasing polling activity;
	+ Polling activity may make the system unstable at high loads.

