function miniMaxSum(arr) {
    let total = arr.reduce((sum, num) => sum + num, 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minSum = total - max;
    let maxSum = total - min;
    console.log(minSum + " " + maxSum);
}
