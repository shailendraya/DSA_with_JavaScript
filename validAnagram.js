function validAnagram(first, second){
    if(first.length !== second.length){
        return false
    }
    const lookup = {}
    for(let i of first){
        lookup[i] = (lookup[i] || 0) + 1;
    }

    console.log(lookup)

    for (let j of second){
        if(lookup[j]){
            lookup[j] = lookup[j]-1;
        }else {
            return false
        }
    }
    return true
}

validAnagram('a4bc44ddq','dd44bcq4a')