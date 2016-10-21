function insertionSort(arr) {
	var temp, i, j;
	for (i=1; i<arr.length; i++) {
		if (arr[i] < arr[i-1]) {
			temp = arr[i];
			j = i;
			while (temp < arr[j-1] && j > 0) {
				arr[j] = arr[j-1];
				j--;
			}
			arr[j] = temp;
		}
	}
	return arr;
}