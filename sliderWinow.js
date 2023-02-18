function maxSubArray(arr, num){
    var max = -Infinity;

    for(let i=0; i<arr.length+1-num; i++){
        temp = 0;
        for(let j=0; j<num; j++){
             temp = temp + arr[i+j];
             console.log( arr[i], arr[j], temp)
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

//maxSubArray([1,2,3,4,4,5,6,1,4,5],3)

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {

    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    console.log('t',i, num, tempSum, maxSum, arr[i - num], arr[i]);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
