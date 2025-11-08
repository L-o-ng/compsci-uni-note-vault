#notes 

Subjects and objects have **identities**, which are needed to perform the actions in the system. Identities can correspond to individuals, groups, software, or hardware. This is an **abstraction** layer: actions are done on the claimed identities of the entities, not on their actual identities.
## Identity Management
+ **Identification**: When your identity is known;
+ **Authentication**: Verifying credentials;
+ **Authorisation**: A decision about which resources someone/something can use and what actions they can take;
+ **Auditing**: Logging who/what was identified/authenticated, and on which resources they performed an action.
### Identification
**Identification** is a process leading to disclose your identity to the system. It can be *active* or *passive*:
+ **Active**: typing in your username;
+ **Passive**: cameras, Bluetooth, transactions.

Identification is normally used as part of the authorisation process.
### Authentication
Authentication is a process that leads to **verifying** that the identity provided in the identification process is correct.
#### Confusion Matrices
A **confusion matrix** can be used to evaluate the accuracy of the authenticator:

|          | Accept                        | Reject                        |
| -------- | ----------------------------- | ----------------------------- |
| Genuine  | True Positive                 | False Negative (Type 1 Error) |
| Impostor | False Positive (Type 2 Error) | True Negative                 |
A perfect auth mechanism would correspond only to true positives and true negatives. However, there is no perfect mechanism: instead, it is a tradeoff between usability and security.
#### Authentication Categories
Credentials usually belong to the following categories:
+ **Something you know**: passwords, signal, etc;
+ **Something you have**: token, smartcard, etc;
+ **Something you are**: fingerprint, DNA, etc.
## Continuous Authentication
We can reduce **authentication fatigue** by avoiding repeatedly asking users to authenticate. Instead of a mechanism saying yes/no, each user is associated with a *current* authentication level that automatically *decays* with time, and can be increased either *actively* or *passively*. Authorisation mechanisms use this dynamic authentication level as input. Behavioural biometrics, and other passive authentication mechanisms (e.g., face detection, wireless devices) are particularly well suited for continuous authentication.
## OAuth
In distributed systems, user identity is required in *multiple* places. To avoid authentication fatigue, distributed systems can enforce **single sign-on** (SSO) mechanisms: the user authenticates only *once*, which produces an authentication token, which can be used *again* without requiring another authentication.
Initially using the **Security Assertion Markup Language** (SAML), the main standard is now **OpenID**. OpenID is an authentication protocol: the token received by the user only indicates their (certified) identity. Each sub-service might decide what their authorisation policies based on the identification token. 
In some cases, it might be useful to forward directly an authorisation token: OAuth!