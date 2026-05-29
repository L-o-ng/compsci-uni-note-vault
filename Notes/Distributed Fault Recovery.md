#notes 

+ **Failure Isolation**: When a failure occurs, the system must be able to isolate the failure to the offending component and remove faulty components.
+ **Error Containment**: We must confine the effects of hardware or software faults to the region where they occur, to prevent further damage and error propagation.
+ **Recovery**: Move the system to a state that does not contain the error.
## Backward Recovery
+ Move the system back to a failure-free state;
+ Make sure a system is correct before continuing to operate.
### Checkpointing
Each DS component periodically saves its state, which contains sufficient information to restart component execution.
A **global** checkpoint is a set of $N$ local checkpoints, one from each component, forming a consistent system state.
The most recent consistent global checkpoint is called the recovery line.
![[Distributed Fault Recovery.png]]
+ **Uncoordinated Checkpointing**: Each process takes checkpoints independently. It is automatic and convenient, but some checkpoints may be useless and lead to a cascading rollback;
+ **Coordinated Checkpointing**: Processes take checkpoints together to save a system-wide consistent state. We have less storage overhead and avoid cascading rollbacks, but take a performance hit as all processes stop operations to checkpoint;
+ **Communication Induced Checkpointing**: Force each process to take checkpoints based on information piggybacked on the application messages it receives from other processes. This avoids cascades, and allows local checkpoints;
+ **Message Logging**: We take infrequent checkpoints and instead log *all* messages between checkpoints to local stable storage. Recovery becomes replaying messages from the previous checkpoint to avoid repeating operations.

Backward recovery may force the system to repeat operations. We may also suffer cascading rollbacks:
![[Distributed Fault Recovery-1.png]]
![[Distributed Fault Recovery-2.png]]
## Forward Recovery
+ Find a new state from which the system can continue operation;
+ Avoid a system stopping even if failure occurs.
### Implementation
+ **Self-Checking Components**: Switch from a failed to a working component executing the same task;
+ **Fault Masking**: Error compensation is continuously applied;
+ **Error Compensation**: Based on algorithms that use redundancy/diversity. We add redundancy to data to deliver potential results;
+ **Data Prediction**: We simulate application responses, such as in games where we can estimate movements when data is lost, in anticipation of reconnection.
## Comparison
Backward recovery:
+ Requires no knowledge about the error;
+ We need only to maintain some prior error-free state;
+ Application independent;
+ Resource and time intensive and may cascade.

Forward Recovery:
+ Efficient in resource usage;
+ Requires knowledge of the error to take appropriate actions;
+ Application dependent;
+ Used when significant delay is not acceptable.


