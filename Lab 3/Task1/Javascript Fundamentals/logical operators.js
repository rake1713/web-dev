alert( null || 2 || undefined );   // выйдет 2

alert( alert(1) || 2 || alert(3) ); //она вернет 1 и 2, потому что алерт вернул undefined 

alert( 1 && null && 2 ); //null потому что это первое ложное

alert( alert(1) && alert(2) );// выводит 1 и потом undefined

alert( null || 2 && 3 || 4 ); // вернет 3

if (age>=14 && age<=90);

if (age<14 && age>90);

if (!(age>=14 && age<=90));


if (-1 || 0) alert( 'first' );//выйдет
if (-1 && 0) alert( 'second' );// не выйдет
if (null || -1 && 1) alert( 'third' );// выйдет


let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}




