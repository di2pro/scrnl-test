const findMaxProduct = (arr = []) => {
    if (!Array.isArray(arr) || !arr.length) {
        return 0;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    let maxInt = Math.max(arr[0], arr[1]);
    let preMaxInt = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (maxInt < arr[i]) {
            preMaxInt = maxInt;
            maxInt = arr[i];
            continue;
        }

        if (preMaxInt < arr[i]) {
            preMaxInt = arr[i];
        }
    }

    return maxInt * preMaxInt;
};

module.exports = findMaxProduct;
