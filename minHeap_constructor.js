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
		var temp,
			index = data.length,
			parent = Math.floor(index / 2);
		data[index] = val;
		while (index > 1 && data[parent] > val) {
			temp = data[index];
			data[index] = data[parent];
			data[parent] = temp;
			index = parent;
			parent = Math.floor(index / 2);
		}
		return data;
	}
	this.contains = function(val) {
		return rContains(val, data, 1);
	}

	function rContains(val, arr, index) {
		if (arr[index] == val) { return true; }
		var result,
			left = index * 2,
			right = left + 1;
		if (arr[left] != undefined) {
			result = rContains(val, arr, left);
			if (result) { return true; }
		}
		if (arr[right] != undefined) {
			result = rContains(val, arr, right);
			if (result) { return true; }
		}
		return false;
	}
}
