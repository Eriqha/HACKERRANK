function serviceLane(n, cases, width) {
    const results = [];

    for (let [entry, exit] of cases) {
        let minWidth = Infinity;
        for (let i = entry; i <= exit; i++) {
            if (width[i] < minWidth) minWidth = width[i];
        }
        results.push(minWidth);
    }

    return results;
}