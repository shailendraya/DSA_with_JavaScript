function insertSort(arr){
    for(let i=1; i<arr.length; i++){
        var currentVal = arr[i];
        for(var j = i-1; j>=0 && arr[j] > currentVal; j--){
            //console.log(arr[i], arr[j], arr);
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertSort([1,4,6,7,3,5]);

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])