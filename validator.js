const validator = {
  // ... 2 funciones
  isValid: function isValid(creditCardNumber) {
    let sum = 0;
    let arrayNumberReverse = creditCardNumber.split("").reverse();
    for (let i = 0; i < arrayNumberReverse.length; i++) {
      let number = 0;
      if ((i + 1) % 2 == 0) {
        number = parseInt(arrayNumberReverse[i]) * 2;
        if (number > 9) {
          number = number.toString().split("");
          number = parseInt(number[0]) + parseInt(number[1]);
        }
        sum += number;
      } else {
        sum += parseInt(arrayNumberReverse[i]);
      }
    }
    if (sum % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function maskify(creditCardNumber) {
    let mascara = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {
        mascara.push("#");
      } else {
        mascara.push(creditCardNumber[i]);
      }
    }
    return mascara.join("");
  },
};

// let numeroCaracteres = creditCardNumber.length;
//if (numeroCaracteres <=4) {
// return creditCardNumber;
// }
// else {
// let mascara= "***";
// return mascara;

// }

export default validator;
