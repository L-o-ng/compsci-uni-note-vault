#notes 

Inconsistent results are obtained from servers because of:
+ **Omission failures**: Crashes, failure to receive, failing to send, etc;
+ **Commission failures**: Processing a request incorrectly, corrupting local state, or sending an incorrect response due to hardware malfunction, software bugs, or malicious attacks.
## Fault Tolerance
We aim to provide a correct service despite there being process or server failures, to an extent.
Each replica is assumed to behave according to the specification of the distributed system, when they have not crashed.
A service based on replication is **correct** if:
+ **Failure Transparency**: It keeps responding despite failures;
+ **Re/Location Transparency**: If clients cannot tell between the service they obtain from an implementation with replicated data and the one provided by a single correct replica manager.

