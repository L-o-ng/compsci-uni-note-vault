#notes 

The **Kernel** is the underlying program that runs for the full uptime of the current OS session.
## Privileges
The kernel runs in **privileged mode**. It contains only fundamental functionality:
+ Whatever is required to implement other services;
+ Whatever is required to provide security.
Applications run on the [[Operating Systems|OS]] - they should not be able to interfere with the kernel or bypass the OS in any way, both for security and so the OS can handle resource management properly.
