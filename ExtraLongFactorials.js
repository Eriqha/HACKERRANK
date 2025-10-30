function extraLongFactorials(n) {
    let res = [1];
    for (let i = 2; i <= n; i++) {
        let carry = 0;
        for (let j = 0; j < res.length; j++) {
            let val = res[j] * i + carry;
            res[j] = val % 10;
            carry = Math.floor(val / 10);
        }
        while (carry) {
            res.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    console.log(res.reverse().join(''));
}
