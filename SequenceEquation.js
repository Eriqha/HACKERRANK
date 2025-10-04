function permutationEquation(p) {
    let result = [];
    for (let x = 1; x <= p.length; x++) {
        let y = p.indexOf(x) + 1;
        let z = p.indexOf(y) + 1;
        result.push(z);
    }
    return result;
}
