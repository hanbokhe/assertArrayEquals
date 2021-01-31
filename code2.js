function assertArraysEqual(actual, expected, testName) {
  var areEqualValues = actual.every(function(item, i) {
    return item === expected[i];
  });
  var areEqualLength = (actual.length === expected.length);

  if (areEqualLength && areEqualValues) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}
