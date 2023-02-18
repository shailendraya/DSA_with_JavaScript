function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for(let i of arr1){
        //console.log(i)
        counter1[i] = (counter1[i] || 0) + 1;
    }
    for(let j of arr2){
        //console.log(j)
        counter2[j] = (counter2[j] || 0) + 1;
    }
    console.log(counter1, counter2)

    for(let k in counter1){
        //console.log(k)
        if(!(k**2 in counter2)){
            console.log(k**2)
           return false
        }

        if(counter2[k**2] !== counter1[k]){
            return false;
        }
    }
    return true;
}

same([1,2,3,3], [1,4,9,9])