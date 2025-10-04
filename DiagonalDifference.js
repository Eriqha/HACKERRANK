function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().trim().split(' ').map(Number);
    }

    const result = diagonalDifference(arr);

    console.log(result);  
}
