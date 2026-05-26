#notes 

[[Two-Phase Commit]] is **not** a non-blocking protocol. Sites may be *blocked* in practice:
+ The coordinator could fail and participants time out;
+ The participant may not know the final decision;
+ In general, any situation in which a participant cannot decide whether to commit or abort leads to blocks.

We can account for this with the **Three-Phase Commit** protocol - we add a **pre-commit phase** between the voting and decision phases:
1. If all votes are `READY_COMMIT`:
	1. Send `PRE_COMMIT` to all participants and wait for all acks;
	2. Once all acks are received, start the *commit* phase.
2. If any `ABORT` votes, then 3PC is equivalent to 2PC.

![[Three-Phase Commit.png]]

The main advantage here is that **all** operational sites know the global decision by the `PRE_COMMIT` *before* the first participant commits, so they can act independently in case of failure.
If the *coordinator* fails, then the participants can communicate with each other. If any one participant received `PRE_COMMIT`, they can all commit. Otherwise, everyone aborts.
## Termination
### Coordinator
1. Timeout during `WAITING`:
	1. As in 2PC: `GLOBAL_ABORT`.
2. Timeout during `PRE_COMMITTED`:
	1. Write `commit` to log;
	2. Send `GLOBAL_COMMIT`.
3. Timeout during `DECIDED`:
	1. Same as in 2PC: resend global decision repeatedly to sites that have not acked.
### Participant
1. Timeout during `INITIAL`:
	1. As in 2PC, unilaterally abort.
2. Timeout during `PREPARED`:
	1. Follow an **election protocol** to elect a new coordinator.
3. Timeout during `PRE-COMMITTED`:
	1. Follow an **election protocol** to elect a new coordinator.
### Termination Post-Election
1. The newly-elected coordinator sends `STATE-REQ` to all participants to find their state;
2. If:
	1. All `ABORT`, then globally abort;
	2. All `COMMIT`, then globally commit;
	3. Uncertain, then globally abort;
	4. Any `PRE_COMMIT` then send `PRE_COMMIT` followed by `GLOBAL_COMMIT`.
## Recovery
### Coordinator
1. Failure during `INITIAL`:
	1. Restart the commit procedure.
2. Timeout during `WAITING` or `PRE_COMMITTED`:
	1. Participants may have elected a new coordinator;
	2. Contact other sites to determine what happened.
3. Timeout during `DECIDED`:
	1. As in 2PC.
### Participant
1. Failure during `INITIAL`:
	1. Has not yet voted;
	2. Coordinator could not decide to commit;
	3. Unilaterally abort.
2. Timeout during `PREPARED`:
	1. Already voted to commit;
	2. Contact other sites.
3. Timeout during `PRE_COMMITTED`:
	1. Contact other sites.
4. Timeout during `ABORTED` or `COMMITTED`
	1. Already complete.

