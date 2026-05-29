#notes 

The **Network Time Protocol** (*NTP*) is a protocol used to synchronise the clocks of computers over a network. NTP uses a hierarchical structure of time servers called **stratum levels** to ensure that accurate times are propagated throughout the network.
![[Network Time Protocol.png]]
+ **Stratum 1 and 2**: Usually operated by research institutions or councils, and major ISPs;
+ **Stratum 3**: Usually operated by smaller data centres or ISPs;
+ Servers in stratum $i$ get messages from stratum $i-1$ to correct their clocks, based on the time in clocks of stratum $i-1$ servers and the transmission delay of sending messages between the two layers.
