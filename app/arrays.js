exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    map: function (arr, f) {
        const recMap = (arr, f, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum;
            else
                return recMap(arr, f, accum.concat(f(arr[currIndex])), currIndex + 1);
        };

        return recMap(arr, f, [], 0);
    },

    reduce: (arr, f, start) => {
        const recRed = (arr, f, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum;
            else
                return recRed(arr, f, f(accum, arr[currIndex]), currIndex + 1);
        };

        return recRed(arr, f, start, 0);
    },

    filter: (arr, f) => {
        const recFilter = (arr, f, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum;
            else if (f(arr[currIndex]))
                return recFilter(arr, f, accum.concat(arr[currIndex]), currIndex + 1);
            else
                return recFilter(arr, f, accum, currIndex + 1);
        };

        return recFilter(arr, f, [], 0);
    },

    indexOf: function (arr, item) {
        const idxOf = (arr, item, currIndex) => {
            if (currIndex >= arr.length)
                return -1;
            else if (arr[currIndex] === item)
                return currIndex;
            else
                return idxOf(arr, item, currIndex + 1);
        };

        return idxOf(arr, item, 0);
    },

    sum: function (arr) {
        return exports.arraysAnswers.reduce(arr, (total, curr) => total + curr, 0);
    },

    remove: function (arr, item) {
        return exports.arraysAnswers.filter(arr, currItem => currItem != item);
    },

    removeWithoutCopy: function (arr, item) {
        const recRem = (arr, item, currIndex) => {
            if (currIndex >= arr.length)
                return arr;
            else if (arr[currIndex] === item) {
                arr.splice(currIndex, 1);
                return recRem(arr, item, currIndex);
            } else
                return recRem(arr, item, currIndex + 1);
        };

        return recRem(arr, item, 0);
    },

    append: function (arr, item) {
        const recAppend = (arr, item, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum.concat(item);
            else
                return recAppend(arr, item, accum.concat(arr[currIndex]), currIndex + 1);
        };

        return recAppend(arr, item, [], 0);
    },

    truncate: function (arr) {
        const recTruncate = (arr, accum, currIndex) => {
            if (currIndex >= arr.length - 1)
                return accum;
            else
                return recTruncate(arr, accum.concat(arr[currIndex]), currIndex + 1);
        };

        return recTruncate(arr, [], 0);
    },

    prepend: function (arr, item) {
        const recPrepend = (arr, item, accum, currIndex) => {
            if (currIndex >= arr.length)
                return [item].concat(accum);
            else
                return recPrepend(arr, item, accum.concat(arr[currIndex]), currIndex + 1);
        };

        return recPrepend(arr, item, [], 0);
    },

    curtail: function (arr) {
        const recCopy = (arr, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum;
            else
                return recCopy(arr, accum.concat(arr[currIndex]), currIndex + 1);
        };

        if (arr.length > 0)
            return recCopy(arr, [], 1);
        else
            return arr;
    },

    concat: function (arr1, arr2) {
        const recConcat = (arr1, arr2, accum, currIndex) => {
            if (currIndex >= arr1.length + arr2.length)
                return accum;
            else if (currIndex < arr1.length)
                return recConcat(arr1, arr2, accum.concat(arr1[currIndex]), currIndex + 1);
            else
                return recConcat(arr1, arr2, accum.concat(arr2[currIndex - arr1.length]), currIndex + 1);
        };

        return recConcat(arr1, arr2, [], 0);
    },

    insert: function (arr, item, index) {
        const recInsert = (arr, index, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum;
            else if (currIndex === index)
                return recInsert(arr, index, accum.concat([item, arr[currIndex]]), currIndex + 1);
            else
                return recInsert(arr, index, accum.concat(arr[currIndex]), currIndex + 1);
        };

        return recInsert(arr, index, [], 0);
    },

    count: function (arr, item) {
        const recCount = (arr, item, count, currIndex) => {
            if (currIndex >= arr.length)
                return count;
            else if (arr[currIndex] === item)
                return recCount(arr, item, count + 1, currIndex + 1);
            else
                return recCount(arr, item, count, currIndex + 1);
        };

        return recCount(arr, item, 0, 0);
    },

    duplicates: function (arr) {
        const recDup = (arr, accum, dupCount, currIndex) => {
            if (currIndex >= arr.length)
                return accum;

            const item = arr[currIndex];

            if (dupCount[item] != undefined)
                dupCount[item] = dupCount[item] + 1;
            else
                dupCount[item] = 0;

            if (dupCount[item] === 1)
                return recDup(arr, accum.concat(item), dupCount, currIndex + 1);
            else
                return recDup(arr, accum, dupCount, currIndex + 1);
        };

        return recDup(arr, [], {}, 0);
    },

    square: function (arr) {
        return exports.arraysAnswers.map(arr, x => x * x);
    },

    findAllOccurrences: function (arr, target) {
        const recOccurs = (arr, accum, currIndex) => {
            if (currIndex >= arr.length)
                return accum;
            else if (arr[currIndex] === target)
                return recOccurs(arr, accum.concat(currIndex), currIndex + 1);
            else
                return recOccurs(arr, accum, currIndex + 1);
        };

        return recOccurs(arr, [], 0);
    }
};
