
function Post({el }){
 console.log(el )

  return (
    <article className='users-list'>
      <div className='user-wrap'  >
        <h3>{el.first_name}</h3>
        <h4>{el.last_name}</h4>
        <img src={el.avatar} alt="avatar" />
      </div>
    </article>
  );

}

export default Post