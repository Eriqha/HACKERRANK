function sockMerchant(n, ar) {
    const counts = {};
    for (let color of ar) {
        counts[color] = (counts[color] || 0) + 1;
    }
    let pairs = 0;
    for (let color in counts) {
        pairs += Math.floor(counts[color] / 2);
    }
    return pairs;
}
