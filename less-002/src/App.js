import './App.css';
import  ComponFoto from './ComponFoto'
import Text from './ComponTxt'

console.log('сработала вставка компонента с фото ')

function App() {
  return (
    <div className="App">

    <ComponFoto/>
    <Text/>

    </div>

  );
}

export default App;
