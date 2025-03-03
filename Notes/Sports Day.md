#definition 

Consider the following:
+ It is school sports day:
	+ All the different events have to be scheduled at various times throughout the day.
	+ Time slots are of 30 minutes duration and each event takes 30 minutes.
	+ It is possible, and preferable, to have different events occurring at the same time, subject to the availability of different athletes.
+ The guest of honour will be visiting the sports day during the first slot at noon.
	+ You wish to schedule the maximum number of events during this slot.
+ ==What is this maximum number of events that you can schedule in this slot?==
+ ==Given that you schedule this maximu] number of events,==
	+ **What is the earliest time sports day can finish**

	Note that **not all schedules are equal!**
## Abstraction
The sports day problem can be abstracted as a graph $G=(V,E)$
+ Vertices of $V$ consist of the different events.
+ Edges $(u,v)\in E$ if there is some athlete who wishes to participate in both the event corresponding to vertex $u$ and $v$.
## Solution
![[Sports day maximum independent set.png]]
In order to maximise the number of events scheduled for noon, we need to find a **maximum independent set** of $G$:
+ Or, a largest subset $U \subseteq V$ so that no vertex in $U$ is joined by an edge to any other vertex of $U$.
Having found this set:
+ We might remove these vertices from $V$ alongside all incident edges.
+ Then, we can colour the vertices of the remaining graph with as few colours as possible.
+ We can then schedule all same-coloured events at the same time.
+ Thus, if the minimal number of colours required is $m$ then we can finish $30+30m$ minutes after noon.
But how hard is it to do this? See [[Finding Independent Sets]]

