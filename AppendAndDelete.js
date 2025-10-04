function appendAndDelete(s, t, k) {
    let commonLength = 0;
    let minLength = Math.min(s.length, t.length);

    for (let i = 0; i < minLength; i++) {
        if (s[i] === t[i]) commonLength++;
        else break;
    }

    let totalOps = (s.length - commonLength) + (t.length - commonLength);

    if (totalOps > k) return "No";
    else if ((k - totalOps) % 2 === 0) return "Yes";
    else if (k >= s.length + t.length) return "Yes";
    else return "No";
}
