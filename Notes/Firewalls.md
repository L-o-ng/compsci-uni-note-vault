#notes 

A **firewall** is a system sitting between two networks, possibly reduced to a single host, able to block any packet. A firewall implements a set of rules, describing which packets should be accepted/denied.
A firewall combined with a [[Intrusion Detection Systems|NIDS]] is known as a Network Intrusion Prevention System.
A firewall is a [[Malicious Code#Reference Monitoring|Reference Monitor]], so should be NEAT:
+ There is no other connection between the two networks;
+ The set of rules can be analysed to detect anomalies;
+ It should not be switched off/ignore certain connections;
+ The rules cannot be modified by non-authorised users.
## Properties
+ **Packet Filtering**: The decision to accept/deny packets is based on the structure of the packet (IP/port source/destination, protocol);
	+ This can be used to create virtual networks, where no traffic can go from a specific machine to the outside, for example.
+ **Stateful**: The current state of the connection is also taken into account;
+ **Application-Aware**: The data relevant to the application layer is also taken into account.
## Policy Configuration
![[Firewall Policy Configuration.png]]
Given a packet, rules are sequentially applied until one is applicable.
+ **Shadowing**: Rule $R$ is *shadowed* by a previous rule $R'$ with a differing action when $R'$ matches all the packets that match $R$ - $R$ is never activated;
+ **Correlation**: $R$ and $R'$ are correlated if they have different actions, and $R$ matches some packets that match $R'$ and conversely;
+ **Generalisation**: $R$ is a *generalisation* of a previous rule $R'$ if they have different actions and if the first rule can match all the packets that match the second rule;
+ **Redundancy**: $R$ is redundant if there is a rule $R'$ with the same action such that if $R$ is removed, the policy is the same.
![[Firewall Config Example.png]]
## Limitations
+ The policy configuration can be complex and error-prone;
+ It is hard to inspect the content of an encrypted packet, and data can be *tunnelled*;
+ Only the traffic going in/out is monitored, and not internal traffic, so the network is still vulnerable to insider attacks;
+ The firewall is a single point of failure.
