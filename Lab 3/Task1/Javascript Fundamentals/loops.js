let i = 3;

while (i) {
  alert( i-- );
}// -1


let j = 0;
while (++j < 5) alert( j );

let k = 0;
while (k++ < 5) alert( k );

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


let u = 0;
while (u < 3) {
  alert( `number ${u}!` );
  u++;
}


let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

    