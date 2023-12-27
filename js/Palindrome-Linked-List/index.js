/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  return values.toString() == values.reverse().toString();
};

console.log(isPalindrome({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }));
console.log(isPalindrome({ val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } }));
