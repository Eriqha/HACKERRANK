function queensAttack(n, k, r_q, c_q, obstacles) {
    const obsSet = new Set(obstacles.map(([r, c]) => `${r},${c}`));
    const directions = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
    let attackable = 0;
    for (let [dr, dc] of directions) {
        let r = r_q + dr, c = c_q + dc;
        while (r>=1 && r<=n && c>=1 && c<=n && !obsSet.has(`${r},${c}`)) {
            attackable++; r+=dr; c+=dc;
        }
    }
    return attackable;
}
