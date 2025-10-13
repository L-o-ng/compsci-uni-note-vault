#notes 

A system provides a set of atomic actions. Actions can be composed together to create a **trace**, such as a file manager, calculator, etc. Security policies define which of these traces are secure. Malicious code execution is the execution of a trace which is possible, but not secure.
## Open and Closed Systems
A **closed** system has a predetermined set of possible traces. This can include systems such as a vending machine.
An **open** system has all actions enabled by default, but non-secure traces are detected at runtime and avoided. This can include systems like a desktop PC, or even security gates at a shop.
### Reference Monitoring
![[Reference Monitoring.png]]
In an open system, a reference monitor checks the traces.
It should be **NEAT**:
+ **N**on bypassable - it is not possible for a subject to access a resource without submitting a request to the monitor;
+ **E**valuable - it should be simple and specified well enough for its behaviour to be understood;
+ **A**lways-invoked - every submitted request should be evaluated;
+ **T**amperproof - it is not possible to evaluate the monitor.
## Malicious Code Execution
**Malicious code execution** is the execution of a trace that is not secure. It is usually accomplished by:
+ Locating/inserting malicious behaviour in/to the existing system;
+ Finding a way to jump from the normal, secure behaviour to the malicious code.
Malicious code execution is possible only when the reference monitor is not *NEAT*, since it allows the control flow to jump to malicious code.
+ It might be bypassed or not invoked, allowing the jump;
+ It might not have been evaluated, and might contain flaws;
+ It might have been tampered with.
## Types of Malicious Code
### Reverse Engineering
Reverse engineering is the process of understanding how a product works based on the final product, rather than on the source or specification.
A system is deconstructed and modified. This attack can open a closed system.

In a general form, a security check behaves as follows:
```
if check(input, condition) then
	execute_secure_code()
else 
	deny_and_raise_alarm()
endif
```

Several routes exist for an attacker:
+ Find a flaw in the function check so that input always checks condition;
+ Modify the condition or check so that the test is true;
+ Jump directly to execution, bypassing the check altogether.
### XSS
XSS, or *cross-site scripting* is used to modify the control flow of a system. Content is injected within the original content from the server to modify the client-side webpage. The end-user cannot tell the difference between the authentic and injected code.
#### SQL Injection
SQL queries typically take as input data from web forms; for example:
```
SELECT COUNT(*)
FROM 'users'
WHERE user = '$u' and password = '$p'
```
where `u` and `p` are fields of a form.
If the user inputs the empty string for the field `p` and the string `'or '1' = '1' --` for `u` then the query becomes:
```
SELECT COUNT(*)
FROM 'users'
WHERE user = '' or '1' = '1' -- ' and password = ''
```
Everything after `--` is ignored, so the query returns all users, leading to a count higher than 1, granting access without having the actual password.
### Hardware Attacks
Hardware attacks bypass the reference monitor altogether. This can include laser injection and BIOS/firmware flashing.
### Human Factors
Human-based attacks also bypass the reference monitor via social engineering. This can include attacks such as phishing or baiting.

