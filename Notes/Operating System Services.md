#notes 

An OS provides an environment for execution of program and services to programs and users.
One set of operating system services provides functions helpful to the **user**.
## User Services
### User Interface
Almost all operating systems have a User Interface, or UI. This can vary between a CLI, a GUI, a batch, etc.
### Program Execution
The system must be able to load a program into memory and to run that program and end execution, either normally or abnormally
### IO Operations
A running system may require IO, which may involve a file or IO device.
### Filesystem Manipulation
The filesystem is of particular interest. Programs need to read and write files and directories, create and delete them, search them, list information, and manage permissions.
### Communications
Processes need to be able to exchange information on the same computer or over several on a network. Communications may be via shared memory or through message passing, handled by packets moved by the OS.
### Error Detection
The OS needs to be constantly aware of possible errors:
+ These may occur in the CPU and memory hardware, in IO devices, or in user programs.
+ For each type of error, the OS needs to take the appropriate action to ensure correct and consistent computing.
+ Debugging facilities can greatly enhance the user's abilities to efficiently use the system.
## Program Services
Another set of OS functions exist for ensuring the efficient operation of the system itself via resource sharing.
### Resource Allocation
When multiple users/jobs are running concurrently, resources must be allocated to each of them.
### Accounting
Systems use accounting to keep track of the extent to which different users use system resources, and the type of resource used.
### Protection and security
The owners of information in a multi-user or networked computer system may want to control the use of that information; concurrent processes should not interfere with each other.
+ **Protection** involves ensuring that all access to system resources is controlled.
+ **Security** of the system from outsiders requires user authentication, extending to defending external IO devices from invalid access attempts.
