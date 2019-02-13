// waterJugs.js

module.exports = {
    /*
        Water Jugs Problem:
        Suppose that you are given n red and n blue water jugs, all of
        different shapes and sizes. All red jugs hold different amounts
        of water, as do the blue ones. There is a blug jug that holds
        the same amount of water for every red jug. Find a grouping of
        jugs into pairs of red and blue jugs that hold the same amount
        of water, in such a way that minimum number of comparisons are
        made to determine the grouping.
    */

    waterJugsLinearSearch: function (r, b) {
        let pairs = [];

        for (let i = 0; i < r.length; i += 1) {
            let pair = [i];
            for (let j = 0; j < b.length; j += 1) {
                if (b[j] == r[i]) {
                    pair.push(j);
                    break;
                }
            }
            pairs.push(pair);
        }

        return pairs;
    }
};
