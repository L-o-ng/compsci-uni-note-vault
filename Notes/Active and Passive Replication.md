#notes 

See first: [[Replication]], [[Distributed Fault Handling]].
## Passive Replication
![[Active and Passive Replication.png]]
There is, *at any one time*, a **single** *primary* R and one or more *secondary* slave/**backup** Rs. FEs communicate with the **primary** which *executes* the operation and sends *copies* of the updated data to backups. If the backup fails, one of the backups is **promoted** to act as the primary.
### Workflow
1. **Request**: An FE issues the request, containing a unique identifier, to R;
2. **Coordination**: The primary processes each request atomically, in the order in which it receives it relative to other requests. It checks the *ID*. If it has already done the request, it resends the response;
3. **Execution**: The primary executes the request and stores the response;
4. **Agreement**: If the request is an update, the primary sends the updated state, the response, and the ID to all backups. The backups send an ack;
5. **Response**: The primary responds to the FE, which handles the response to the client.
### Properties
+ **Crashes**: We can handle up to $f$ crashes, when the system comprises $f+1$ replicas;
+ **FE Functionality**: Little functionality is required. We need only to be able to look up a new primary replica when the current one is not available;
+ **System Overhead**: This is relatively large due to data propagation from the primary to *all* backups.
## Active Replication
![[Active and Passive Replication-1.png]]
Here, the Rs are all *state machines* all playing the same rule and organised as a group. They all start in the same state and perform the same task in the same order so that their state remains identical.
If an R crashes it has no effect on the performance of the service because the others continue as normal.
### Workflow
1. **Request**: FE attaches a unique ID and uses *totally ordered reliable multicast* to send request to Rs. FE can, at worst, crash. It does not issue requests in parallel;
2. **Coordination**: The multicast delivers requests to all the Rs in the same total order;
3. **Execution**: Every R executes the request. They are state machines and receive requests in the same order, so the effects are identical. The ID is put in the response;
4. **Agreement**: *No agreement* is required since all Rs execute the same operations in the same order, due to the properties of the totally ordered reliable multicast;
5. **Response**: FEs collect responses from Rs. FEs may use one or more responses. If it is only trying to tolerate crash failures, it returns the first response to the client.
### Byzantine Fault
A **Byzantine Fault** is an arbitrary fault that occurs during the execution of an algorithm when multiple servers are involved in producing results for the same client request. The server is running, but it produces the wrong result. These errors are difficult to handle.

**Byzantine Fault Tolerant Algorithms** are algorithms characterised by their resilience $f$: the number of faulty processes with which an algorithm can cope. 

The majority decision of Rs is used for response.
### Properties
+ We assume a solution to *totally ordered reliable multicast* is available;
+ **Failure**: We can mask up to $f$ *byzantine failures*, if the system incorporates at least $2f+1$ replicas;
	+ The FE waits to receive $f+1$ identical responses and passes *that* response to the client, then uses the ID to discard other results.
+ **Read-only Request**: The FE may send *read-only* requests only to individual replicas. We lose fault tolerance, but remain sequentially consistent. We can easily mask failure in this case, by submitting the request to another replica.
## Summary
### Passive
+ Provides strong **consistency** as all the requests for updates are processed by the primary server, which then sends updates to backup servers;
+ **Fault tolerance** is provided as backup servers can provide service when the primary fails;
+ Backups are not typically fully utilised, so there is some **wastage** of resources;
+ It is **simple to implement**, and used in applications requiring *consistency* and *fault tolerance*.
### Active
+ **Complex** to implement as it requires a special transmission protocol;
+ Data can be **inconsistent** as all servers process update requests, and failure of the protocol can lead to errors in the server;
+ It is used when high **availability** is required - it can provide service even if some servers fail.

