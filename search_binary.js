function binarySearch(arr, num){
    let i = 0;
    let j = arr.length-1;

    while(i<=j){
        var mid = Math.floor((i+j)/2)
        if(num === arr[mid]){
            return true
        } else if (num > arr[mid]){
            i = mid;
        } else {
            j = mid;
        }
    }
    return false;
}

binarySearch([1,2,3,4,5,7,7,9,10,13,15], 6)