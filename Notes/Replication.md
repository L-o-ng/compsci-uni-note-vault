#notes 

Under **Replication**, we replicate data or functions over multiple components or servers.
*Replication* increases **reliability** and **performance**.

We need to decide **when** to replicate a data item, **where** they should be placed, and **how many** we need.
## Replication Approaches
![[Replication.png]]
+ **Method 1**: *application* is responsible for replication so we need to update *all*copies. The *application* needs to handle consistency.
+ **Method 2**: The *system* ([[Remote Procedure Calls|Middleware]]) handles replication:
	+ Consistency issues are handled by the middleware;
	+ This method simplifies application development but makes object-specific solutions harder.

**Consistency** is an issue. If we make changes to one copy, those changes should be made to all copies as soon as possible: replicas need to be identical and kept consistent.
## Requirements
- **Computation Replication**: Multiple instances of the same functional process are executed. These may run on different hardware, languages, and may also be implemented by different algorithms;
- **Data Replication**: The same piece of information is stored across multiple devices. This data can then be made available on-demand.
## Components
+ **Replicas** (*R*) - Backend Servers:
	+ Maintain replicas on servers;
	+ Process requests or store results;
	+ These can be static or dynamic: the set of *R*s is fixed or variable.
+ **Client** (*C*) requests:
	+ Those without updates are called read-only requests; the others are called *update* or *write* requests (they may include reads);
	+ *Read-only* - handled by one replica;
	+ *Update* - may involve data propagation or synchronisation, and concurrency control.
+ **Frontend** (*FE*) - Frontend Servers:
	+ Make replication transparent;
	+ Monitor and maintain replica availability;
	+ Distribute client requests and collate responses.
## Workflow
1. **Incoming Request**: received by the FE, and forwarded to R;
2. **Coordination**: R accepts a request, and decides the ordering relative to other requests;
3. **Execution**: R processes the request;
4. **Agreement**: R reaches consensus on the effect of the requests;
5. **Response**: One or more Rs reply to the FE. FE may process the response and return it to the client.