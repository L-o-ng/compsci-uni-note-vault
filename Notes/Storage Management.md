#notes 
![[Disk Platter.png]]
## Definitions
+ **Seek Time** - time taken to move the head to the target track;
+ **Rotational Delay** - time taken waiting for the target sector to rotate under the head;
+ **Access Time** - seek time + latency;
+ **Disk Bandwidth** - The total number of bytes transferred, divided by the total time between the first request for service and the completion of the last transfer;
## Disk Scheduling
The OS is responsible for using hardware effectively. In this case, this means having a fast disk access time. The OS maintains a queue of requests, per disk or service. An idle disk can immediately work on an IO request, and a busy disk means work can queue. Optimisation algorithms exist to schedule the servicing of IO requests to the disk.
We illustrate scheduling algorithms with a **request queue**.
## Algorithms
### FCFS
![[Disk IO FCFS.png]]
This has a total head movement of 640 cylinders.
### SSTF
**Shortest Seek Time First** selects the request with the minimum seek time from the current head position. This can *starve* some requests.
![[Disk IO SSTF.png]]
This has a total head movement of 236 cylinders.
### SCAN/Elevator
The disk arm starts at one end of the disk and moves towards the other end, servicing requests until it reaches the other end, where the head movement is reversed. If requests are uniformly dense, then the largest density will always be at the other end of the disk and so this will wait the longest.
![[Disk IO SCAN.png]]
This has a total head movement of 236 cylinders.
### CSCAN
The head moves from one end of the disk to the other, but when it reaches the other end, it immediately returns to the beginning without servicing requests along the way.
This provides a more uniform wait time than SCAN.
![[Disk IO CSCAN.png]]
### LOOK and CLOOK
These are versions of SCAN and CSCAN that have the head only move across the disk as far as the last request in each direction, then reversing movement immediately.
![[Disk IO CLOOK.png]]
## Selecting an Algorithm
+ SSTF is common and has a natural appeal.
+ SCAN and CSCAN perform better for systems with high disk load. This results in less starvation.
## Storage Array
A storage array allows many disks to be attached to the same system. The array has controller(s) providing features to attached host(s):
+ Ports to connect hosts to the array;
+ Memory and controlling software;
+ Up to thousands of disks;
+ RAID, hot-spares/swaps;
+ Shared storage -> more efficiency.
### Storage Area Network
![[SAN.png]]
This is common in large storage environments. Multiple hosts connected to multiple storage arrays provides flexibility.
### Network Attached Storage
**Network Attached Storage** is storage made available over a network rather than over a local connection like a bus. This is usually implemented via RPC calls between the host and storage typically over TCP/UDP on an IP network.
![[NAS.png]]
