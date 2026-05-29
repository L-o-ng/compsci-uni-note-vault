#notes 

**Virtualisation** is a technology that allows the creation of virtual *representations* of servers and other physical machines. *Virtual* software mimics the functions of physical hardware to run multiple virtual machines **simultaneously** on a single physical machine. 
This has many advantages:
+ Hardware *changes* faster than software;
+ Ease of *portability* and code migration;
+ *Isolation* of failing or attacked components.

![[Virtualisation.png]]
For example, here $A$ could be an older system running on the newer system $B$.
## Interfaces
There are four types of interfaces at three different levels.
![[Virtualisation-1.png]]
1. **Instruction Set Architecture**: The set of machine instructions, with two subsets:
	1. **Privileged Instructions**: Allowed only to be executed by the OS;
	2. **General Instructions**: Can be executed by any program.
2. **System Calls**: Offered by an OS;
3. **Library Calls**/**Application Programming Interface** (*API*).

We obtain different forms of virtualisation depending on what is mimicked.
## Virtual Machines
**Virtual Machines** (*VM*s) are used for virtualisation of resources in *cloud computing* systems.

A **virtual appliance** is a pre-configured VM with an OS and apps pre-installed. They can just be downloaded and run.

For example, on a multi-core CPU, multiple VMs can be run, and each assigned a vCPU. We can map each vCPU to a physical CPU core.
### In Data Centres
Data centres host **virtual servers**, which allow faster deployment and easier maintenance:
+ We slice the physical server into VMs;
+ Each VM has its own OS and applications;
+ VM migration is within a LAN;
+ Each VM has a public IP for external communication and a private IP to communicate between VMs.
### Infrastructure as a Service (IaaS) Cloud
Instead of renting out a physical machine, a cloud provider will rent out a VM that may share a physical machine with other customers. Almost complete isolation between customers can be achieved.