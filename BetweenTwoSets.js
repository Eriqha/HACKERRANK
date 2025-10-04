function getTotalX(a, b) {
    let count = 0;
    const start = Math.max(...a);
    const end = Math.min(...b);

    for (let x = start; x <= end; x++) {
        let divisibleByA = a.every(num => x % num === 0);
        let dividesB = b.every(num => num % x === 0);

        if (divisibleByA && dividesB) {
            count++;
        }
    }

    return count;
}
