function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
    console.log(arr,i, start, swapIdx)
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}


function quickSort(arr, left=0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

// pivot([1,3,5,8,3,5,1,0,10,2])
quickSort([1,3,6,8,0,-1,100,243, 11, 0,2,3,83])