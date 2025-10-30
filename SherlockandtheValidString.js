function isValid(s) {
    const freq = {};
    for (const c of s) freq[c] = (freq[c] || 0) + 1;

    const values = Object.values(freq);
    const countFreq = {};
    for (const v of values) countFreq[v] = (countFreq[v] || 0) + 1;

    const keys = Object.keys(countFreq).map(Number);

    if (keys.length === 1) return "YES";
    if (keys.length === 2) {
        const [a, b] = keys;
        if (countFreq[a] === 1 && (a - 1 === b || a - 1 === 0)) return "YES";
        if (countFreq[b] === 1 && (b - 1 === a || b - 1 === 0)) return "YES";
    }
    return "NO";
}
