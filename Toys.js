function toys(w) {
    w.sort((a,b) => a-b);
    let count = 0, i = 0;
    while (i < w.length) {
        let limit = w[i] + 4;
        count++;
        while (i < w.length && w[i] <= limit) i++;
    }
    return count;
}