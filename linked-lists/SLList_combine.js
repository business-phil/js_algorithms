// Instructions:
// Create a function that combines two already-sorted singly
// linked lists, returning a sorted list with both inputs.
// Place results into the first given list.

function combineSLLs(list1, list2) {
	if (!list1.head || !list2.head) {
		if (list2.head) {
			list1.head = list2.head;
			list2.head = null;
		}
		return list1;
	}
	var newList = new SLList();
	if (list1.head.val < list2.head.val) {
		newList.head = list1.head;
		list1.head = list1.head.next;
	} else {
		newList.head = list2.head;
		list2.head = list2.head.next;
	}
	var runner = newList.head;
	while (list1.head && list2.head) {
		if (list1.head.val < list2.head.val) {
			runner.next = list1.head;
			list1.head = list1.head.next;
			runner = runner.next;
		} else {
			runner.next = list2.head;
			list2.head = list2.head.next;
			runner = runner.next;
		}
	}
	if (list1.head) {
		runner.next = list1.head;
		list1.head = null;
	} else if (list2.head) {
		runner.next = list2.head;
		list2.head = null;
	}
	list1.head = newList.head;
	return list1;
}

// constructors
function SLNode(value) {
	this.val = value;
	this.next = null;
}
function SLList() {
	this.head = null;
	this.size = function() {
		var counter = 0;
		var runner = this.head;
		while (runner) {
			counter++;
			runner = runner.next;
		}
		return counter;
	}
	this.pushBack = function(value) {
		var newNode = new SLNode(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			var runner = this.head;
			while (runner.next) { runner = runner.next; }
			runner.next = newNode;
		}
		return this;
	}
	this.getValues = function() {
		var vals = [];
		var runner = this.head;
		while (runner) {
			vals.push(runner.val);
			runner = runner.next;
		}
		return vals;
	}
}

// test function
var testList1 = new SLList();
var testList2 = new SLList();
testList1.pushBack(2).pushBack(4).pushBack(6);
testList2.pushBack(1).pushBack(3).pushBack(5);
combineSLLs(testList1, testList2);
console.log(testList1.getValues());
