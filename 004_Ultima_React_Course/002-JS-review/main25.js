// повторение работы с JS с урока 25 React Ultima 2023
// .MAP
//. FILTER

import data from "./script.js"

// ==========================

// console.log()

// Задача №1: Ф-ция показать все книги
function getBooks() {
  return data
}

// Коллекция всех книг из файла данных
const books = getBooks()

// Задача №2. Создать объект автор, наименование

const acc = books.map((el) => ({
  author: el.author,
  tl: el.translations,
}))

console.log(acc)

// Задача №3 (FILTER): фильтр книг:
// - по кол-ву страниц (более 500)
// - по жанру 'fantasy' (чтоб был такой жанр)
// - в итоге, чтоб выдал только  авторов таких отфильтрованных книг

const booksPageGenres = books
  .filter((el) => el.pages > 500)
  .filter((el) => el.genres.includes("fantasy"))
  .map((el) => el.author)

console.log(booksPageGenres) // ['J. R. R. Tolkien', 'George R. R. Martin']

// задача№ 4. Добавить в массив новый объект (новую книгу)

const newBook = {
  id: 7,
  title: "Изучае React для новичков",
  author: "J. Schnedermann",
}

const bookAfterAdd = [...books, newBook]
console.log(bookAfterAdd) // теперь не 5 книг, а 6
