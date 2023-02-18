function naiveSearch(long, short){
    var count = 0;

    for(i=0; i<long.length-1; i++){
        for(j=0; j<short.length; j++){
            console.log(i, long[i], short[j])
            if(long[i+j] !== short[j]){
//                 console.log(i, long[i], short[j])
                break;
            }
            if(j === short.length-1){
                count++
            }
        }
    }
    return count++;
}

naiveSearch("lorie loledlol", "lol")



























// function naiveSearch(long, short){
//     var count = 0;
//     for(var i = 0; i < long.length; i++){
//         for(var j = 0; j < short.length; j++){
//            if(short[j] !== long[i+j]) break;
//            if(j === short.length - 1) count++;
//         }
//     }
//     return count;
// }

naiveSearch("lorie loledlol", "lol")