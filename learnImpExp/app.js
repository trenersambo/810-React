//импорт из файла total.js двух ф-ций:
import { testFoo, mapFoo1 } from "./total.js";

// ф-ция №1
const foo=(arr)=>{
  let art = Object.entries(arr);
  art.map(el=>console.log(el[1].sport))
}
 

// массив
let arr = [
{id: 1, sport: "sambo", lng: "JS"},
{id: 2, sport: "BJJ", lng: "Python"}
]

// вызов Местной ф-ции № 1
foo(arr)

// вызов импортированной ф-ции № 2 
let newArrOut = testFoo(arr)
console.log( newArrOut)

// вызов импортированной ф-ции № 3
mapFoo1(arr)  