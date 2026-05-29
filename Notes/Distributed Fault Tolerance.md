#notes 

**Fault Tolerance** is the ability of the system to continue *error* free operation even in the presence of an unexpected fault.

| Term    | Desription.                                     | Example           |
| ------- | ----------------------------------------------- | ----------------- |
| Failure | A component is not meeting its specifications.  | Crashed program   |
| Error   | Part of a component that can lead to a failure. | Programming bug   |
| Fault   | Cause of an error.                              | Sloppy programmer |
## Quality
### Reliability
**Reliability** is the time duration without failure. It is the extent to which a system yields expected results on repeated trials. It is measured by the **mean time between failures** (*MTBF*).
### Availability
**Availability** is the percentage of time being ready to use. It is the fraction of time the system yields expected results.
$$
A=\frac{MTBF}{MTBF+MTTR}
$$
Where $MTTR$ is **mean time to repair**.
## Types of Failure

| Type                     | Description of Behaviour                              |
| ------------------------ | ----------------------------------------------------- |
| Crash Failure            | Halts, but is working correctly until it halts.       |
| Omission Failure         | Fails to take an action that should have been taken.  |
| Recieve Omission         | Fails to receive messages.                            |
| Send Omission            | Fails to send messages.                               |
| Timing Failure           | Responses lie outside a specified time interval.      |
| Response Failure         | Response is incorrect.                                |
| Value Failure            | The value of the response is wrong.                   |
| State-Transition Failure | Deviation from the flow of control.                   |
| Commission Failure       | A component takes an action it should not have.       |
| Arbitrary Failure        | Production of arbitrary responses at arbitrary times. |
## Redundancy
We add **redundancy** by [[Replication]] to increase **reliability**.
### Time
We design a system such that an action can be performed again if anything went wrong. This is typically used when faults are *transient* or *intermittent*.

By performing the same operation multiple times:
+ We ensure no faults on repeated responses;
+ We can detect temporary faults (but not permanent ones);
+ There is an impact on performance.
### Component
We replicate components and compare the outputs, by introducing two or more independently running components providing the same functionality. This imposes little to no performance impact.
#### N-Version Programming
We add **design diversity** by implementing multiple versions of the program.
We can tolerate hardware and software faults, but not correlated faults.
![[Distributed Fault Tolerance.png]]
### Information
We add extra data to transmissions so that errors can be recovered from when bits experience interference. This includes parity bits and checksums.

Less hardware is required than component replication, and fault detection is supported.
Complexity is added, and fault recovery is limited.