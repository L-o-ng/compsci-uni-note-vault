#notes 

The best way to sample data is to pick up only one option, rather than being lost in information overload or spending too much time finding the potentially nonexistent "best" option.

We want the minimum amount of data containing sufficient information required to learn properly from the phenomenon without wasting time. One way is to reduce information redundancy that doesn't give us useful information or doesn't contain any business value for a particular task.
## Ensuring Sample Completeness
We can perform a high-level comparison between our sample and another sample, or the whole population, to check if the chosen sample is representative;
Instead of learning from a large dataset, we could just make a sub-sampling of it, yet keeping all the statistics intact.

Sampling data is a compromise - select too few and there is not enough information to learn from; too many and it becomes increasingly time-consuming.
## Approaches
1. We can sample to keep the probability distribution of the population under a reasonable significant level;
2. We can look at the histogram of the sample and ensure it to be the same as the histogram of the population;
### Multivariate Data
If out dataset is multivariate, especially if there is a mix of quantitative and qualitative data, we need to consider each variable separately. If each one of the single univariate histograms of the sample's columns is comparable with the correspondent histogram of the whole population's columns, we can assume the sample is unbiased.
## Comparing a Sample Against the Whole Population
We can test a *null* hypothesis - that the frequency distribution of certain instances in a sample is consistent with the whole population of the dataset. In the multivariate case, all the variables must be significative, and we reject the null hypothesis if the p-value of at least one of the tests is lower that the usual 5% significance level.
## Imbalanced Data
In a dataset with a majority and minority class, we have a few issues that may arise in a trained model.
+ There is not enough learned from the minority class. We have a low detection efficiency but often the minority class is the one of interest.
+ Misleadingly high accuracy - this does not mean the model performs well, just that it reflects the underlying skewed distribution.

It is very common that datasets will not have an equal number of examples in each class.
### Combating an Imbalanced Dataset
Start first by training on the true dataset - the trained model may still generalise well. If not:
1. Down-sample - train the model on a disproportionately low subset of the majority class;
2. Up-weight - add an example weight to the down-sampled class equal to the factor by which the class was down-sampled.
