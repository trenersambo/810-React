// повторение работы с JS

import data from "./script.js"

// console.log(data)

function getBooks() {
  return data
}

// ==========================

// Задача №1: Найти по id = 2
function getBook(id) {
  return data.find((d) => d.id === id)
}

let book = getBook(2)

console.log(book) //{id: 2, title: 'The Cyberiad', ..., …}
console.log(book.title, book.author) // The Cyberiad Stanislaw Lem

// Деструктурирую объект Книга с id = 2. Вытащить название автор жанры

const { title, author, genres } = book
console.log(title, author, genres) // The Cyberiad Stanislaw Lem ► (5) ['science fiction',..., 'fantasy']

// Деструктурирую массив
const [a, b, c, d, e] = genres
console.log(a, b, c) // science fiction humor speculative fiction

// ======================================

// Задача №2: применить оператор "распространения" ...rest

const [f, g, ...otherArr] = genres
console.log(f, g, ...otherArr)

// Задача №2.1.: добавить в массив Жанров +1 жанр через ...rest
let genereArr1 = ["NewGenre", ...genres]
//или
let genereArr2 = [...genres, "NewGenre"]

console.log(genereArr1) // ['NewGenre', 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy']
console.log(genereArr2) // ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy', 'NewGenre']

// Задача №2.2.: Добавить новое свойство через Оператор ...spread для Object

const updateBook = { ...book, bestseller: true, ISDN: "123-bis" }
console.table(updateBook) // добавилось 2 новых "ключ:значение" в объект

// ======================================

// Задача №3: Шаблонные литералы

const txt = `Книга ${book.title} написана ${book.author} в ${
  book.publicationDate.split("-")[0]
} году. Кол-во страниц: ${book.pages < 300 ? "менее 300" : book.pages}`

console.log(txt) // Книга The Cyberiad написана Stanislaw Lem в 1965 году. Кол-во страниц: менее 300

// ======================================

// Задача №4: Короткие замыкания (true && ...), ||

// 4.1. Выведет в консоль если у объекта id===2: Так точно
{
  book.id === 2 && console.log("Так точно")
}

// 4.2. Не выведет в консоль (сработало короткое замыкание, тк. первое значение = false):

book.top && console.log("Не выведет в консоль, т.к.top===false")

// 4.3. Выведет в консоль (нет короткого замыкания):

let rusLang = book.translations.russia || "Нет такого перевода"

console.log(rusLang) // Нет такого перевода

// 4.4. Использование ?? или ||

const count1 = book.reviews.librarything.reviewsCount || "нет данных"
const count2 = book.reviews.librarything.reviewsCount ?? "нет данных"

console.log(count1, count2) // "нет данных" // 0

// ======================================
// console.log( )

// Задача №5: ? в цепочке значений
// см. видео 24

let book3 = getBook(3)
//const test1 = book3.reviews.librarything.reviewsCount
//console.log(test1) // Uncaught TypeError: Cannot read properties of undefined

const test2 = book3.reviews.librarything?.reviewsCount
console.log(test2) // undefined (нет ошибки, т.к. до "?" уже false)

const test3 = book3.reviews.goodreads?.reviewsCount
console.log(test3) // 49701 (до "?" все ключи найдены)
