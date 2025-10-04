function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let newChocolates = Math.floor(wrappers / m);
        chocolates += newChocolates;
        wrappers = wrappers % m + newChocolates;
    }

    return chocolates;
}
