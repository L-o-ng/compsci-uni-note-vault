#notes 
## Circuit Switching
Two network nodes establish a **dedicated communication channel** called a circuit before they communicate. Users remain connected until the session terminates. This is commonly used in traditional telephone networks.
## Packet Switching
Two network nodes do *not* establish a circuit. Transmission links are **shared** by **multiple users**. End devices break application data into small pieces to use transmission links more efficiently. Different pieces then may take different paths to reach the destinations.
## OSI Reference Model
The OSI model, or **Open Systems Interconnection Model**, looks as follows:
![[OSI Model.png]]
Each layer provides some functionality to the upper layers and relies on the lower layers. Upper layers are more concerned with user services and applications. Lower layers are more concerned with hardware and data transmission.

| Layer        | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| Application  | Emails, browsers, file transfer, etc.                                        |
| Presentation | Translate data formats, encryption/decryption.                               |
| Session      | Establish/terminate a session, sync nodes.                                   |
| Transport    | Supports communications between diverse application across diverse networks. |
| Network      | Determine the best path through the network.                                 |
| Data-link    | Define frames, detect and manage collisions, error detection.                |
| Physical     | Manage physical medium and signal transmissions.                             |
Note that this is not the actual network. It is only a representation of a network operation.
This model has several **advantages**:
+ Preventing technology or capability changes in one layer from affecting others;
+ Providing a common language to describe networking functions and capabilities;
+ Assisting in protocol design:
	+ Protocols at different layers work together to form a protocol suite.
### Encapsulation
![[OSI 1.png]]
### De-Encapsulation
![[OSI 2.png]]
### TCP/IP Model
![[OSI 3.png]]
## Network Structure
### Network Edge
+ **End Devices**: Clients and servers;
+ **Client**: Various traditional and modern smart user devices;
+ **Server**: Often in data centres.
### Network Core
+ Mesh of interconnected *routers*;
+ Packets travel from one router to the next across links in their path from source to destination.

Data is broken into pieces at network edges. **Packet switching** enables multiple network edges to share the network core.
## Routing and Forwarding
+ **Routing**: routers determine the next hop on which to send a piece of data;
+ **Forwarding**: Intermediary network devices move a piece of data from one interface to another.
### Routing
Routing algorithms select the best paths for packets to reach the destinations. Routers record the next hops and associated interfaces in their routing tables.
![[Routing Tables.png]]
### Forwarding
![[Forwarding.png]]
## Switches
1. The switch checks if the source address is in the table. If not, the source address and port are added to the switching table;
2. The destination address is inspected. If the port associated with the address is not in the table, it is forwarded to all ports but the input;
3. Only the real destination will process the packet. All other nodes will discard it;

If the destination address **is** in the table, it is forwarded to that port only.
## Delay
**Store and Forward** is a communications technique in which an intermediary device keeps information and sends it at a later time to the destination or another intermediary device.
### Nodal Processing Delay
This delay is made up of the time spent on checking **bit errors** and determining the **output link**. Intermediary devices generate these delays.
### Queuing Delay
This delay happens at *routers*. If the data input rate exceeds the output rate for a period of time, packets will *queue*, **waiting** to be transmitted on the link. If a queue buffer fills up, packets can be **dropped**. A lost packet may be **retransmitted** by the previous node, by the source, or not at all.
### Transmission Delay
This delay is the amount of time required to push all the bits in a piece of data onto the wire.
![[Transmission Delay.png]]
### Propagation Delay
This delay defines the time taken travelling through the medium in seconds.
### Formula
A packet delay $d_{p}$ is formulated as:
$$
d_{p}=d_{proc}+d_{queue}+d_{trans}+d_{prop}
$$

| Delay                              | Description                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| $d_{proc}$: nodal processing delay | Checking bit errors, determining the output link. Typically <1ms.                                                   |
| $d_{queue}$: queuing delay         | Time waiting for transmission. Length depends on traffic.                                                           |
| $d_{trans}$: transmission delay    | We have packet length $L$ in bits, and link bandwidth $R$ in bits/s. $d_{trans}=\frac{L}{R}$.                       |
| $d_{prop}$: propagation delay      | We have physical link length $d$, and propagation speed $s$ (roughly $2\times 10^{8}m /s$). $d_{prop}=\frac{d}{s}$. |
