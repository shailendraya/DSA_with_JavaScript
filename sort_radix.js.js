function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i= 0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}
// getDigit(12345678,1);
// digitCount(23331)
// mostDigits([23,567,89,1,9011])

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
//     console.log(maxDigitCount);
    for(let k=0; k<maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i=0; i< nums.length; i++){
           // getDigit(nums[i], k);
           const digit = getDigit(nums[i], k)
           digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([1,23,9,0,156,0,878,38,-876]);
// doesn't work with -tive number