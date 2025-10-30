function anagram(s) {
    if (s.length % 2) return -1;
    const a = s.slice(0, s.length/2).split('');
    const b = s.slice(s.length/2).split('');
    let count = 0;
    const map = {};
    b.forEach(c => map[c] = (map[c] || 0) + 1);
    a.forEach(c => {
        if (map[c]) { map[c]--; } else { count++; }
    });
    return count;
}