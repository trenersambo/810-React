// ф-ции в объекте
const objFoo = {

// ф-ция №2
 testFooObj: function testFoo(arr){
  let newArr = []
  for(let idx in arr){
    newArr.push(arr[idx].lng)
  }
  return newArr ;
},

//  ф-ция № 3
 mapFoo: function mapFoo(arr) {
    arr.filter(el=> {
    console.log(el.sport === 'sambo')})
  }  

// ... ф-ция № 100500
}

//экспорт ф-ций через константы переменных
export const testFoo = objFoo.testFooObj ;
export const mapFoo1 = objFoo.mapFoo;
