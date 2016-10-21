// Instructions:
// Create a function that combines two already-sorted singly linked lists,
// returning a sorted list with both inputs.

function combineSLLs(list1, list2) {
	if (!list1.head) { return list2; }
	else if (!list2.head) { return list1; }
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
	return newList;
}