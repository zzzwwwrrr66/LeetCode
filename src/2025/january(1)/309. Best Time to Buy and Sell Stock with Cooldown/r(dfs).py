from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        def dfs(i, buying):
            if i >= len(prices):
                return 0

            cooldown = dfs(i + 1, buying)
            if buying:
                buy = dfs(i + 1, not buying) - prices[i]
                return max(buy, cooldown)
            else:
                sell = dfs(i + 2, not buying) + prices[i]
                return max(sell, cooldown)

        return dfs(0, True)


s = Solution()

print(s.maxProfit([1, 2, 3, 0, 2]))  # 3
# s.maxProfit([1])  # 0
