#notes 

Given some text, we would like to determine if it was written by author 1 or author 2.
This is useful when their is *prior evidence* about authorship, such as a hypothesis that one of a small group of candidates wrote the text.
This relies on the idea that authors have subtly different writing tendencies.
![[Authorship Attribution.png]]
First see [[Principal Component Analysis]].

Pitfalls include:
+ Classifying correctly does not imply classification by *style*:
	+ It could be by *content*, or anything else correlated with features, including noise;
	+ It could be the *genre*;
	+ Models explainable with reference to features are desirable.
+ Not sampling enough independent samples from each author:
	+ Long segments can work, but we must ensure that testing uses only *entirely unseen texts* - not unseen samples from a seen text.
## Example
![[Authorship Attribution-1.png]]
![[Authorship Attribution-2.png]]
![[Authorship Attribution-3.png]]
![[Authorship Attribution-4.png]]
![[Authorship Attribution-5.png]]
