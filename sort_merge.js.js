function merge(arr1, arr2){
    let i = 0; let j = 0;
    var arr = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j] ){
            arr.push(arr2[j]);
            j++;
        } else {
            arr.push(arr1[i]);
            i++;
        }
    }

        while(i < arr1.length) {
            arr.push(arr1[i])
            i++;
        }
        while(j < arr2.length) {
            arr.push(arr2[j])
            j++;
        }
        
    return arr;
}

// merge([1,3,5,6],[2,4,7,8]);


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let sortArray = merge(left, right)
    return sortArray;
}

mergeSort([1,3,0,10,7,6,7,5,9,7,8])