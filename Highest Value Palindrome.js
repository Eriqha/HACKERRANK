function highestValuePalindrome(s, n, k) {
    let arr = s.split(''), changes = Array(n).fill(0);
    let left = 0, right = n - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            const maxChar = arr[left] > arr[right] ? arr[left] : arr[right];
            arr[left] = arr[right] = maxChar;
            changes[left] = changes[right] = 1;
            k--;
        }
        left++; right--;
    }
    if (k < 0) return "-1";
    left = 0; right = n - 1;
    while (left <= right) {
        if (left === right) { if (k > 0) arr[left] = '9'; }
        else if (arr[left] !== '9') {
            if (k >= 2 - (changes[left] || changes[right] ? 1 : 0)) {
                arr[left] = arr[right] = '9';
                k -= changes[left] || changes[right] ? 1 : 2;
            }
        }
        left++; right--;
    }
    return arr.join('');
}
