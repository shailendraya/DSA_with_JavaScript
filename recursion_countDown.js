function countDown(num){
    if(num <= 0){
        console.log('All Done');
     return;
    }
    console.log(num)
    num--
    countDown(num);
}

// countDown(8)

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

factorial(5)