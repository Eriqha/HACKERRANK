function surfaceArea(A) {
    let h = A.length, w = A[0].length, area = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            area += 2;
            area += i === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i - 1][j]);
            area += i === h - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i + 1][j]);
            area += j === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i][j - 1]);
            area += j === w - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i][j + 1]);
        }
    }
    return area;
}
