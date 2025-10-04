function encryption(s) {
    s = s.replace(/\s+/g, '');
    const L = s.length;
    const rows = Math.floor(Math.sqrt(L));
    const cols = Math.ceil(Math.sqrt(L));
    let grid = [];
    
    for (let i = 0; i < L; i += cols) {
        grid.push(s.slice(i, i + cols));
    }
    
    let result = '';
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < grid.length; r++) {
            if (c < grid[r].length) {
                result += grid[r][c];
            }
        }
        if (c < cols - 1) result += ' ';
    }
    return result;
}
