function isWindy(speed, unit) {
    if (speed > 5 && unit === "metric") {
      return true;
    } else {
      return false;
    }
  }
  
  if (isWindy(4, "imperial")) {
    alert("It is windy");
  } else {
    alert("It is not windy");
  }
  