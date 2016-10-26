function mergeSort(list) {
	list = rMerge(list, splitList(list, Math.floor(list.size/2)));
	return list;
}

function rMerge(list1, list2) {
	var length1 = list1.size;
	var length2 = list2.size;
	if (length1 > 1) {
		list1 = rMerge(list1, splitList(list1, Math.floor(list1.size/2)));
	}
	if (length2 > 1) {
		list2 = rMerge(list2, splitList(list2, Math.floor(list2.size/2)));
	}
	return combineSLLs(list1, list2);
}

// splitList creates a new list starting with the node at a
// given index and disconnects those nodes from the first list
function splitList(list, index) {
	var newList = new SLList();
	var runner = list.head;
	for (var i=0; i<index-1; i++) {
		runner = runner.next;
	}
	newList.head = runner.next;
	runner.next = null;
	return newList;
}

// combineSLLs combines and sorts two pre-sorted linked lists
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
