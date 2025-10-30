function countSort(arr) {
    const n = arr.length;
    const output = Array(n);
    const count = Array(100).fill(0);

    for (let i = 0; i < n; i++) count[parseInt(arr[i][0])]++;

    for (let i = 1; i < 100; i++) count[i] += count[i - 1];

    for (let i = n - 1; i >= 0; i--) {
        const num = parseInt(arr[i][0]);
        output[count[num] - 1] = i < n / 2 ? '-' : arr[i][1];
        count[num]--;
    }

    console.log(output.join(' '));
}
