function minimumDistances(a) {
    let minDist = Infinity;
    const positions = new Map();

    for (let i = 0; i < a.length; i++) {
        if (positions.has(a[i])) {
            const prevIndex = positions.get(a[i]);
            const dist = i - prevIndex;
            if (dist < minDist) minDist = dist;
        }
        positions.set(a[i], i);
    }

    return minDist === Infinity ? -1 : minDist;
}
