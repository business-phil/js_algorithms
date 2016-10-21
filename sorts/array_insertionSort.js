function insertionSort(arr) {
	var temp, i, j;
	for (i=1; i<arr.length; i++) {
		if (arr[i-1] >arr[i]) {
			temp = arr[i];
			j = i;
			while (arr[j-1] > temp && j > 0) {
				arr[j] = arr[j-1];
				j--;
			}
			arr[j] = temp;
		}
	}
	return arr;
}