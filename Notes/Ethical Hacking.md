#notes 

Use a VM to set up a home lab with a bespoke OS, such as Kali, DVWA, Metasploitable, ...
## Ethical Hacking Phases
### 1 - Reconnaissance
In this phase, any relevant information (personal data, network configuration, etc) is collected via active and passive approaches.
#### Tools
+ Nmap
+ Whois
+ Maltego
#### Techniques
+ Open-Source Intelligence (OSINT)
+ Google Dorking
+ Whois Lookup
+ Social Engineering
+ Network Scanning
### 2 - Scanning
In this phase, actionable details about potential access points is obtained.
#### Tools
+ Nessus
+ OpenVAS
+ Angry IP Scanner
+ nmap
+ Wireshark
#### Techniques
+ Port Scanning
+ Vulnerability Scanning
+ Network Mapping
+ Banner Grabbing
+ Ping Sweeps

Note that scanning can be a multi-step process, and you can only scan inner systems after gaining access.
### 3 - Gaining Access
In this phase, potential vulnerabilities are used to gain access to the system.
#### Tools
+ Metasploit
+ SQLmap
+ Hydra
#### Techniques
+ Password Cracking
+ Exploration of Vulnerabilities
+ SQL Injection 
+ Buffer Overflows
+ XSS
+ Privilege Escalation
+ Session Hijacking
+ Man in the Middle Attacks
### 4 - Maintaining Access
In this phase, more permanent access is established so the time consuming and risky access-gaining phase need not be repeated.
#### Tools
+ Netcat
+ Ngrok
+ Empire
#### Techniques
+ Installing Backdoors
+ Creating Hidden User Accounts
+ SSH Tunneling
+ Keystroke Logging
+ Trojan Horses
### 5 - Clearing Tracks
In this phase, all traces of access are cleared, such as logs and history files (`.bash_history`).
#### Tools
+ Ccleaner
+ Stealth Rootkit
+ Timestomp
#### Techniques
+ Log Tampering
+ Steganography
+ File Timestamp Alteration
+ Clearing Command Histories
+ Encryption

This step is important if ethical hacking is practiced as a team.