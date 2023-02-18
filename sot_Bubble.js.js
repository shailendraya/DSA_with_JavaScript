function sortBubble(arr){
let lenghtArr = arr.length;
var swaps;
for(var i=arr.length; i>0; i--){
    let tmp;
    swaps = true;
    for(j=0; j<i-1; j++){
        console.log(arr, arr[j], arr[j+1])
        if(arr[j] > arr[j+1]){
            let tmp;
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp
            //swaps = false;
        }
    }
    console.log(arr)
//     if(swaps) break;
  }
}

sortBubble([1,2,3,4,8,7,7,8,7]);