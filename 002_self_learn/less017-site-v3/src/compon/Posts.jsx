
import Post from './Post';
import data from './data.json';

function Posts() {
  
 const BlogPost = data.map((el)=> 
  {return <Post 
  dataProps = {el}
  key={el.id}
  />}
  
  )

  return ( 
  <>
    <h2>Блок постов</h2>
    {BlogPost}
  </>
   );
}

export default Posts;