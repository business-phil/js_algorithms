function partition(list, val) {
    var valnode = list.head;
    while (valnode) {
        if (valnode.value == val) { break; }
        valnode = valnode.next;
    }
    if (!valnode) { return list; }
    if (valnode.prev && valnode.next) {
        list.move2back(valnode);
    }
    else if (valnode.next) {
        list.move2back(valnode);
    }
    while (list.head.value > val) {
        var temp = list.head;
        list.move2back(temp);
    }
    var runner = valnode;
    while (runner.prev && runner.prev != list.head) {
        while (runner.prev.value > val) {
            var temp = runner.prev;
            list.move2back(temp);
        }
        runner = runner.prev;
    }
    return list;
}

function DLList() {
    this.head = null;
    this.tail = null;
    this.move2back = function(node) {
        if (!node.prev) { this.head = node.next; }
        else { node.prev.next = node.next; }
        node.next.prev = node.prev;
        node.next = null;
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        return this;
    }
}

function Node(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
}
