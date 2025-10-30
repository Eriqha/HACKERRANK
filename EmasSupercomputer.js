function twoPluses(grid) {
    const n = grid.length, m = grid[0].length;
    const cells = grid.map(r => r.split(''));
    const pluses = [];

    const isGood = (r, c) => cells[r] && cells[r][c] === 'G';
    for (let r = 0; r < n; r++)
        for (let c = 0; c < m; c++)
            if (isGood(r, c)) {
                let size = 0;
                while (isGood(r-size, c) && isGood(r+size, c) && isGood(r, c-size) && isGood(r, c+size))
                    size++;
                for (let s = 1; s < size; s++)
                    pluses.push({r, c, s, area: 4*s - 3});
            }

    const overlap = (p1, p2) => {
        const cells1 = new Set();
        cells1.add(`${p1.r},${p1.c}`);
        for (let k = 1; k < p1.s; k++)
            ['0,-1','0,1','-1,0','1,0'].forEach(d => {
                const [dr, dc] = d.split(',').map(Number);
                cells1.add(`${p1.r+dr*k},${p1.c+dc*k}`);
            });
        const c2 = [[p2.r,p2.c]];
        for (let k = 1; k < p2.s; k++)
            ['0,-1','0,1','-1,0','1,0'].forEach(d => {
                const [dr, dc] = d.split(',').map(Number);
                c2.push([p2.r+dr*k, p2.c+dc*k]);
            });
        return c2.some(([r,c]) => cells1.has(`${r},${c}`));
    };

    let max = 0;
    for (let i = 0; i < pluses.length; i++)
        for (let j = i; j < pluses.length; j++)
            if (!overlap(pluses[i], pluses[j]))
                max = Math.max(max, pluses[i].area * pluses[j].area);
    return max;
}
