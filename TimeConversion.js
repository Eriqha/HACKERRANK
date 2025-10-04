function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2), 10);
    const minutesSeconds = s.slice(2, 8);
    const period = s.slice(8);

    if (period === "AM") {
        if (hour === 12) hour = 0;
    } else {
        if (hour !== 12) hour += 12;
    }

    const hourStr = hour.toString().padStart(2, '0');
    return hourStr + minutesSeconds;
}
