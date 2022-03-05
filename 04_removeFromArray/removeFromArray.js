const removeFromArray = function(array, ...args ) {

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < args.length; j++) {
    //         if (array[i] === args[j]) {
    //             array.splice(i, 1)
    //             i-- // must reduce current iteration since element was removed
    //         }
    //     }        
    // }

    for (let i = 0; i < args.length; i++) {
        let index = array.indexOf(args[i]);
        if ( index > -1) {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
