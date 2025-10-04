function nonDivisibleSubset(k, s) {
    let freq = Array(k).fill(0);

    for (let num of s) {
        freq[num % k]++;
    }

    let count = Math.min(freq[0], 1); // at most one element divisible by k

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i !== k - i) {
            count += Math.max(freq[i], freq[k - i]);
        } else {
            count += Math.min(freq[i], 1); // when k is even
        }
    }

    return count;
}
