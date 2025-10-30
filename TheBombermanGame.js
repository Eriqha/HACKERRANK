function bomberMan(n, grid) {
    if (n === 1) return grid;
    if (n % 2 === 0) return grid.map(_ => 'O'.repeat(grid[0].length));

    const explode = g => {
        const rows = g.length, cols = g[0].length;
        const bombs = Array.from({length: rows}, () => Array(cols).fill('O'));
        for (let i = 0; i < rows; i++)
            for (let j = 0; j < cols; j++)
                if (g[i][j] === 'O') {
                    bombs[i][j] = '.';
                    if (i > 0) bombs[i-1][j] = '.';
                    if (i < rows-1) bombs[i+1][j] = '.';
                    if (j > 0) bombs[i][j-1] = '.';
                    if (j < cols-1) bombs[i][j+1] = '.';
                }
        return bombs.map(r => r.join(''));
    };

    const pattern3 = explode(grid);
    const pattern5 = explode(pattern3);
    return (n - 3) % 4 === 0 ? pattern3 : pattern5;
}
