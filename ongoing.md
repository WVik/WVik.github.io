---
layout: page
title: Ongoing Projects
---

1. *Improved Changepoint Detection in Piecewise i.i.d Bandits*, Subhojyoti Mukherjee, Odalric-Ambrym Maillard (INRIA, Sequel Lab, Lille, France)

   * ### Abstract ###
   
      <details>
        <summary>
          Show details
        </summary>
          <p> We consider the setup of stochastic multi-armed bandits in the case when reward distributions are piecewise i.i.d. with unknown changepoints. Out of generality, we assume the reward distributions to be bounded and thus do not restrict to specific parametric exponential families. Due to the regret minimization objective, we study the change of mean, in the context when not only the change times are unknown, but also the mean before and after any change. We focus on the case when changes happen simultaneously on all arms, and in stark contrast with the existing literature, we target gap-dependent (as opposed to only gap-independent) regret bounds involving the magnitude of changes and optimality-gaps. We introduce two simple adaptations of UCB-strategies that employ scan-statistics in order to actively detect the changepoints, without knowing in advance the number of changepoints G. We also derive gap-independent regret bounds. The first strategy UCB-CPD does not know the time horizon T and achieve a O(√(GT)log T) regret bound, while the second strategy ImpCPD makes use of the knowledge of T to remove the log T dependency thereby closing an important gap with respect to the lower bound. Empirically, ImpCPD outperforms most of the passive and adaptive algorithms except the oracle-based algorithms that have access to the exact changepoints in all the considered environments.</p>
      </details>
    
2. *Online Stochastic Low-Rank Latent Bandits*, Subhojyoti Mukherjee, Branislav Kveton, Anup Rao, Zheng Wen

   * ### Abstract ###
   
      <details>
        <summary>
          Show details
        </summary>
          <p> We study the problem of recommending the best items to users who are coming sequentially. The learner has access to very less prior information about the users and it has to adapt quickly to the user preferences and suggest the best item to each user. Furthermore, we consider the setting where users are grouped into clusters and within each cluster the users have the same choice of the best item, even though their quality of preference may be different for the best item. These clusters along with the choice of the best item for each user are unknown to the learner.  Also, we assume that each user has a single best item preference. This complex problem can be conceptualized as a low rank stochastic bandit problem where the goal of the learner is to minimize the cumulative regret by quickly identifying the best item for each user. </p>
       </details>
