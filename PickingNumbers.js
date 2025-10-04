function pickingNumbers(a) {
    const freq = Array(101).fill(0);

    for (let num of a) {
        freq[num]++;
    }

    let maxLength = 0;

    for (let i = 1; i < freq.length; i++) {
        maxLength = Math.max(maxLength, freq[i] + freq[i - 1]);
    }

    return maxLength;
}
