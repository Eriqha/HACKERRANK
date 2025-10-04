function circularArrayRotation(a, k, queries) {
    const n = a.length;
    const result = [];
    k = k % n;

    for (let q of queries) {
        let index = (q - k + n) % n;
        result.push(a[index]);
    }

    return result;
}
