//1.

let a = Number(prompt('number a', 'a'));
let b = Number(prompt('number b', 'b'));

function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return 'a = b';
  }
}

alert(maxNumber(a, b));

//2.

let num = Number(prompt('Enter the number'));

function reverse(number) {
  return -number;
}

alert(reverse(num));

//3.

let number = prompt('Enter the number');
let count = prompt('Enter the count');

function three(number, count) {
  for (let i = 0; i < count; i++) {
    number += 3;
  }
  return number;
}

alert(three(+number, +count));

//4.

let metric = prompt('enter the metric unit');
let km = Number(prompt('enter kilometers'));

function KmToM(kilometers) {
  return kilometers * 1000;
}
function KmToCM(kilometers) {
  return kilometers * 100000;
}

function getMetric(metric, km, m, cm) {
  switch (metric) {
    case 'm':
      return m(km);
      break;
    case 'cm':
      return cm(km);
  }
}

alert(getMetric(metric, km, KmToM, KmToCM));
