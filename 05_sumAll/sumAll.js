const sumAll = function(argOne, argTwo) {

    if (argOne < 0 || argTwo < 0) {
        return 'ERROR'
    } else if (typeof argOne !== 'number' || typeof argTwo !== 'number' ) {
        return 'ERROR'
    }

    let minNum
    let maxNum
    if (argOne < argTwo) {
        minNum = argOne
        maxNum = argTwo
    } else {
        minNum = argTwo
        maxNum = argOne
    }

    let numSum = 0
    for (let i = minNum; i <= maxNum; i++ ) {
        numSum+=i
    }

    return numSum
};

// Do not edit below this line
module.exports = sumAll;
