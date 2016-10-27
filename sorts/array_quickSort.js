function quickSort(arr) {
	return rQuickSort(arr, 0, arr.length);
}

function rQuickSort(arr, min, max) {
	if (max-min > 1) {
		var mid = partition(arr, min, max);
		rQuickSort(arr, mid+1, max);
		rQuickSort(arr, min, mid);
	}
	return arr;
}

// partition returns new index of first value
function partition(arr, min, max) {
	var i, j, temp, pivot = min;
	for (i=min+1; i<max; i++) {
		if (arr[i] < arr[pivot]) {
			temp = arr[i];
			for (j=i; j>pivot; j--) {
				arr[j] = arr[j-1];
			}
			arr[pivot] = temp;
			pivot++;
		}
	}
	return pivot;
}
