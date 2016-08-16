// Создание массива из 5 имен.
var arrNames = []
for (var i = 0; i < 5; i++) {
  var name = prompt('Введите любое имя.', '');
  arrNames.push(name);
}

// Сравнение введенного имени с именами в массиве.
var userName = prompt('Введите имя пользователя.', '');
var count = 0;
for (var i = 0; i < arrNames.length; i++) {
  if (userName === arrNames[i]) {
    count++;
  }
}

// Вывод сообщения об ошибке или об успешном входе.
if (count == 0) {
  alert('Ошибка! Такого имени нет в базе данных.');
} else {
  alert(userName + ', вы успешно вошли.');
}
