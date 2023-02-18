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

merge([1,3,5,6],[2,4,7,8]);