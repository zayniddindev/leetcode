/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let length = 0;
  let _head = Object.assign({}, head);
  while (_head) {
    length++;
    _head = _head.next;
  }

  const middle = length % 2 == 1 ? Math.ceil(length / 2) : length / 2 + 1;
  let index = 0;
  while (head) {
    index++;
    if (index == middle) return head.val;
    head = head.next;
  }
};

console.log(middleNode({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }));
console.log(middleNode({ val: 1, next: { val: 2, next: { val: 3, next: null } } }));
