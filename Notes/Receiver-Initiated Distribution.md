#notes 

Distribution is initiated by lightly loaded servers.
This is not unstable like [[Sender-Initiated Distribution]], as there are lightly loaded systems which have initiated the algorithm.
This is good for high-load systems.
## Policies
### Transfer
Use *thresholds*. If the queue length is below $T$, identify as receiver, and above $T$, as the sender.
### Selection
Newly arrived tasks have high priority, and preemptive tasks transferred with lower priority.
### Location
Polling:
+ Poll a random server, transferring a task when that server is a sender.
+ Repeat the process to attempt transferring tasks from another server until `PollLimit` is reached;
+ Poll a number of servers and choose the highly-loaded one.
### Information
Demand Driven.
## Issues
+ Polling initiated by the receiver suggests it is difficult to find senders for new tasks. This is because systems try to schedule tasks as and when they arrive;
+ Receiver-initiated approach can result in preemptive transfers, so costs are higher.