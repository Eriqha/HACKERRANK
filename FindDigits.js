
function findDigits(n) {
    let count = 0;
    let str = n.toString();

    for (let ch of str) {
        let digit = parseInt(ch);
        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }

    return count;
}
