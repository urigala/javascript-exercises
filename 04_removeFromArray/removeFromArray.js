const removeFromArray = function(array, ...args ) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                array.splice(i, 1)
                i-- // must reduce current iteration since element was removed
            }
        }        
    }
    return array
};

// removeFromArray([1, 2, 3, 4, 5, 6], 2, 3, 4, '6')

// Do not edit below this line
module.exports = removeFromArray;
