document.writeln('Циклічний метод<br>');
let a = 1, b = 1; //буферні змінні
let c;  //буферні змінні
const n = parseInt(prompt('Введіть кількість чисел')) // індекс останнього числа Фібоначі
document.writeln(a + ',' + b + ',');

for (let i=0; i < n-2; i++){
    c=a+b;
    a=b;
    b=c;
    if(i!== (n-3)){
      document.writeln(c + ',');  
    } else{
      document.writeln(c + ';<br><br>');  
    }
    
}

//---------------------------------------------------------------------

document.writeln('Метод з використанням масиву<br>');
let fibMas = [1,1];

for(let i=0; i < n-2; i++){
    fibMas.push(fibMas[fibMas.length-1]+fibMas[fibMas.length-2]);
}
document.writeln(fibMas + '<br><br>');

//---------------------------------------------------------------------

document.writeln('Метод за формулою Біне<br>');

function fibBine(n){
  let index = Math.pow(5, 0.5);
 
  let left = (1 + index) / 2;
  let right = (1 - index) / 2;
  
  return Math.round((Math.pow(left, n) - Math.pow(right, n)) / index);
}
document.writeln(fibBine(n) + '<br><br>');

//---------------------------------------------------------------------

document.writeln('Рекурсивний метод №1<br>');
function fib1(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fib1(n-2)+ fib1(n-1);
}

document.writeln(fib1(n) + '<br><br>');

//---------------------------------------------------------------------
document.writeln('Рекурсивний метод №2<br>');

function fib2(n) {
      return n <= 1 ? n : fib2(n - 1) + fib2(n - 2); // не цілком розумію, як працюють оператори ? та :
    }
    
document.writeln(fib2(n));    
