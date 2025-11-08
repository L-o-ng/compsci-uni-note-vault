#notes 

A NIDS monitors a network and detects suspicious network flows.
A NIDS combined with a [[Firewalls|Firewall]] is known as a Network Intrusion Prevention System.
There are 2 main types:
+ **Signature-Based**: The NIDS matches the network flows with signatures of known attacks.
+ **Anomaly-Based**: The NIDS first records the normal behaviour of the network, and then detects flows deviating from the norm.
## Host Intrusion Detection System
A HIDS is installed on a single machine and analyses its logs, detecting insider attacks.
It can be combined with other methods for detecting malicious code.

HIDS and NIDS are complementary tools and an ideal solution should use a range of techniques.
