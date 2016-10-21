function bubbleSort(arr) {
    var temp, made_changes, i, j;
    for (i=0; i<arr.length-1; i++) {
        made_changes = false;
        for (j=0; j<arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                made_changes = true;
            }
        }
        if (!made_changes) { break; }
    }
    return arr;
}
