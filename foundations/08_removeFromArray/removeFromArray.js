const removeFromArray = function (array, ...parameters) {
  return (filteredArray = array.filter((item) => !parameters.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
