function repeatedString(s, n) {
    let countA = 0;
    for (let ch of s) {
        if (ch === 'a') countA++;
    }

    let fullRepeats = Math.floor(n / s.length);
    let remainder = n % s.length;

    let total = fullRepeats * countA;

    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') total++;
    }

    return total;
}
