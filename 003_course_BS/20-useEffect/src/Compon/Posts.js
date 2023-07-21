import { useState, useEffect } from "react";
import "./Style.css";

let apiPosts = "https://jsonplaceholder.typicode.com/posts/";

function Posts() {
  // состояние post из API Placeholder
  const [post, setPost] = useState([]);

  // useEffect для объекта из API, []-пустой
  useEffect(() => {
    fetch(apiPosts)
      .then((respon) => respon.json())
      .then((json) => setPost(json));
  }, []);

  // console.log(post)
  // состояние page для листания страниц
  // №№ страниц беру из userId (от 1...до 10)
  const [page, setPage] = useState(5);

  //листание страниц 
  let changPage = (ev) => {
    let symbol = ev.target.innerText; // '-' '+'

  // вместо if - else 
    switch (symbol) {
      case "-":
        setPage(page - 1);
        break;
      case "+":
        setPage(page + 1);
        break;

      default:
        break;
    }
  };

  //готовлю отрисовку, { userId, id, title }  - сразу вместо (el)
  let postMap = post.map(({ userId, id, title }) => {
    // console.log(userId, title)

  // По условию: если userID = page (от 1...10), тогда передать 
  // в рендер все title из api-объекта
    return (
      userId === page && (
        <div key={id} className='postTxt'>
          <p> {title}</p>
        </div>
      )
    );
  });
  // рендер (Листалка, список постов страницы, условный вывод)
  return (
    <>
      <h3>Посты с фиктивного API PlaceHolder</h3>

      <div className="pagination">
        <button onClick={changPage}>-</button>
        <p>Страница {page} </p>
        <button onClick={changPage}>+</button>
      </div>

      {postMap}

      {page > 10 && <p>пусто!</p>}
      {page <= 0 && <p>пусто!</p>}
    </>
  );
}

export default Posts;
