// Instructions:
// Create a Node method to remove itself from linked lists
// that include it.  Note: Node could be first in the list
// and you do not have a pointer to the previous node.

function Node(val) {
    this.value = val;
    this.next = null;
    this.removeSelf = function() {
        // Doesn't work if node is last node in list.
        // Could be accounted for by adjusting the list method that would utilize this node method.
        if (!this.next) {
            this.value = null;
            return this;
        }
        this.value = this.next.value;
        this.next = this.next.next;
        return this;
    }
}


// Create List with basic methods in order to test
function List() {
    this.head = null;
    this.addNode = function(node) {
        if (!this.head) {
            this.head = node;
            return this;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        return this;
    }
    this.removeVal = function(val) {
        if (!this.head) {
            return this;
        }
        var current = this.head;
        while (current.value == val) {
            current.removeSelf();
        }
        while(current.next) {
            current = current.next;
            while (current.value == val) {
                current.removeSelf();
            }
        }
        return this;
    }
    this.printVals = function() {
        if (!this.head) {
            console.log([]);
        }
        var current = this.head;
        var values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values);
        return this;
    }
}

// Create List
// var list = new List();
// var vals = [1,2,4,4,5]
// for (var i=0; i<vals.length; i++) {
//     var newNode = new Node(vals[i]);
//     list.addNode(newNode);
// }
//
// // Test node.removeSelf using list.removeVal
// list.printVals();
// list.removeVal(2);
// list.printVals();
