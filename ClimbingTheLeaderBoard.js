function climbingLeaderboard(ranked, player) {
    let unique = [...new Set(ranked)];
    let res = [];
    let i = unique.length - 1;
    for (let score of player) {
        while (i >= 0 && score >= unique[i]) i--;
        res.push(i + 2);
    }
    return res;
}
