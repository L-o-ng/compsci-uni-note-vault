#notes 

TCP/IP fails on all 3 counts:
+ No confidentiality - every piece of information is plaintext by default;
+ No integrity - information can be modified in the packets, such as in an IP spoofing attack;
+ No availability - it is easy to flood the network or disrupt packets.
## Routing Protocol
How do 2 points in the network know how to contact each other?
+ **ARP** (*Address Resolution Protocol*): Associates each Ethernet address with an IP address.  
+ **BGP** (*Border Gateway Protocol*): Routing between different Autonomous Systems.  
If a routing point does not know the address of an entity, it broadcasts on the network a request to other entities if they know the address. There is no built-in mechanism to ensure that only the correct entities respond to that request. On the Internet, any message can be intercepted and modified.
