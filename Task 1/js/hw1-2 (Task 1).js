var num = +prompt('Укажите число для возведения в степень (необходимо указать целое число).', '');
var power = +prompt('Укажите степень, в которую нужно возвести число (необходимо указать целое число).', '');

var final = pow(num, power)
console.log(final)

function pow(num, power) {
  var result = 1;
  for (var i = 0; i < Math.abs(power); i++) {
  result *=num;
  }
  if (power >=0) {
    return result;
  } else {
    return 1 / result
  }
}
