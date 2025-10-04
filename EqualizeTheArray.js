function equalizeArray(arr) {
    const freq = {};
    let maxFreq = 0;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxFreq) maxFreq = freq[num];
    }

    return arr.length - maxFreq;
}
