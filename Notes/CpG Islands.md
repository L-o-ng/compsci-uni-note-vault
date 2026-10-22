#notes 

**CpG**, or *C phosphate G*, is the dinucleotide C-followed-by-G on the same DNA strand.
Genome-wide, this is **rarer** than chance would predict, as:
+ Often the C is **methylated**: an epigenetic methyl group is attached to the C which controls whether that gene is *active*, which can be used to differentiate tissues by controlling which are active and thus which proteins are transcribed;
+ Methylated-C tends to mutate to T over time;
+ Ordinary C deaminates to U. Repair enzymes spot it and fix it reliably; The above mutation is a normal DNA base, so is repaired less reliably, and is often kept.

This effect is much *weaker* in certain regions, often around gene promoters, or the start of active genes.
These CG-rich regions are called **CpG Islands**.
## Modelling CpG Islands
Rather than one transition matrix for the whole chain, we propose two separate Markov chains:
1. $M^{+}$: Island regions;
2. $M^{-}$: Bulk sequence.

We can estimate the two matrices by maximum likelihood from labelled data.
## Log-Odds Test for CpG Islands
See [[Probabilistic Models for Alignment#Scoring]].

Given an unknown segment of data, we can test whether it is more likely to be an island or regular region. We compare the two models with a log-odds ratio.
For $\mathbf{x}=x_{1}\dots x_{L}$:
$$
\operatorname{RATIO}(x)=\log\left[ \frac{P(x|M^{+})}{P(x|M^{-})} \right]=\sum_{i}\log\left[ \frac{m^{+}\{ x_{(i-1)},x_{i} \}}{m^{-}\{ x_{(i-1)},x_{i} \}} \right]
$$
If:
+ $\operatorname{RATIO}>0: \mathbf{x}$ looks more like a CpG Island;
+ $\operatorname{RATIO}<0: \mathbf{x}$ looks more like an ordinary sequence.

This only tests one fixed-length window at a time. It cannot *locate* island boundaries within one long sequence. That needs a model that can switch behaviour along the sequence: a [[Hidden Markov Models|Hidden Markov Model]].
