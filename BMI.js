function getBMI(name, ht, wt) {
  var bmi = (wt/(ht ** 2));
  var msg;

  if (name.length > 0){name = name.toUpperCase();}

  if (bmi < 18.5) {
    msg = "UW:UNDERWEIGHT";
  } else if (bmi >= 18 && bmi < 25) {
    msg = "NW:NORMAL WEIGHT";
  } else if (bmi >= 25 && bmi < 30) {
    msg = "OW:OVERWEIGHT";
  } else if (bmi >= 30 && bmi < 35) {
    msg = "O1:OBESE I";
  } else if (bmi >= 35 && bmi < 40) {
    msg = "O2:OBESE II";
  } else if (bmi >= 40) {
    msg = "O3:SEVERELY OBESE";
  }

  document.getElementById("bmi_reading").innerHTML =  "Hi " + name + ", your BMI is " + bmi + " (" + msg.substr(3) + ")";
  document.getElementsByClassName(msg.substr(0,2))[0].style = "font-weight:bold; background-color:#78c4d4;";
  document.getElementsByClassName(msg.substr(0,2))[1].style = "font-weight:bold; background-color:#78c4d4;";
  showBMIImg(msg.substr(0,2));
}

function showBMIImg(imgfor){
  switch (imgfor) {
    case "UW":
      document.querySelector("img").src = "images/underweight.png";
      break;
    case "NW":
      document.querySelector("img").src = "images/normalweight.png";
      break;
    case "OW":
      document.querySelector("img").src = "images/overweight.png";
      break;
    case "O1":
      document.querySelector("img").src = "images/obese1.png";
      break;
    case "O2":
      document.querySelector("img").src = "images/obese2.png";
      break;
    case "O3":
      document.querySelector("img").src = "images/obese3.png";
      break;
  }
}
