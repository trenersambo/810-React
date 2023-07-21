// import {useState} from 'react';

// import './App.css';
// import PhotoShowPage from './compon/PhotoPage'
// import Button1 from './compon/BtnOne'
// import Button2 from './compon/BtnTwo'
// import Button3 from './compon/BtnThree'

// function App() {

//   let[numPhoto, setNumPhoto] = useState(7)

//   let showPhotoOne = () => {
//     setNumPhoto(numPhoto=1)
//   }
//   let showPhotoTwo = () => {
//     setNumPhoto(numPhoto=2)
//   }
//   let showPhotoThree = () => {
//     setNumPhoto(numPhoto=3)
//   }

//   return (
//     <div className="App">

//      <PhotoShowPage numPhotoProps = {numPhoto}/>

//      <Button1 showPhotoOneProps = {showPhotoOne}/>
//      <Button2 showPhotoTwoProps = {showPhotoTwo}/>
//      <Button3 showPhotoThreeProps = {showPhotoThree}/>
 
//     </div>
//   );
// }

// export default App;





// import {useState} from 'react';
// import './App.css';
// import PhotoShowPage from './compon/PhotoPage'
// import Button1 from './compon/BtnOne'
// import Button2 from './compon/BtnTwo'
// import Button3 from './compon/BtnThree'

// function App() {
//   const [numPhoto, setNumPhoto] = useState(7);

//   const showPhoto = (num) => {
//     setNumPhoto(num);
//   };

//   return (
//     <div className="App">
//       <PhotoShowPage numPhotoProps={numPhoto}/>
//       <Button1 showPhotoOneProps={() => showPhoto(1)}/>
//       <Button2 showPhotoTwoProps={() => showPhoto(2)}/>
//       <Button3 showPhotoThreeProps={() => showPhoto(3)}/>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import ShowSport from "./compon/showSport";
import ShowButtons from "./compon/showButtons";

let nameBtns = [
  { name: "Sambo", txt: "Да ты - красава!" },
  { name: "BJJ", txt: "Shut up and Roll !" },
  { name: "Judo", txt: "Flexibl way" },
];

function App() {
  const [name, setName] = useState("Какой спорт выбираешь?");

  const changeName = (text) => {
    
    setName(text);
  };
    console.log(name);  

  const buttonElements = nameBtns.map((el, idx) => (
    <ShowButtons
      key={idx}
      sport={el}
      changeNameProp={() => changeName(el.txt)}
    />
  ));

  return (
    <div className="App">
      <ShowSport startName={name} />
      {buttonElements}
    </div>
  );
}

export default App;


