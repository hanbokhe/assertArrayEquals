function assertArraysEqual(actual, expected, testName) {
  if (actual.length !== expected.length)
  {
      console.log("FAILED ["+ testName +"] Expected \"" + expected + "\", but got \"" + actual + "\"");
      return;
  }
  for (var i = 0; i <expected.length; i++)
  {
      if (actual[i] !== expected[i])
      {
          console.log("FAILED ["+ testName +"] Expected \"" + expected + "\", but got \"" + actual + "\"");
          return;
      }
  }
  console.log("passed");
  return;
}
