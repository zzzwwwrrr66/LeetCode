/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const partition = [];
  const dfs = (node) => {
    if (node.left) {
      dfs(node.left);
    }
    partition.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
  };
  dfs(root);

  return partition[k - 1];
};
