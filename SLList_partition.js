// Instructions:
// Given the first node in a singly linked list, locate the first
// node with a given value (val).  All nodes with values less than
// that value should be moved to the left of the that node, and
// all nodes with greater values should be moved to the right.
// Otherwise, original order need not be preserved.
// Return the new head node.

function partition(node, val) {
    var valnode = null;
    var temp = null;
    var current = node;
    // Execute shorter function if first node contains val
    if (current.value == val) {
        while (current.next) {
            while (current.next.value < val) {
                temp = current.next;
                current.next = current.next.next;
                temp.next = node;
                node = temp;
            }
            current = current.next;
        }
        return node;
    }
    // Otherwise, find the first node that contains val
    while (current.next) {
        current = current.next;
        if (current.value == val) {
            valnode = current;
            break;
        }
    }
    // exit function if no nodes contain val
    if (!valnode) { return node; }
    current = node;
    // check for greater values to the left of valnode
    while (current != valnode) {
        // corner case for first node
        // NEEDS ADDTL TESTING
        // while (node.value > val) {
        //     node = node.next;
        //     current.next = valnode.next;
        //     valnode.next = current;
        //     current = node;
        // }
        while (current.next.value > val) {
            temp = current.next;
            current.next = current.next.next;
            temp.next = valnode.next;
            valnode.next = temp;
        }
        current = current.next;
    }
    current = valnode;
    // check for lesser values to the right of valnode
    while (current.next) {
        while (current.next.value < val) {
            temp = current.next;
            current.next = current.next.next;
            temp.next = node;
            node = temp;
        }
        current = current.next;
    }
    return node;
}
