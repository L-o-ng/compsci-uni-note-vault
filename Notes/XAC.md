#notes 

>Explainability can be seen as a measure of quality on the explanation graph that can be built around the different decisions made within the AC system.
## Well-Explained Security
### Specification

| Technique            | Aim                                           |
| -------------------- | --------------------------------------------- |
| Resource Event Agent | Comparing AC models with access requirements. |
| Manual Analysis      | Human-led review and comparison of AC models. |
### Design and Implementation

| Technique     | Aim                                                   |
| ------------- | ----------------------------------------------------- |
| UML Modelling | Visualising the structure and behaviour of AC models. |
| Visualisation | Supporting the authoring and editing of AC policies.  |
| Heuristics    | Systematically designing AC policies.                 |
| LLM           | Providing explicit implementation of AC policies.     |
### Testing

| Technique              | Aim                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------- |
| UML Modelling          | Visualising violations of constraints.                                                  |
| SAT Solver             | Automated verification of constraints.                                                  |
| SMT Solver             | Verification of AC policies against security properties.                                |
| Process Algebra        | Verification of AC policies against intended policy specification.                      |
| B Method               | Verification of AC models against constraints such as redundancies and inconsistencies. |
| Software V&V           | Verification and validation of AC system implementation.                                |
| Answer Set Programming | Automated verification against intended policy specifications.                          |
| Model Checker          | Automated verification of AC policy properties.                                         |
| Natural Language       | Reporting causes for anomalies - for example: a violated constraint.                    |
| Heuristics             | Systematically refining policy anomalies like redundancies and conflicts.               |
| Classification         | Verifying AC policies against intended specifications to identify anomalies.            |
### Access

| Technique               | Aim                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| Abductive Logic         | Identifying reasons behind an access request being denied and suggesting alternative means for access. |
| Causal Analysis         | Identifying reasons behind an access request being denied.                                             |
| Binary Decision Diagram | Searching paths that satisfy an access request.                                                        |
### Post Access
| Technique               | Aim                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| Visualisation           | Visualising enforced AC policies, comparing them to specified policies, and making adjustments. |
| Causal Analysis         | Measuring contributions of attributes to access decisions.                                      |
| Binary Decision Diagram | Exploring evaluation of all possible access requests.                                           |
| Natural Language        | Informing policy enforcement issues in collaborative authorisation and potential adjustments.   |
| XAI                     | Human-interpretable reasoning (e.g., EBMs and LIME) for access decisions.                       |
| Log Audit               | Tracing access events and investigating potential misuse.                                       |
