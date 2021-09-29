export { rob };
import { ListNode } from "../../../classes/ListNode.mjs";
/**
 * @param {numbers[]} nums
 * @returns {number}
 */
const rob = function(nums) {
    switch (nums.length) {
        case 1: return nums[0];
        case 2: return Math.max(nums[0], nums[1]);
        case 3: return Math.max(nums[0] + nums[2], nums[1]);
    }
    // const myMap = new Array(nums.length).fill(0);
    // const myMap = new Array(3).fill(0);
    // myMap[0] = nums[0];
    // myMap[1] = nums[1];
    // myMap[2] = nums[0] + nums[2];
    const node2 = new ListNode(nums[0] + nums[2], null);
    const node1 = new ListNode(nums[1], node2);
    let node0 = new ListNode(nums[0], node1);
    for (let i = 3; i < nums.length; i++) {
        // myMap[i] = Math.max(myMap[i - 3], myMap[i - 2]) + nums[i];
        // myMap.push(Math.max(myMap[0], myMap[1]) + nums[i]);
        // myMap.shift();
        const node = new ListNode(Math.max(node0.val, node0.next.val) + nums[i], null);
        node0.next.next.next = node;
        node0 = node0.next;
    }
    // return Math.max(myMap[nums.length - 2], myMap[nums.length - 1]);
    // return Math.max(myMap[1], myMap[2]);
    return Math.max(node0.next.val, node0.next.next.val);
}
