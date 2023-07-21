function Post({dataProps}) {
 const{name, mail,id, title,post,dev,url} = dataProps
  return ( 

  <div  className='post' >

    <div className="postEl"  >

      <div className="postEl-user">
        <a href={"mailto:"+mail}>{name}</a>
        <p>Status:</p>
        <p>{dev}</p>
        <img src={url} alt="author" />      
      </div>

      <div className="postEl-contenet">
        <h3>{title}</h3>
        <p>{post}</p>   
      </div>

    </div>


  </div>

   );
}

export default Post;