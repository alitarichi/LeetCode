/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //if list1 is empty, return list2
    if(!list1) {
        return list2;
    }
    // if list2 is empty, return list1
    if (!list2) {
        return list1;
    }
    //compare the values of the current nodes of list1 and list2
    if (list1.val < list2.val) {
        //if the value of list1 is smaller, set list1.next to the result of merging
        list1.next = mergeTwoLists(list1.next, list2)
        //returb list1
        return list1;
    }
    else {
        //if the value of list2 is smaller or  equal, set list2.next to the result of merging list1 and list2.mext recursivly
        list2.next = mergeTwoLists(list1, list2.next);
        //return list2
        return list2;
    }
};