let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr){
    let maxSum = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        maxSum = Math.max(maxSum, sum);
        if(sum < 0) sum = 0;
    }
    return maxSum;
}