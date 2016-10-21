function SLBubbleSort(list) {
	if (!list.head || !list.head.next) { return list; }
	var has_changed, temp, runner;
	while(true) {
		has_changed = false;
		runner = list.head;
		if (runner.val > runner.next.val) {
			temp = runner.next;
			runner.next = temp.next;
			temp.next = runner;
			list.head = temp;
			runner = list.head;
			has_changed = true;
		}
		while(runner.next.next) {
			if (runner.next.val > runner.next.next.val) {
				temp = runner.next.next;
				runner.next.next = temp.next;
				temp.next = runner.next;
				runner.next = temp;
				has_changed = true;
			}
			runner = runner.next;
		}
		// Return list when runner iterates list without swapping nodes
		if(!has_changed) { return list; }
	}
}