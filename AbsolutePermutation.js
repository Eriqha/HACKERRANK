function absolutePermutation(n, k) {
    if (k === 0) return Array.from({length: n}, (_, i) => i + 1);
    if (n % (2 * k) !== 0) return [-1];
    const res = [];
    for (let i = 1; i <= n; i++)
        res.push(Math.floor((i - 1) / k) % 2 === 0 ? i + k : i - k);
    return res;
}
