function organizingContainers(container) {
    const typeCount = container.map(row => row.reduce((a,b) => a+b));
    const ballCount = container.reduce((acc, row) => row.map((b, i) => acc[i] + b), new Array(container.length).fill(0));
    typeCount.sort((a,b)=>a-b);
    ballCount.sort((a,b)=>a-b);
    return JSON.stringify(typeCount) === JSON.stringify(ballCount) ? "Possible" : "Impossible";
}
