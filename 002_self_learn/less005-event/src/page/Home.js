import './Home.css'

const arr = [
{"name": "Sambo", "des": "Best mortal", "img": "panda.jpg"},
{"name": "Judo", "des": "Flexible way",  "img": "panda.jpg"},
{"name": "BJJ",  "des": "Braz-restling",  "img": "panda.jpg"},
{"name": "Muay", "des": "Fight for man",   "img": "panda.jpg"},
]



function Home() {

 

   
  return ( 

  <>
  <h4>вывод (рендер) массива на текущей странице</h4>

  
    { arr.map( el=> 
    <div className="sport" key={el.name}>
        <p >{el.name}</p>
        <img src={`/img/${el.img}`} alt="" />
        <p >{el.des}</p>
    
    </div>


    ) }
   

  
  </>
  
  
  );
}

export default Home;