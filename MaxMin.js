function maxMin(k, arr) {
    arr.sort((a,b)=>a-b);
    let minDiff = Infinity;
    for (let i = 0; i + k - 1 < arr.length; i++)
        minDiff = Math.min(minDiff, arr[i + k - 1] - arr[i]);
    return minDiff;
}
