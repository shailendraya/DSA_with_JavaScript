function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])

function findUnique(arr){
    let i = 0;
    let j = 1;
    while(j < arr.length){
        console.log('log', i, arr[i], arr[j])
        if(arr[i] === arr[j]){
            j++
        } else {
            i++;
            arr[i] = arr[j];
            j++;
            
        }
    }
    return arr.splice(0,i+1);
}

findUnique([1,2,3,4,4,4,5,6,6])