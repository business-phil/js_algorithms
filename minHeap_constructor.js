function MinHeap() {

	var data = [null];

	this.print = function() {
		console.log(data);
	}
	this.size = function() {
		return data.length - 1;
	}
	this.top = function() {
		return data[1];
	}
	this.isEmpty = function() {
		if (this.size() === 0) {
			return true;
		} else {
			return false;
		}
	}
	this.insert = function(val) {
		var index = data.length;
		var parent = Math.floor(index / 2);
		data.push(val);
		while (index > 1 && data[parent] > val) {
			data[index] = data[parent];
			data[parent] = val;
			index = parent;
			parent = Math.floor(index / 2);
		}
		return data;
	}
	this.contains = function(val) {
		return rContains(val, 1);
	}

	function rContains(val, index) {
		if (data[index] == val) { return true; }
		var result;
		var branch = index * 2,
		// check left branch
		if (data[branch] != undefined) {
			result = rContains(val, data, branch);
			if (result) { return true; }
		}
		// check right branch
		if (data[branch + 1] != undefined) {
			result = rContains(val, data, branch + 1);
			if (result) { return true; }
		}
		return false;
	}
}
