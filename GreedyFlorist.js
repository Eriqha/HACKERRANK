function getMinimumCost(k, c) {
    c.sort((a,b)=>b-a);
    let cost = 0;
    for (let i = 0; i < c.length; i++) cost += (Math.floor(i/k) + 1) * c[i];
    return cost;
}
