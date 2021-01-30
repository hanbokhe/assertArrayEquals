function assertArrayEquals(actual, expected, testName){  
  var sameLength = actual.length === expected.length;
  var sameValue = true;

  for (var i = 0; i < expected.length; i++)
  {
      if (actual[i]!== expected[i])
      {
          sameValue = false;
          break;
      }
  }
  if (sameValue && sameLength){
      console.log('passed');
  }else{
    console.log("FAILED ["+ testName +"] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
