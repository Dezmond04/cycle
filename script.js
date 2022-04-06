'use strick';

let drawer = prompt('Ведите количество ящиков');
let num1 = 324;
let num2 = 12;
let num3 = 1;
let num4 = drawer % num1;
let num5 = 27;
let num6 = 1;
let num22 = num4 % num5;

for (let i = 1; drawer >= num1; i++) {
  console.log('грузовик ' + i);
  drawer -= num1;
  num3++;
  
  for (let i = 1; i < 13; i++){
    console.log('Контейнер ' + num6); 
    num6++
    for (let i = 1; i <= 27; i++) {
      console.log('ящик ' + i);
    }
  }
}
console.log('Грузовик ' + num3);

for (let i = 1; num4 >= 27; i++) {
  console.log('Контейнер ' + num6);
  num6++;
  num4 -= 27;
  for (let i = 1; i <= 27; i++) {
    console.log('ящик ' + i);
  }
}
console.log('Контейнер ' + num6);68

for (let i = 1; i <= num22; i++) {
  console.log('ящик ' + i);  
}
  




