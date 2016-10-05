// Instructions:
// Find the Nth largest value of a given array.

function nthLargest(arr, n){
	//fast fail if n is outside bounds of array
	if(n<=0 || n>arr.length) { return -1; }
	//determine min and max values of array
	var max = arr[0];
	var min = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(arr[i]>max) { max = arr[i]; }
		else if(arr[i]<min) { min = arr[i]; }
	}
	//if n is 1, return max
	if(n===1) { return max }
	//iterate through array n-1 times
	//set nthMax to equal min, then compare that value to max and each value of the array
	for(i=0; i<n-1; i++) {
		var nthMax = min;
		for(var j=0; j<arr.length; j++) {
			if(arr[j]>nthMax && arr[j]<max) { nthMax = arr[j]; }
		}
		//set max equal to nthMax for accurate comparison on next loop iteration
		max = nthMax;
	}
	return nthMax;
}
