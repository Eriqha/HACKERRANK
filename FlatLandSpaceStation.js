function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);
    let maxDist = Math.max(c[0], n - 1 - c[c.length - 1]);
    for (let i = 1; i < c.length; i++) {
        maxDist = Math.max(maxDist, Math.floor((c[i] - c[i - 1]) / 2));
    }
    return maxDist;
}
