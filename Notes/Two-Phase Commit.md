#notes 

See first: [[Network Partitioning]].

Under **Two-Phase Commits** every **global** [[Transactions|Transaction]], one site acts as a **coordinator**, or *transaction manager* (usually the site where the transaction is initiated); and all other sites are **participants**. The *coordinator* knows all *participants*, and each *participant* knows the *coordinator*.
## Process
### Main Idea
The *coordinator* asks all *participants* if they are ready to commit:
+ If **any** *one* participant votes to abort, or fails to respond, then the coordinator propagates the message to abort to all participants;
+ Only if **all** participants vote to commit, will the coordinator ask all participants to commit.

The global decision **must** be followed by **every** participant.

If one votes to **abort**, then they are free to abort immediately; it can even abort before voting - this is called a **unilateral** abort.

If one votes **commit**:
+ They must wait for the coordinator to broadcast the global decision;
+ It cannot commit *unilaterally*;
+ It cannot **abort** *unilaterally*;
+ If a participant does not receive the coordinator's broadcast in a timely manner, or if the coordinator does not receive a vote, then it assumes failure of another site and terminates.

We assume that each site keeps a local log and so can *rollback* and *commit* reliably.
### Execution
![[Two-Phase Commit.png]]
#### Coordinator
##### Phase 1 - Voting
1. Write `begin_commit` record to log;
2. Send `PREPARE` message to all participants;
3. Wait for responses within a timeout period.
##### Phase 2 - Decision
1. If:
	1. A participant returns `ABORT`:
		1. Write `abort` record to log;
		2. Send `GLOBAL_ABORT` to all participants and wait for acks.
	2. A participant returns `READY_COMMIT`:
		1. If all participants already voted to commit:
			1. Write `commit` to log;
			2. Send `GLOBAL_COMMIT` to all participants and wait for acks;
2. Once all acks have been received, write `end_transaction` to log;
3. If a site does not ack, resend the global decision until an ack is received.

The coordinator **must** wait for all votes of participants. If a site does not vote in time, then the coordinator assumes failure of the site, assumes default vote `abort`, and sends `GLOBAL_ABORT`.
#### Participants
1. On receiving `PREPARE`:
	1. Either:
		1. Write `ready_commit` to log;
		2. Send `READY_COMMIT`.
	2. Or:
		1. Write `abort` to log;
		2. Send `ABORT`.
2. On receiving `GLOBAL_ABORT`:
	1. Write `abort` to log;
	2. Abort the sub-transaction;
	3. Send ack to the coordinator.
3. On receiving `GLOBAL_COMMIT`:
	1. Write `commit` to the log;
	2. Commit the sub-transaction;
	3. Send ack to the coordinator.
### Termination
**Termination** is invoked when a coordinator or participant fails to receive an expected message and times out.
#### Coordinator
Timeouts can only happen in the `WAITING` or `DECIDED` states.
1. Timeout during `WAITING`:
	1. Not all participants voted;
	2. Cannot commit the transaction;
	3. Decide for `GLOBAL_ABORT`
2. Timeout during `DECIDED`:
	1. Waiting on ack;
	2. Resend global decision repeatedly to sites that did not ack.
#### Participant
##### Simple Protocol
Remain `blocked` until communication with the coordinator is re-established.
##### Performant Protocol
Timeouts can happen in the `INITIAL` or `PREPARED` states.
1. Timeout during `INITIAL`:
	1. Waiting for `PREPARE`;
	2. Coordinator must have failed in `INITIAL`;
	3. Abort the sub-transaction.
2. Timeout during `PREPARED`:
	1. Already voted to commit;
	2. Waiting for global instruction;
	3. Without further information, remain `blocked`.
		1. As an aside, the site could try to coordinate with other participants to find the global decision.
### Recovery
**Recovery** is invoked when an operational site restarts after failure.
#### Coordinator
1. Failure during `INITIAL`:
	1. Recovery is simply restarting the commit procedure, as it was not yet started.
2. Timeout during `WAITING`:
	1. Has sent `PREPARE` but has not received all votes;
	2. Restart the commit procedure.
3. Timeout during `DECIDED`:
	1. Has instructed participants to globally commit/abort;
	2. If:
		1. All acks are received then the transaction is complete;
		2. Otherwise, initiate termination protocol - send global decision again and wait for ack.
#### Participant
The aim is to act the same as all other participants.
1. Failure during `INITIAL`:
	1. Has not yet voted;
	2. Coordinator could not decide global commit;
	3. Unilaterally abort.
2. Timeout during `PREPARED`:
	1. Has already voted;
	2. The vote was to commit (otherwise it would be in `ABORTED`);
	3. Initiate termination protocol.
3. Timeout during `ABORTED` or `COMMITTED`:
	1. Has already completed the sub-transaction;
	2. No action necessary.
## Other Topologies
The above process describes **centralised** 2PC.
We also have **Linear**: ![[Two-Phase Commit-1.png]]
And **Distributed**: ![[Two-Phase Commit-2.png]]

---

See now: [[Three-Phase Commit]].

