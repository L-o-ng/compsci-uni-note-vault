#notes 

In **Hierarchical Deadlock Detection**:
+ Sites are organised into a binary hierarchy;
+ Sites send their *local* **wait-for graph** (*WFG*) to the deadlock detection site above them in the hierarchy:
	+ Level 1 (leaves): The sites themselves perform local deadlock detection;
	+ Level 2: Sites detecting deadlocks in pairs of sites of level 1;
	+ ...
	+ Root: Detects global deadlocks at all sites.

Now we have no dependency on a centralised site, increasing reliability and decreasing communication cost, but complexity is increased significantly.
![[Hierarchical Distributed Deadlock Detection.png]]