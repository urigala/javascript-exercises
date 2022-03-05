const ftoc = function(temp) {
  let celciusTemp = (temp-32)*(5/9)  
  return roundToOne(celciusTemp)
};

const ctof = function(temp) {
  let fahrenTemp = temp * (9/5) + 32
  return roundToOne(fahrenTemp)
};

function roundToOne(num) {    
  return +(Math.round(num + "e+1")  + "e-1");
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
