#notes 

The main idea here is to limit the sender's polling actions at high load to avoid instability. Each server proactively keeps track of the status of all servers and polls adaptively.

This is powerful for heterogeneous task arrivals.
## Process
Each server maintains **three** lists. All servers are assumed to be *receivers* initially.
![[Adaptive Distribution.png]]
### Location Policy
#### Sender
+ **Sender** polls the head of the *receiver* list;
+ *Polled server* puts the *sender* at the head of its *sender list*, and informs the sender of whether it is a sender, receiver, or OK:
	+ If the polled server is still a receiver, the new task is transferred to it;
	+ Otherwise the sender updates its lists and polls the next potential receiver.
+ **Stop when the receiver list finishes**: If this polling process fails to identify a receiver, the task can still be transferred during a [[Receiver-Initiated Distribution|Receiver Initiated Dialogue]].
#### Receiver
+ Receivers obtain tasks from *potential* senders. Lists are scanned in the following order:
	+ Head to tail in senders list (most up-to-date info);
	+ Tail to head in OK list (least up-to-date info);
	+ Tail to head in receiver list;
	+ We use the least up to date in hope that the status has changed.
+ If a sender is found, we transfer;
+ If the server is not a sender, both the polled server and receiver update each others status;
+ The polling process stops if a sender is found *or* a static `PollLimit` is reached.
## Performance
+ At **high** load, *sender*-initiated polling gradually reduces as servers get removed from the receiver list and become senders. At **low** loads, senders will generally find some receivers;
+ At **high** loads, *receiver*-initiated works and can find a sender. At **low** loads, receivers may not find senders, but the performance is not affected.
+ Therefore, the algorithm dynamically becomes *sender-initiated* at **low** loads and *receiver-initiated* at **high** loads. This makes it **stable**.


