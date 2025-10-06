#linker 
## Notes
+ [[STRIDE Threat Classification]]
+ [[Applied Cryptography]]
+ 
## Terminology
+ A **subject** has an *identity* and some *capabilities*;
+ A **resource** has an *identity* and some *properties*;
+ A **system** connects entities and has a *purpose*;
+ An **action** is an interaction between *subjects* and *resources*.

There are 3 main security properties, known as the **CIA Triad**:
+ **Confidentiality**: the outcomes of different actions in the system are only visible by authorised subjects;
+ **Integrity**: actions modifying the system can only be performed by authorised subjects
+ **Availability**: subjects can perform all actions they are authorised for.

+ **Risk Modelling** describes the possible attacks and adversaries;
+ **Identification/Authentication** ensures the identity of entities;
+ **Access Control** describes which actions are secure.
## Actions
+ An action from a subject to a resource is called **storage**.
+ An action from a resource to a subject is called a **disclosure**.
+ An action from a subject to a subject is called **communication**.
+ An action from a resource to a resource is called a **program**.
Access control and cryptography focus on controlling *storage* and *disclosure*.
Protocols and network security focus on *communication* security.
Malicious code execution exploits *program* security.
## Threats, Vulnerabilities, Attacks
+ **Vulnerability**: a *flaw* in the system that makes it possible for a threat to occur. This can be hardware, software, or human-based.
+ **Exploit**: a concrete way or taking advantage of a vulnerability;
+ **Threat**: a way of causing damage to a system;
+ **Attack**: the realisation of a *threat* through the *exploitation* of one or more *vulnerabilities*.
### Vulnerability Life-cycle
![[Vulnerability Life Cycle.png]]
+ **Black Risk**: Only the discovery group is aware;
+ **Grey Risk**: Public is aware, but no patch is available;
+ **White Risk**: Public should patch their system;
+ **Zero Day**: Exploit is available at the time of disclosure.
