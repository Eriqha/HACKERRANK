function encryption(s) {
    s = s.replace(/ /g, '');
    const len = s.length;
    const row = Math.floor(Math.sqrt(len));
    const col = Math.ceil(Math.sqrt(len));
    const grid = [];
    for (let i = 0; i < len; i += col) grid.push(s.slice(i, i + col));
    const res = [];
    for (let c = 0; c < col; c++) {
        let word = '';
        for (let r = 0; r < grid.length; r++) word += grid[r][c] || '';
        res.push(word);
    }
    return res.join(' ');
}
