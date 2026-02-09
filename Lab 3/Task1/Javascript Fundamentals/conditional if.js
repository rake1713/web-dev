if ("0") {// станиовится true потому что стринг всегда true
  alert( 'Hello' ); //появится надпись алерт
}

let offNameJS = prompt("What's the “official” name of JavaScript?", "")

if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }


let a = prompt("Type a number", '');

if (a >0){
    alert(1);
}
else if (a<0){
    alert(-1);
}
else{
    alert(0);
}


let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let res = (a + b < 4) ? 'Below' : 'Over'; // это сокрощенный условие если true то появится Below иначе Over


let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let mesage = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; // это тоже сокрощенный условие но уже по сложнее

  