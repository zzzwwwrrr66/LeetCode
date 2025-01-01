from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        for i in range(len(cost) - 3, -1, -1):
            cost[i] += min(cost[i + 1], cost[i + 2])

        return min(cost[0], cost[1])


s = Solution()

s.minCostClimbingStairs([10, 15])
s.minCostClimbingStairs([10, 15, 20])
s.minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
