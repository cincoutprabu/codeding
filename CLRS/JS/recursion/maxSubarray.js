// maxSubarray.js

module.exports = {
    maxSubarray: function (a, start, end) {
        if (start == end) {
            return [start, end, a[start]];
        } else {
            // 'Divide' step
            let mid = parseInt(start + (end - start) / 2);

            // 'Conquer' step
            let leftResult = module.exports.maxSubarray(a, start, mid);
            let rightResult = module.exports.maxSubarray(a, mid + 1, end);

            // 'Combine' step
            let midResult = module.exports.getCrossMaxSum(a, start, mid, end);
            if (leftResult[2] > rightResult[2] && midResult[2])
                return leftResult;
            else if (rightResult[2] > leftResult[2] && midResult[2])
                return rightResult;
            return midResult;
        }
    },

    getCrossMaxSum: function (a, start, mid, end) {
        // Find max sum from left side
        let leftIndex = -1;
        let leftSum = 0;
        let maxLeftSum = Number.MIN_VALUE;
        for (let i = mid; i >= start; i -= 1) {
            leftSum += a[i];
            if (leftSum > maxLeftSum) {
                maxLeftSum = leftSum;
                leftIndex = i;
            }
        }

        // Find max sum from right side
        let rightIndex = -1;
        let rightSum = 0;
        let maxRightSum = Number.MIN_VALUE;
        for (let i = mid + 1; i <= end; i += 1) {
            rightSum += a[i];
            if (rightSum > maxRightSum) {
                maxRightSum = rightSum;
                rightIndex = i;
            }
        }

        return [leftIndex, rightIndex, maxLeftSum + maxRightSum];
    }
};
