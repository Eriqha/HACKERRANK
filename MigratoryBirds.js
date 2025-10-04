function migratoryBirds(arr) {
    const counts = {};
    for (let bird of arr) {
        if (counts[bird]) {
            counts[bird]++;
        } else {
            counts[bird] = 1;
        }
    }

    let maxCount = 0;
    let result = Infinity;

    for (let type in counts) {
        const count = counts[type];
        const typeNum = parseInt(type);

        if (count > maxCount) {
            maxCount = count;
            result = typeNum;
        } else if (count === maxCount && typeNum < result) {
            result = typeNum;
        }
    }

    return result;
}