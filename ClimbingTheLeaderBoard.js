function climbingLeaderboard(ranked, player) {
    const uniqueRanks = [...new Set(ranked)];
    const result = [];
    let i = uniqueRanks.length - 1;

    for (let score of player) {
        while (i >= 0 && score >= uniqueRanks[i]) {
            i--;
        }
        result.push(i + 2);
    }

    return result;
}
