import logo from './judo.jpg';
import './App.css';

console.log('сработал App.js')

function App() {
  return (
    <div className="App">

      <img src={logo}  alt="бросокПрогиб" 
      className='judo_img'
      />

      <p  className='p_txt' >
      Прогибайся на бросок, а не под условия
      </p>
      <hr />
      <p>первый react-проект</p>

    </div>

  );
}

export default App;
