function sumZero(arr){
    let x = 0;
    let y = arr.length - 1;
    while(x < y){
        if(arr[x]+arr[y] === 0){
            return [arr[x], arr[y]]
        }
        if(arr[x]+arr[y] > 0){
            y--;
        } else {
            x++;
        }
    }
}


sumZero([-5,-4,-2,1,2,3,9])
//sumZero([1,2,3,-2,-4])