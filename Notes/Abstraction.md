#notes

Problems solved in computer science are *not* the real world problems, but **abstractions** of these problems, where these abstractions:
+ need to be represented and manipulated inside a computer.
+ mirror reality sufficiently closely so that any conclusions remain valid in real life.

Abstraction tends to be **multilayered** and more concerned with information hiding than information neglect.

Also note that abstractions should not be confused with **models**. Abstractions are used to facilitate knowledge acquisition about an underlying concrete reality.
## Example
We might abstract the **internet** as a collection of *nodes*, interconnected by *channels*, along which they can send and receive *messages*.
	This might suffice if we were only interested in nodes communicating.
	But what if **time taken** was important?
Now we need to abstract each node as a *processing device* which *takes inputs, processes them, and provides outputs* and takes time to do so.
We need to associate *time* with each channel.
	But what if time taken depended upon message size or node congestion?
Now we need to abstract each channel as consisting of *buffers*, in which portions of messages are stored, and nodes as *input-output devices*, with a strategy for dealing with incoming messages.
	But what if the nodes generate their own messages as well as passing on messages in transit?
And so on: concerns can be separated in a large and complex task using abstraction.


