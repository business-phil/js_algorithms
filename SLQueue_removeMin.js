// Instructions:
// Given a singly linked queue, identify the minimum
// value and remove all nodes with that value.
// Use only local variables and allocate no other objects.

function removeMin(queue) {
    // Fast fail if queue contains less than two nodes
    if (!queue.head) { return queue; }
    if (!queue.head.next) {
        queue.head = null;
        queue.tail = null;
        return queue;
    }
    var current = queue.head;
    var min = current.value;
    // Find the minimum value
    while (current.next) {
        current = current.next;
        if (current.value < min) {
            min = current.value;
        }
    }
    // Check if first node(s) contain the minimum value
    while (queue.head.value == min) {
        queue.head = queue.head.next;
    }
    // Exit function if all nodes were moved
    // i.e., if all nodes contained the same value
    if (!queue.head) {
        queue.tail = null;
        return queue;
    }
    current = queue.head;
    while (current.next) {
        while (current.next.val == min) {
            current.next = current.next.next;
            if (!current.next) {
                queue.tail = current;
            }
        }
        current = current.next;
    }
    return queue;
}
