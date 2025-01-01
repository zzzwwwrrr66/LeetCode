/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let res = true;
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q || q.val !== p.val) {
    return false;
  }

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  console.log({ left, right });

  return left && right;
};
