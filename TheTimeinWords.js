function timeInWords(h, m) {
    const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","quarter","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two","twenty three","twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine","half"];
    if (m === 0) return `${words[h]} o' clock`;
    if (m <= 30) {
        const unit = m === 15 ? "quarter" : m === 30 ? "half" : `${words[m]} minute${m === 1 ? '' : 's'}`;
        return `${unit} past ${words[h]}`;
    } else {
        const remain = 60 - m;
        const unit = remain === 15 ? "quarter" : `${words[remain]} minute${remain === 1 ? '' : 's'}`;
        return `${unit} to ${words[h + 1]}`;
    }
}
