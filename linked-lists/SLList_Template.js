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
