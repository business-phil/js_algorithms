// Instructions:
// Given two sorted arrays, combine and sort the values.
// Do not create a new array - place results into the first given array.

function combineArrs(arr1, arr2) {
	var i = arr1.length-1;
	var j = arr2.length-1;
	while (i >= 0 && j >= 0) {
		if (arr2[j] >= arr1[i]) {
			arr1[i+j+1] = arr2[j];
			j--;
		} else {
			arr1[i+j+1] = arr1[i];
			i--;
		}
	}
	while (j >= 0) {
		arr1[j] = arr2[j];
		j--;
	}
	return arr1;
}