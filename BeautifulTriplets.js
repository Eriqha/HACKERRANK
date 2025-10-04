function beautifulTriplets(d, arr) {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            if (arr[j] - arr[i] === d) {
                for (let k = j + 1; k < n; k++) {
                    if (arr[k] - arr[j] === d) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}
