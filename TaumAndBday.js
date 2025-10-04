function taumBday(b, w, bc, wc, z) {
    const costBlack = Math.min(bc, wc + z);
    const costWhite = Math.min(wc, bc + z);
    
    return BigInt(b) * BigInt(costBlack) + BigInt(w) * BigInt(costWhite);
}
