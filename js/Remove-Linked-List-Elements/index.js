/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const util = require("util");

const removeElements = function (head, val) {
  let current = head;
  while (current && current.next) {
    if (current.next.val == val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  if (head && head.val == val) {
    head = head.next;
  }
  return head;
};

const res = removeElements({ val: 4, next: { val: 4, next: { val: 2, next: { val: 4, next: null } } } }, 4);
console.log(util.inspect(res, false, null, true));
