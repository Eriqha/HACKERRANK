function palindromeIndex(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (s.slice(i+1, j+1) === s.slice(i+1, j+1).split('').reverse().join('')) return i;
            if (s.slice(i, j) === s.slice(i, j).split('').reverse().join('')) return j;
            return -1;
        }
        i++; j--;
    }
    return -1;
}