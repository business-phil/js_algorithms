function mergeSort(arr) {
	return rMerge(arr, splitArr(arr));
}

function rMerge(arr1, arr2) {
	if (arr1.length > 1) {
		rMerge(arr1, splitArr(arr1));
	}
	if (arr2.length > 1) {
		rMerge(arr2, splitArr(arr2));
	}
	return combineArrs(arr1, arr2);
}

// splitArr removes values from the second half of
// an array and returns those values in a new array
function splitArr(arr) {
	var newArr = [];
	var size = Math.floor(arr.length/2);
	for (var i=arr.length-size; i<arr.length; i++) {
		newArr.push(arr[i]);
	}
	arr.length -= size;
	return newArr;
}

// combineArrs combines and sorts two pre-sorted arrays
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
