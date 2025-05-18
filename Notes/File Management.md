#notes 

The concept of a **filesystem** is a contiguous local address space, consisting of file of many types:
+ Data:
	+ Numeric;
	+ Character;
	+ Binary.
+ Program.
The contents are defined by the file creator.
## File Attributes
+ Name - this is the only information kept in human-readable form;
+ Identifier - a unique tag which identifies the file within the filesystem;
+ Type - needed for systems that support different types;
+ Location - a pointer to the file location;
+ Size - current file size;
+ Protection - Controls read/write/execute permissions;
+ Time/Date/User identification - data for protection, security, and usage monitoring.
This information is stored in the directory structure, which is maintained on the disk.
## File Operations
+ Create;
+ Read;
+ Write;
+ Reposition within file;
+ Delete;
+ Open;
+ Close.
### Opening Files
Several pieces of data are needed to manage open files:
+ **Open-file table** - This tracks open files;
+ **File Pointer** - A pointer to the last read/write location, per process that has the file open;
+ **File-open count** - A counter of the number of times a file is open to allow removal of data from open-file table when the last process closes it;
+ **File disk location** - cache of data access information;
+ **Access rights** - per-process access mode information.
## File Structure
+ None - sequence of words or bytes;
+ Simple record structure:
	+ Lines;
	+ Fixed length;
	+ Variable length.
+ Complex structures:
	+ Formatted document;
	+ Relocatable load file.
The OS/program decides on the structure.
## Access Methods
### Sequential Access
```
read next
write next
reset 
// no read after last write
```
![[Sequential Access File.png]]
### Direct Access
In direct access, a file is a fixed-length logical record.
```
read n
write n
position to n
	read next
	write next
rewrite n
```
Here $n$ refers to the relative block number. This allows the OS to decide where the file is placed.
### Simulation of Sequential Access on a Direct Access File

| Sequential Access | Direct Access Implementation |
| ----------------- | ---------------------------- |
| `reset`           | `cp = 0`                     |
| `read next`       | `read cp`<br>`cp = cp + 1`   |
| `write next`      | `write cp`<br>`cp = cp + 1`  |
### Index/Relative File
![[Index and Relative File Access.png]]
### Directory
A collection of nodes containing information about all files.
![[Directory File Access.png]]
Both the directory structure and files reside on disk.
## Disk Structure
Disks can be subdivided into **partitions** (minidisks/slices).
Disks or partitions can be [[RAID]] protected against failure.
A disk or partition can also be used **raw** - without a filesystem - or formatted with a filesystem.
### Typical Filesystem Organisation
![[Filesystem Organisation.png]]
### Directory Organisation
The directory is organised logically to obtain:
+ Efficiency in locating files;
+ Naming to provide convenience:
	+ Two users can have the same name for different files;
	+ The same file can have several different names.
+ Grouping to allow sorting and filtering by property.
#### Single-Level Directory
![[Single-Level Directory.png]]
There is one directory for all users.
This results in a naming and grouping problem.
#### Two-Level Directory
![[Two-Level Directory.png]]
There is a separate directory for each user.
This gives path names, allowing different users to use the same filenames. Searching is efficient but there is no grouping.
#### Tree-Structured Directory
![[Tree-Structured Directory.png]]
## File Sharing
Sharing files on multi-user systems is desirable. This can be achieved with a **protection** scheme. On distributed systems, files may be shared across a network. NFS (network file system) is a common file sharing method.

On a multi-user system:
+ User IDs identify users, allowing permissions/protections to be per-user.
+ Group IDs allow users to be in groups, permitting group access rights.
### File Security
The file owner should be able to control what can be done with the file and by whom.
