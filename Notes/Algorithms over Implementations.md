#notes 

Suppose we are focused on the *implementations* of algorithms; time:
+ varies according to the language;
+ depends upon the compiler used;
+ depends upon the system hardware.

We therefore make the following decision:

>We work **only** with algorithms in the strong expectation that our analysis will be **machine-independent** but still closely related to and reflective of the time taken by **any** implementation of the algorithm on **any** given processor.

This focus on algorithms and *not* implementations is in keeping with the usage of [[Pseudo-code]], and its independence of any programming language and processor.

---

So, our algorithms have a life of their own outside any implementation:
+ They are the artefacts that we work with.
+ We are interested in *algorithmic* improvements, not just implementation tweaks or hardware gains.