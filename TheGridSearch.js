function gridSearch(G, P) {
    for (let i = 0; i <= G.length - P.length; i++) {
        let idx = G[i].indexOf(P[0]);
        while (idx !== -1) {
            let found = true;
            for (let j = 1; j < P.length; j++) {
                if (G[i + j].substr(idx, P[0].length) !== P[j]) {
                    found = false;
                    break;
                }
            }
            if (found) return "YES";
            idx = G[i].indexOf(P[0], idx + 1);
        }
    }
    return "NO";
}
