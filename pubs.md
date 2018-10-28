---
layout: page
title: Publications
---


# Peer-reviewed Conferences 

1. *"Efficient UCBV: An Almost Optimal Algorithm using Variance Estimates"*, Subhojyoti Mukherjee, K.P. Naveen, Nandan Sudarsanam, and Balaraman Ravindran, **Proceedings of the Thirty-Second Association for the Advancement of Artificial Intelligence (AAAI-18)**.

   * ### Abstract ###
   
      <details>
        <summary>
          Show details
        </summary>
          <p>We propose a novel variant of the UCB algorithm (referred to as Efficient-UCB-Variance (EUCBV)) for minimizing cumulative regret in the stochastic multi-armed bandit (MAB) setting. EUCBV incorporates the arm elimination strategy proposed in UCB-Improved while taking into account the variance estimates to compute the arms' confidence bounds, similar to UCBV. Through a theoretical analysis, we establish the *gap-dependent* regret bound of EUCBV after T trials and this bound is an improvement over that of existing state-of-the-art UCB algorithms (such as UCB1, UCB-Improved, UCBV,  MOSS). Further, EUCBV incurs an order optimal *gap-independent* regret bound of which is an improvement over that of UCB1, UCBV, and UCB-Improved, while being comparable with that of MOSS and OCUCB. Through an extensive numerical study, we show that EUCBV significantly outperforms the popular UCB variants (like MOSS, OCUCB, etc.) as well as Thompson sampling and Bayes-UCB algorithms.</p>
      </details>
   
   * ### Full Paper ###
   
      [**PDF**](https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16111)

2. *"Thresholding Bandits with Augmented UCB"*, Subhojyoti Mukherjee, K. P. Naveen, Nandan Sudarsanam, Balaraman Ravindran, **Proceedings of the Twenty-Sixth International Joint Conference on Artificial Intelligence (IJCAI-17)**.
   
   * ### Abstract ###
   
      <details>
      <summary>
          Show details
      </summary>
        <p>In this paper we propose the Augmented-UCB (AugUCB) algorithm for a fixed-budget version of the thresholding bandit problem  (TBP), where the objective is to identify a set of arms whose quality is above a threshold. A key feature of AugUCB is that it uses both  mean and variance estimates to eliminate arms that have been sufficiently explored; to the best of our knowledge, this is the first algorithm to employ such an approach for the considered TBP. Theoretically, we obtain an upper bound on the loss (probability of misclassification) incurred by AugUCB. Although UCBEV in literature provides a better guarantee, it is important to emphasize that UCBEV has access to problem complexity (whose computation requires arms’ mean and variances), and hence is not realistic in practice; this is in contrast to AugUCB whose implementation does not require any such complexity inputs. We conduct extensive simulation experiments to validate the performance of AugUCB. Through our simulation work, we establish that AugUCB, owing to its utilization of variance estimates, performs significantly better than the state-of-the-art APT, CSAR and other nonvariance-based algorithms.</p>
        </details>
   * ### Full Paper ###  
   
      [**PDF**](https://www.ijcai.org/proceedings/2017/0350.pdf)
