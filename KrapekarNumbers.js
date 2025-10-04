function kaprekarNumbers(p, q) {
    let result = [];

    for (let i = p; i <= q; i++) {
        let sq = (i * i).toString();
        let len = sq.length;
        let right = sq.slice(-i.toString().length) || '0';
        let left = sq.slice(0, len - right.length) || '0';

        if (parseInt(left) + parseInt(right) === i) {
            result.push(i);
        }
    }

    console.log(result.length ? result.join(' ') : 'INVALID RANGE');
}
