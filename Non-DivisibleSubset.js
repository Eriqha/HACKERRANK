function nonDivisibleSubset(k, s) {
    const freq = new Array(k).fill(0);
    for (let num of s) freq[num % k]++;
    let res = Math.min(freq[0], 1);
    for (let i = 1; i <= Math.floor(k/2); i++) {
        if (i !== k - i) res += Math.max(freq[i], freq[k - i]);
        else res++;
    }
    return res;
}
