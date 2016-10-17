function selectionSort(arr) {
    var temp, mindex, i, j;
    for (i=0; i<arr.length-1; i++) {
        mindex = i;
        for (j=i+1; j<arr.length; j++) {
            if (arr[j]<arr[mindex]) {
                mindex = j;
            }
        }
        if (mindex>i) {
            temp = arr[mindex];
            arr[mindex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
