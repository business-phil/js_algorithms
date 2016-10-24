function partition(arr) {
	var i, j, temp, pivot = 0;
	for (i=1; i<arr.length; i++) {
		if (arr[i] < arr[pivot]) {
			temp = arr[i];
			for (j=i; j>pivot; j--) {
				arr[j] = arr[j-1];
			}
			arr[pivot] = temp;
			pivot++;
		}
	}
	return arr;
}
