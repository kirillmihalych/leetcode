const minOperations = (s) => {
    let n = s.length;
    let t1 = "0";
    let t2 = "1";
    for (let i = 1; i <= n - 1; i++) {
        if (t1[i - 1] == '0') {
            t1 += '1';
        } else {
            t1 += '0'
        }
        if (t2[i - 1] == '0') {
            t2 += '1';
        } else {
            t2 += '0'
        }
    }
    return Math.min(compare(s, t1), compare(s, t2));
};

const compare = (s, t) => {
    let cnt = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] != t[i]) cnt++;
    }
    return cnt;
};