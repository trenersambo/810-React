import './App.css';
import  ComponFoto from './ComponFoto'
import Text from './ComponTxt'
import Text3 from './ComponTxt3'

import SportList from './SportList';
 
const txtData = {
  firstTxt: 'Фото заряжено борьбой',
  secondTxt: 'Resling the Best sport!',

  arr: [
    {'id': '001', 'sport': 'Sambo'},
    {'id': '002', 'sport': 'BJJ'},
    {'id': '003', 'sport': 'Judo'},
  ] 
}

const sportArr = [
{"name": "Sambo", "descript": "Russain mortal", "img": "1.jpg"},
{"name": "Judo", "descript": "Flexible way",  "img": "2.jpg"},
{"name": "BJJ", "descript": "Brazilian restling",  "img": "3.jpg"},
{"name": "Muay", "descript": "Fight for man", "img": "4.jpg"},
]

function App() {
  return (
    <div className="App">
    <ComponFoto data = {txtData}    />
    <Text/>
    <Text3 dataArr = {txtData} />

    {/* Передача массива данных через Props в SportList.js */}
    {sportArr.map(el=> 
    < SportList 
    key={el.name}
    nameEl = {el.name} 
    descrEl = {el.descript}
    imgEl = {el.img}
    />)  
    }
    </div>
  );
}
export default App;
