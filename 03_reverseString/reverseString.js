const reverseString = function(string) {

    let stringArr = string.split('');
    stringArr.reverse();
    let stringReversed = stringArr.join('');
    return stringReversed;

};

reverseString('string')

// Do not edit below this line
module.exports = reverseString;
