function saveThePrisoner(n, m, s) {
    let pos = (s + m - 1) % n;
    return pos === 0 ? n : pos;
}
