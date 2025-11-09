#notes 

**Access Control** defines who is allowed to perform certain actions.
## Basic Model
A **subject** wants to access a **resource** for a particular **action**.
The corresponding **request** is submitted to the [[Malicious Code#Reference Monitoring|Reference Monitor]].
The reference monitor accepts/rejects the request based on an access control policy.
## Access Operations
**Subjects** are users, processes, organisations, etc. 
**Objects** are files, resources, processes, etc.
The main operations are:  
+ Read: look at the contents of the resource;
+ Write: change the contents of the resource;
+ Execute: use the capabilities of the resource.
Other operations:
+ Share a document (different from read), Identify another subject (tagging), Create a new document, Send an SMS, Charge a fee, etc.
## Workflow
+ Access Request - subject, resource, action;
+ **PEP** - policy enforcement point;
+ **PDP** - policy decision point;
+ Decision: permit, deny, not applicable, etc.
![[Access Control Workflow.png]]
## AC Matrix
A request is a triple $(s,o,a)$ and is granted if $a$ belongs to the access matrix entry corresponding to subject $s$ and object $o$.
![[AC Matrix.png]]
### AC List
Objects have an associated list of which subjects have which access rights. This is in effect just recording and maintaining the **columns** of the ACM.
### Capabilities List
One can provide subjects with **capabilities** (or credentials) showing what access rights they have on given objects. This is equivalent to maintaining the **rows** of the ACM.
## Intermediate Controls
We can introduce intermediate layers between subjects and objects to make policies more manageable.
### Groups
Subjects with similar access rights get placed into groups. Each file is associated with a single group. Permissions are associated with the groups rather than users.
`drwxr-x--x` refers to a directory which: the owner can read, write, and execute; the group can read and execute but not write; and the world can only execute.
### Role-Based Access Control
$U$ is the set of users; $S$ is the set of sessions; $R$ is the set of roles; $P$ is the set of permissions; $UA(u)$ refers to the roles assigned to the user $u$; $PA(r)$ refers to the permissions assigned to role $r$.
A user $u$ starts session $s$ and activates roles included in $UA(u(s))$.
The session $s$ can perform the permission $p$ if and only if there exists a role $r$ activated by $s$ such that $p$ is in $PA(r)$.
#### Extensions
+ **Role Hierarchy**: A role can be more senior that another role and inherits the permission of the junior role;
+ **Separation of Duty**: two given roles cannot be activated at the same time;
+ **Binding of Duty**: Two roles should be activated together or not at all;
+ **Administrative RBAC**: Some roles can assign and/or revoke some other roles to users.
## See Also
+ [[Bell LaPadula Access Control]]
+ [[Relationship-Based Access Control]]
+ [[Chinese Wall Access Control]]
+ 