module.exports = function reverse (n) {
        if (n > 0) {
        const s = n.toString();
        const newS = s.split('');
        const revS = newS.reverse();
        const Num = revS.join('');
        return Num;
        } else {
        const t = -n;    
        const s = t.toString();
        const newS = s.split('');
        const revS = newS.reverse();
        const Num = revS.join('');
        return Num;    
        }
}
